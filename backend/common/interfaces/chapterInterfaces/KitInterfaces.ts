import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface KitInfo extends ChapterInfoBaseObject {
    type: 'kits',
    info: Kit[]
}

export interface Kit {
    title: string,
    items: Item[],
    weight: string,
    extraCash: string
}

export interface Item {
    item: string,
    size: string,
    sellBack: string
}
