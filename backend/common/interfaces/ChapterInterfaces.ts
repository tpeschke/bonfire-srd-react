export interface ChapterContent {
    type: 'markdown' | 'component'
}

export interface MarkdownContent extends ChapterContent {
    type: 'markdown',
    body: string
}

export type validComponents = 'characteristicGenerator'

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: validComponents
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