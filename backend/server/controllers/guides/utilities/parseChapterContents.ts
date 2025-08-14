import { MarkdownContent, ComponentContent, validComponents } from "@srd/common/interfaces/ChapterInterfaces";

const validComponentArray: validComponents[] = ['characteristicGenerator']

export default function parseChapterContents(rawChapterContents: string): (MarkdownContent | ComponentContent)[] {
    return rawChapterContents.split('<<').map((element: any) => {
        
        if (validComponentArray.includes(element)) {
            return {
                type: 'component',
                component: element
            }
        }
        return {
            type: 'markdown',
            body: element
        }
    })
}