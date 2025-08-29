import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface EquipmentInfo extends ChapterInfoBaseObject {
    type: 'equipment',
    info: EquipmentObject[]
}

export interface EquipmentObject {
    priceByDistance: PriceObject,
    animalLivestock: EquipmentItem[],
    animalMounts: EquipmentItem[],
    animalBarding: EquipmentItem[],
    animalFeed: EquipmentItem[],
    armorPrices: EquipmentItem[],
    armorStats: ArmorStatObject[],
    beverages: EquipmentItem[],
    clothing: EquipmentItem[],
    clothingAccessories: EquipmentItem[],
    containersHeavy: EquipmentItem[],
    containersPersonal: EquipmentItem[]
}

export interface PriceObject {
    [key: string] : {
        fullName: string,
        modifiers: number[]
    }
}

export interface ArmorStatObject {
    name: string,
    dr: string,
    defenseMod: number,
    initMod: number,
    recMod: number,
    fatigue: number,
    skillAdj: number,
}

export interface EquipmentItem {
    item: string,
    strength?: number,
    carryBonus?: string,
    size?: string,
    complexity: number,
    basePrice: number
}