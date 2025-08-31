import { ArmorStatObject, MeleeWeaponObject, RangedWeaponObject, ShieldStatObject } from '@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces'
import { Request, Response } from '../../interfaces/apiInterfaces'
import { secretString } from '../../server-config'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import chapterInfo from '../guides/chapter/utilities/chapterInfo'

interface BestiaryRequest extends Request {
    query: {
        key: string
    }
}

export function getWeapons(request: BestiaryRequest, response: Response) {
    const equipmentTables = getEquipmentTables(request, response)

    if (equipmentTables) {
        const { meleeWeaponStats, rangedWeaponStats } = equipmentTables
        checkForContentTypeBeforeSending(response, {
            melee: meleeWeaponStats,
            ranged: rangedWeaponStats
        })
    }
}

export function getArmor(request: BestiaryRequest, response: Response) {
    const equipmentTables = getEquipmentTables(request, response)

    if (equipmentTables) {
        const { armorStats } = equipmentTables
        checkForContentTypeBeforeSending(response, {
            armor: armorStats,
        })
    }
}

export function getShields(request: BestiaryRequest, response: Response) {
    const equipmentTables = getEquipmentTables(request, response)

    if (equipmentTables) {
        const { shieldStats } = equipmentTables
        checkForContentTypeBeforeSending(response, {
            shields: shieldStats,
        })
    }
}

interface EquipmentTablesReturn {
    armorStats: ArmorStatObject[],
    shieldStats: ShieldStatObject[],
    meleeWeaponStats: MeleeWeaponObject,
    rangedWeaponStats: RangedWeaponObject
}

function getEquipmentTables(request: BestiaryRequest, response: Response): EquipmentTablesReturn | null | void {
    if (request.query.key !== secretString) {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have the Permissions" })
    } else {
        const equipmentFunction = chapterInfo.players[7]

        if (typeof equipmentFunction === 'function') {
            const { armorStats, shieldStats, meleeWeaponStats, rangedWeaponStats } = equipmentFunction({ id: 0, patreon: 1 }).info[0]

            return { armorStats, shieldStats, meleeWeaponStats, rangedWeaponStats }
        }
    }
}