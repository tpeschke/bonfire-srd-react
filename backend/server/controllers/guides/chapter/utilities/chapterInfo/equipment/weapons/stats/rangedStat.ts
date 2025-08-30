import { RangedWeaponObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"
import thrownStats from "./rangedStats/thrownStats"
import mechanicalStats from "./rangedStats/mechanicalStats"
import firearmStats from "./rangedStats/firearmStats"

const rangedWeaponStats: RangedWeaponObject = {
    thrown: thrownStats,
    mechanical: mechanicalStats,
    firearms: firearmStats
}

export default rangedWeaponStats