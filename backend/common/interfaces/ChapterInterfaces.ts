export interface ChapterContent {
    type: 'markdown' | 'component'
}

export interface MarkdownContent extends ChapterContent {
    type: 'markdown',
    body: string
}

export type ValidComponents = 'characteristicGenerator' | 'kits' | AncestryImages

type AncestryImages = 'dwarfImage' | 'elfImage' | 'humanImage' | 'orcImage' | 'pechImage' | 'ratfolkImage' | 'gauntImage' | 'starCursedImage'

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: ValidComponents
}

export type Books = 'rules' | 'players'

export interface ChapterContentsReturn {
    book: Books,
    chapter: number,
    chapterName: string,
    chapterContents: (MarkdownContent | ComponentContent)[]
    navigation: ChapterNavigation[]
}

export interface ChapterNavigation {
    section: string,
    id: string,
    type: 'h1' | 'h2'
}