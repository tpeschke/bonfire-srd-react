import { MeleeWeaponObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"
import axeStats from "./meleeStats.ts/axeStats"
import polearmStats from "./meleeStats.ts/polearmStats"
import sidearmStats from "./meleeStats.ts/sidearmStats"
import swordStats from "./meleeStats.ts/swordStats"
import traumaStats from "./meleeStats.ts/traumaStats"

const meleeWeaponStats: MeleeWeaponObject = {
    axes: axeStats,
    polearms: polearmStats,
    sidearms: sidearmStats,
    swords: swordStats,
    trauma: traumaStats
}

export default meleeWeaponStats