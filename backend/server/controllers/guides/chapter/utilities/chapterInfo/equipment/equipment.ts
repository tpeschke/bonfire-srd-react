import { EquipmentInfo } from '@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces'
import priceByDistance from './priceByDistance'
import animalLivestock from './animals/animalLivestock'
import animalMounts from './animals/animalMounts'
import animalBarding from './animals/animalBarding'
import animalFeed from './animals/animalFeed'
import { armorPrices, armorPricesFree } from './armor/armorPrices'
import { armorStats, armorStatsFree } from './armor/armorStats'
import beverages from './beverages'
import clothing from './clothing/clothing'
import clothingAccessories from './clothing/clothingAccessories'
import containersHeavy from './containers/containersHeavy'
import containersPersonal from './containers/containersPersonal'
import musicalInstruments from './musicalInstruments'
import poisonsNToxins from './poisonsNToxins'
import rope from './rope'
import { shields, shieldsFree } from './shields/shields'
import { shieldStats, shieldStatsFree } from './shields/shieldStats'
import toolsAdventuring from './tools/toolsAdventuring'
import toolsGeneral from './tools/toolsGeneral'
import toolsTrade from './tools/toolsTrade'
import { weaponsAxes, weaponsAxesFree } from './weapons/weaponsAxes'
import { weaponsPolearms, weaponsPolearmsFree } from './weapons/weaponsPolearms'
import { weaponsSidearms, weaponsSidearmsFree } from './weapons/weaponsSidearms'
import { weaponsSwords, weaponsSwordsFree } from './weapons/weaponsSwords'
import { weaponsTrauma, weaponsTraumaFree } from './weapons/weaponsTrauma'
import { weaponsRanged, weaponsRangedFree } from './weapons/weaponsRanged'
import { ammunition, ammunitionFree } from './weapons/ammunition'
import { meleeWeaponStats, meleeWeaponStatsFree } from './weapons/stats/meleeStat'
import { rangedWeaponStats, rangedWeaponStatsFree } from './weapons/stats/rangedStat'
import { User } from '../../../../../../interfaces/apiInterfaces'

const deluxeEquipment = {
    priceByDistance,
    animalLivestock,
    animalMounts,
    animalBarding,
    animalFeed,
    armorPrices,
    armorStats,
    beverages,
    clothing,
    clothingAccessories,
    containersHeavy,
    containersPersonal,
    musicalInstruments,
    poisonsNToxins,
    rope,
    shields,
    shieldStats,
    toolsAdventuring,
    toolsGeneral,
    toolsTrade,
    weaponsAxes,
    weaponsPolearms,
    weaponsSidearms,
    weaponsSwords,
    weaponsTrauma,
    weaponsRanged,
    ammunition,
    meleeWeaponStats,
    rangedWeaponStats
}

const freeEquipment = {
    weaponsAxes: weaponsAxesFree,
    weaponsPolearms: weaponsPolearmsFree,
    weaponsRanged: weaponsRangedFree,
    weaponsSidearms: weaponsSidearmsFree,
    weaponsSwords: weaponsSwordsFree,
    weaponsTrauma: weaponsTraumaFree,
    ammunition: ammunitionFree,
    meleeWeaponStats: meleeWeaponStatsFree,
    rangedWeaponStats: rangedWeaponStatsFree,
    armorPrices: armorPricesFree,
    armorStats: armorStatsFree,
    shields: shieldsFree,
    shieldStats: shieldStatsFree
}

export default function equipmentInfo(user: User | null | undefined): EquipmentInfo {
    if (user?.patreon && user?.patreon > 0) {
        return {
            type: 'equipment',
            info: [deluxeEquipment]
        }
    }

    return {
        type: 'equipment',
        info: [
            {
                ...deluxeEquipment,
                ...freeEquipment
            }
        ]
    }
}