import { MeleeWeaponObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"
import { axeStats, axeStatsFree } from "./meleeStats.ts/axeStats"
import { polearmStats, polearmStatsFree } from "./meleeStats.ts/polearmStats"
import { sidearmStats, sidearmStatsFree } from "./meleeStats.ts/sidearmStats"
import { swordStats, swordStatsFree } from "./meleeStats.ts/swordStats"
import { traumaStats, traumaStatsFree } from "./meleeStats.ts/traumaStats"

export const meleeWeaponStats: MeleeWeaponObject = {
    axes: axeStats,
    polearms: polearmStats,
    sidearms: sidearmStats,
    swords: swordStats,
    trauma: traumaStats
}

export const meleeWeaponStatsFree: MeleeWeaponObject = {
    axes: axeStatsFree,
    polearms: polearmStatsFree,
    sidearms: sidearmStatsFree,
    swords: swordStatsFree,
    trauma: traumaStatsFree
}