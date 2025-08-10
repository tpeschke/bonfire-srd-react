import { MarkdownContent, ComponentContent } from '@srd/common/interfaces/ChapterInterfaces'
import { Request, Response } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'

interface ChapterRequest extends Request {
    params: {
        chapterNumber: string
    }
}

export async function getChapter(request: ChapterRequest, response: Response) {
    const chapterNumber = request.params.chapterNumber

    const chapterContents: (MarkdownContent | ComponentContent)[] = [
        {
            type: 'markdown',
            body: `# Chapter ${chapterNumber} 
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

    checkForContentTypeBeforeSending(response, { book: 'rules', chapter: 1, chapterContents })
}