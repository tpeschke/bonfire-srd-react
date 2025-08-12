import { MarkdownContent, ComponentContent } from '@srd/common/interfaces/ChapterInterfaces'
import { Request, Response } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapter(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')

    const chapterContents: (MarkdownContent | ComponentContent)[] = [
        {
            type: 'markdown',
            body: `# Chapter ${chapter} in the ${book}
            The beginning`
        },
        {
            type: 'component',
            component: 'characteristicGenerator'
        },
        {
            type: 'markdown',
            body: 'And thus it was ended'
        }
    ]

    checkForContentTypeBeforeSending(response, { book, chapter, chapterContents })
}