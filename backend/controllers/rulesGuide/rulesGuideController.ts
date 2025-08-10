import { Request, Response } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'

interface ChapterRequest extends Request {
    params: {
        chapterNumber: string
    }
}

export async function getChapter(request: ChapterRequest, response: Response) {
    const chapterNumber: number = +request.params.chapterNumber

    const body = `
        # Chapter ${chapterNumber}
        The Markdown is rendering!
    `

    checkForContentTypeBeforeSending(response, { body })
}