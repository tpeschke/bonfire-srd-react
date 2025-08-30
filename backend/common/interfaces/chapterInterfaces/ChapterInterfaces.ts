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

export type EquipmentTables = 'priceByDistance' | 'animalLivestock' | 'animalMounts' | 'animalBarding' | 'animalFeed' | 'armorPrices' | 'armorStats' | 'beverages' | 'clothing' | 'clothingAccessories' | 'containersHeavy' | 'containersPersonal' | 'musicalInstruments' | 'poisonsNToxins' | 'rope' | 'shields' | 'shieldStats' | 'toolsAdventuring' | 'toolsGeneral' | 'toolsTrade' | 'weaponsAxes' | 'weaponsPolearms' | 'weaponsSidearms' | 'weaponsSwords' | 'weaponsTrauma' | 'weaponsRanged' | 'ammunition' | 'meleeWeaponStats' | 'rangedWeaponStats'

export interface ComponentContent extends ChapterContent {
    type: 'component',
    component: ValidComponents
}

export type Books = 'rules' | 'players'

interface ChapterContentsBase {
    book: Books,
    chapter: number,
    chapterName: string,
    info: ChapterInfo
}

export interface ChapterContentsReturn extends ChapterContentsBase {
    chapterContents: ChapterContents
    navigation: ChapterNavigation[]
}

export type ChapterContents = (MarkdownContent | ComponentContent)[]

export interface ChapterContentsCache extends ChapterContentsBase {
    chapterContents: ChapterContents | LockedChapterContents,
    navigation: ChapterNavigation[] | LockedNavigation
}

export interface LockedChapterContents {
    free: ChapterContents,
    deluxe: ChapterContents
}

export interface LockedNavigation {
    free: ChapterNavigation[],
    deluxe: ChapterNavigation[]
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