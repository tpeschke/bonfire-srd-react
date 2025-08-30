import { ChapterContents, ChapterNavigation, ComponentContent, LockedChapterContents, LockedNavigation, MarkdownContent } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";

export default function createNavigationArray(chapterContents: ChapterContents | LockedChapterContents): ChapterNavigation[] | LockedNavigation {
    if (Array.isArray(chapterContents)) {
        return createSpecificNavigation(chapterContents)
    } else {
        return {
            free: createSpecificNavigation(chapterContents.free),
            deluxe: createSpecificNavigation(chapterContents.deluxe)
        }
    }
}

function createSpecificNavigation(contents: ChapterContents) {
    let navigationArray: ChapterNavigation[] = []

    contents.forEach((component: MarkdownContent | ComponentContent) => {
        if (component.type === 'markdown') {
            component.body.split('\n').forEach(element => {
                if (element.substring(0, 3) === '## ') {
                    const section = element.substring(3)
                    navigationArray.push({
                        section,
                        id: createNavId(section),
                        type: 'h2'
                    })

                } else if (element.substring(0, 2) === '# ') {
                    const section = element.substring(2)
                    navigationArray.push({
                        section,
                        id: createNavId(section),
                        type: 'h1'
                    })
                }
            })
        }
    })

    return navigationArray
}

function createNavId(section: string): string {
    return section.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\<\>]/g, "").replace(/\ /g, '-').toLowerCase()
}