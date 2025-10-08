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
    beverages: EquipmentItem[],
    clothing: EquipmentItem[],
    clothingAccessories: EquipmentItem[],
    containersHeavy: EquipmentItem[],
    containersPersonal: EquipmentItem[],
    musicalInstruments: EquipmentItem[],
    poisonsNToxins: EquipmentItem[],
    rope: EquipmentItem[],
    toolsAdventuring: EquipmentItem[],
    toolsGeneral: EquipmentItem[],
    toolsTrade: EquipmentItem[],
    armorPrices: EquipmentItem[],
    armorStats: ArmorStatObject[],
    shields: EquipmentItem[],
    shieldStats: ShieldStatObject[],
    weaponsAxes: EquipmentItem[],
    weaponsPolearms: EquipmentItem[],
    weaponsSidearms: EquipmentItem[],
    weaponsSwords: EquipmentItem[],
    weaponsTrauma: EquipmentItem[],
    weaponsRanged: EquipmentItem[],
    ammunition: EquipmentItem[],
    meleeWeaponStats: MeleeWeaponObject,
    rangedWeaponStats: RangedWeaponObject
}

export type EquipmentObjectKey = keyof EquipmentObject

export interface PriceBySize {
    fullName: string,
    modifiers: number[]
}

export interface PriceObject {
    F: PriceBySize,
    D: PriceBySize,
    T: PriceBySize,
    S: PriceBySize
    M: PriceBySize,
    L: PriceBySize,
    H: PriceBySize,
    G: PriceBySize,
    E: PriceBySize,
    C: PriceBySize
}

export type Size = keyof PriceObject

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

export interface MeleeWeaponObject {
    axes: MeleeWeaponStatObject[],
    polearms: MeleeWeaponStatObject[],
    sidearms: MeleeWeaponStatObject[],
    swords: MeleeWeaponStatObject[],
    trauma: MeleeWeaponStatObject[]
}

export interface MeleeWeaponStatObject {
    name: string,
    size: string,
    damage: string,
    recovery: number,
    damageType: string,
    parry: number,
    measure: number,
    bonus?: boolean
}

export interface RangedWeaponObject {
    thrown: RangedWeaponStatObject[],
    mechanical: RangedWeaponStatObject[],
    firearms: RangedWeaponStatObject[]
}

export interface RangedWeaponStatObject {
    name: string,
    size: string,
    ri: number,
    damage: string,
    recovery: number,
    damageType: string,
    minRecovery: number,
    bonus?: boolean
}

export interface EquipmentItem {
    item: string,
    strength?: number,
    carryBonus?: string,
    size?: Size,
    complexity: number,
    basePrice: number
}