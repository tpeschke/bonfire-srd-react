import { ChapterContentsCache } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import query from '../../../db/database'
import chapterSQL from '../../../db/queries/chapter'
import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../../common/utilities/sendingFunctions'
import { isJustMainOwner } from '../../user/ownerFunctions'
import updateCache from '../cache/updateCache'
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'
import populateChapterContents from '../utilities/parseChapterContents'
import { getUserAppropriateChapter } from './getChapter'

interface ChapterRequest extends Request {
    params: {
        code: string
    },
    body: {
        chapterContents: string
    }
}

export default async function updateChapter(request: ChapterRequest, response: Response) {
    const { user } = request
    
    if (checkIfOwner(user, response)) {
        const [book, chapter] = request.params.code.split('.')
        const chapterNumber = +chapter
        const { chapterContents } = request.body
        const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

        if (book === 'rules' || book === 'players') {
            await query(chapterSQL.updateChapter, [chapterContents, book, chapterNumber])
    
            const newChapter: ChapterContentsCache = populateChapterContents(book, guideChapterNameArray, +chapter, chapterContents)
    
            updateCache(newChapter)
    
            checkForContentTypeBeforeSending(response, {
                ...newChapter,
                ...getUserAppropriateChapter(user, newChapter.chapterContents, newChapter.navigation)
            })
        }

        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })

    }
}

function checkIfOwner(user: User | null | undefined, response: Response) {
    if (!isJustMainOwner(user?.id)) {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have the Correct Permissions" })
        return false
    }

    return true
}