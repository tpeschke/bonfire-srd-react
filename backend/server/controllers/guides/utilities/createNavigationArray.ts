import { ChapterNavigation } from "@srd/common/interfaces/ChapterInterfaces";

export default function createNavigationArray(rawChapterContents: string): ChapterNavigation[] {
    let navigationArray: ChapterNavigation[] = []

    rawChapterContents.split('\n').forEach((element: string) => {
        if (element.substring(0, 2) === '##') {
            const section = element.substring(3)
            navigationArray.push({
                section,
                id: createNavId(section),
                type: 'h2'
            })

        } else if (element.substring(0, 1) === '#') {
            const section = element.substring(2)
            navigationArray.push({
                section,
                id: createNavId(section),
                type: 'h1'
            })
        }
    })

    return navigationArray
}

function createNavId(section: string): string {
    return section.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").replace(/\ /g, '-').toLowerCase()
}