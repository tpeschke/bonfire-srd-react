export interface ChapterContent {
    type: 'markdown' | 'component'
}

export interface MarkdownContent extends ChapterContent {
    type: 'markdown',
    body: string
}

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: 'characteristicGenerator'
}

export interface ChapterContentsReturn {
    book: 'rules' | 'player',
    chapter: number,
    chapterContents: (MarkdownContent | ComponentContent)[]
}