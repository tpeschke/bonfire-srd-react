import { Request, Response } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import query from '../../db/database'
import chapterSQL from '../../db/queries/chapter'
import parseChapterContents from './utilities/parseChapterContents'
import createNavigationArray from './utilities/createNavigationArray'
import { ChapterContentsReturn } from '@srd/common/interfaces/ChapterInterfaces'
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

let chapterCache: ChapterContentsReturn[] = []

export function populateChapterCache() {
    rulesChapters
    playerChapters
}

export async function getChapter(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')

    const [{ chaptercontents }] = await query(chapterSQL.getByBookAndChapter, [book, chapter])

    checkForContentTypeBeforeSending(response, {
        book, chapter, 
        navigation: createNavigationArray(chaptercontents),
        chapterContents: parseChapterContents(chaptercontents)
    })
}