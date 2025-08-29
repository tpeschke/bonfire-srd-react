export interface ChapterContent {
    type: 'markdown' | 'component'
}

export interface MarkdownContent extends ChapterContent {
    type: 'markdown',
    body: string
}

export type ValidComponents = 'characteristicGenerator' | 'kits' | 'originsShapesTraditions' | 'rudimentsByTradition' | 'burdensNInjuries' | AncestryImages | ClassImages | EquipmentTables

type AncestryImages = 'dwarfImage' | 'elfImage' | 'humanImage' | 'orcImage' | 'pechImage' | 'ratfolkImage' | 'gauntImage' | 'starCursedImage'

type ClassImages = 'expertImage' | 'fighterImage' | 'servantImage' | 'socialiteImage' | 'weirdAdeptImage'

export type EquipmentTables = 'priceByDistance' | 'animalLivestock' | 'animalMounts' | 'animalBarding' | 'animalFeed' | 'armorPrices' | 'armorStats' | 'beverages'

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: ValidComponents
}

export type Books = 'rules' | 'players'

export interface ChapterContentsReturn {
    book: Books,
    chapter: number,
    chapterName: string,
    info: ChapterInfo
    chapterContents: (MarkdownContent | ComponentContent)[]
    navigation: ChapterNavigation[]
}

export type ChapterInfo = null | ChapterInfoBaseObject

export interface ChapterInfoBaseObject {
    type: 'kits' | 'rudiments' | 'burdensNInjuries' | 'equipment',
    info: any[]
}

export interface ChapterNavigation {
    section: string,
    id: string,
    type: 'h1' | 'h2'
}