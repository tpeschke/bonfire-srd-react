import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface EquipmentInfo extends ChapterInfoBaseObject {
    type: 'equipment',
    info: EquipmentObject[]
}

export interface EquipmentObject {
    priceByDistance: PriceObject,
    animalLivestock: EquipmentItem[],
    animalMounts: EquipmentItem[]
}

export interface PriceObject {
    [key: string] : {
        fullName: string,
        modifiers: number[]
    }
}

export interface EquipmentItem {
    item: string,
    size?: string,
    complexity: number,
    basePrice: number
}