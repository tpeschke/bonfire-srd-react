import { ChapterContentsReturn } from '@srd/common/interfaces/ChapterInterfaces'
import query from '../../../db/database'
import chapterSQL from '../../../db/queries/chapter'
import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../../common/utilities/sendingFunctions'
import { isJustMainOwner } from '../../user/ownerFunctions'
import createNavigationArray from '../utilities/createNavigationArray'
import parseChapterContents from '../utilities/parseChapterContents'
import updateCache from '../cache/updateCache'

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

        if (book === 'rules' || book === 'players') {
            await query(chapterSQL.updateChapter, [chapterContents, book, chapterNumber])
    
            const newChapter: ChapterContentsReturn = {
                book, 
                chapter: chapterNumber,
                navigation: createNavigationArray(chapterContents),
                chapterContents: parseChapterContents(chapterContents)
            }
    
            updateCache(newChapter)
    
            checkForContentTypeBeforeSending(response, newChapter)
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