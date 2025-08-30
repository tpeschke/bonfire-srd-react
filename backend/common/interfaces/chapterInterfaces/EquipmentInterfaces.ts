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
    containersPersonal: EquipmentItem[],
    musicalInstruments: EquipmentItem[],
    poisonsNToxins: EquipmentItem[],
    rope: EquipmentItem[],
    shields: EquipmentItem[],
    shieldStats: ShieldStatObject[],
    toolsAdventuring: EquipmentItem[],
    toolsGeneral: EquipmentItem[],
    toolsTrade: EquipmentItem[],
    weaponsAxes: EquipmentItem[],
    weaponsPolearms: EquipmentItem[],
    weaponsSidearms: EquipmentItem[],
    weaponsSwords: EquipmentItem[],
    weaponsTrauma: EquipmentItem[],
    weaponsRanged: EquipmentItem[],
    ammunition: EquipmentItem[]
}

export interface PriceObject {
    [key: string]: {
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

export interface ShieldStatObject {
    name: string,
    dr: string,
    def: number,
    parry: number,
    cover: string,
    flanks: number,
    fatigue: number,
    bonus?: boolean
}

export interface EquipmentItem {
    item: string,
    strength?: number,
    carryBonus?: string,
    size?: string,
    complexity: number,
    basePrice: number
}