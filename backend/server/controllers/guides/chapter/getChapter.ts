import { Request, Response } from '../../../interfaces/apiInterfaces'
import query from "../../../db/database"
import chapterSQL from '../../../db/queries/chapter'
import { checkForContentTypeBeforeSending } from "../../common/utilities/sendingFunctions"
import { chapterCache } from "../cache/getCache"
import createNavigationArray from "../utilities/createNavigationArray"
import parseChapterContents from "../utilities/parseChapterContents"
import { Books } from '@srd/common/interfaces/ChapterInterfaces'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapterWorkhorse(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')

    if (book === 'rules' || book === 'players') {
        const cachedChapter = chapterCache[book][+chapter - 1]

        if (chapterCache) {
            checkForContentTypeBeforeSending(response, cachedChapter)
        } else {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)

            checkForContentTypeBeforeSending(response, {
                book, chapter,
                navigation: createNavigationArray(chaptercontents),
                chapterContents: parseChapterContents(chaptercontents)
            })
        }

    } else {
        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })
    }
}

export async function getChapterFromDB(book: Books, chapter: string | number) {
    return await query(chapterSQL.getByBookAndChapter, [book, chapter])
}