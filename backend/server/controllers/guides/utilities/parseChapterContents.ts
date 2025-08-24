import { MarkdownContent, ComponentContent, ValidComponents } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";

const validComponentArray: ValidComponents[] = ['characteristicGenerator', 'kits', 'originsShapesTraditions', 'rudimentsByTradition', 'dwarfImage', 'elfImage', 'humanImage', 'orcImage', 'pechImage', 'ratfolkImage', 'gauntImage', 'starCursedImage']

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