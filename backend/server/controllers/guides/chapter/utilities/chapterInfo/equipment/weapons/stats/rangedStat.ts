import { RangedWeaponObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"
import { thrownStats, thrownStatsFree } from "./rangedStats/thrownStats"
import { mechanicalStats, mechanicalStatsFree } from "./rangedStats/mechanicalStats"
import { firearmStats, firearmStatsFree } from "./rangedStats/firearmStats"

export const rangedWeaponStats: RangedWeaponObject = {
    thrown: thrownStats,
    mechanical: mechanicalStats,
    firearms: firearmStats
}

export const rangedWeaponStatsFree: RangedWeaponObject = {
    thrown: thrownStatsFree,
    mechanical: mechanicalStatsFree,
    firearms: firearmStatsFree
}