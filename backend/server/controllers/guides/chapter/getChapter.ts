import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import query from "../../../db/database"
import chapterSQL from '../../../db/queries/chapter'
import { checkForContentTypeBeforeSending } from "../../common/utilities/sendingFunctions"
import { chapterCache } from "../cache/getCache"
import { Books, ChapterContents, LockedChapterContents } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'
import populateChapterContents from '../utilities/parseChapterContents'
import { isOwner } from '../../user/ownerFunctions'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapterWorkhorse(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')
    const { user } = request

    if (book === 'rules' || book === 'players') {
        const cachedChapter = chapterCache[book][+chapter - 1]

        if (cachedChapter) {
            checkForContentTypeBeforeSending(response, {
                ...cachedChapter,
                chapterContents: getChapterContents(user, cachedChapter.chapterContents)
            })
        } else {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)
            const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

            const populatedChapter = populateChapterContents(book, guideChapterNameArray, +chapter, chaptercontents)

            checkForContentTypeBeforeSending(response, {
                ...populatedChapter,
                chapterContents: getChapterContents(user, populatedChapter.chapterContents)
            })
        }

    } else {
        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })
    }
}

export function getChapterContents(user: User | null | undefined, chapterContents: ChapterContents | LockedChapterContents) {
    const isDeluxeUser = user?.patreon && user?.patreon > 0

    if (isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.deluxe
    } else if (!isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.free
    }

    return chapterContents
}

export async function getChapterFromDB(book: Books, chapter: string | number) {
    return await query(chapterSQL.getByBookAndChapter, [book, chapter])
}

export async function getChapterForEdit(request: ChapterRequest, response: Response) {
    const { user } = request

    if (isOwner(user?.id)) {
        const [book, chapter] = request.params.code.split('.')

        if (book === 'rules' || book === 'players') {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)
            const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

            checkForContentTypeBeforeSending(response, {
                book,
                chapterContents: chaptercontents,
                chapterName: guideChapterNameArray[+chapter - 1],
                chapter: chapter
            })
        }
    } else {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have Edit Permissions" })
    }
}
