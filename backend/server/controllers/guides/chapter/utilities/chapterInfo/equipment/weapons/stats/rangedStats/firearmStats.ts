import { RangedWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const firearmStats: RangedWeaponStatObject[] = [
    {
        name: 'Fire Lance',
        size: 'L',
        ri: 10,
        damage: '2d8!',
        recovery: 15,
        damageType: 'C',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Hakenbuchse',
        size: 'L',
        ri: 50,
        damage: '1d8!+1d6!',
        recovery: 31,
        damageType: 'C',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Handgonne',
        size: 'L',
        ri: 30,
        damage: '1d8!+1d3!',
        recovery: 19,
        damageType: 'C',
        minRecovery: 4,
        bonus: true
    },
    {
        name: 'Molotov Cocktail',
        size: 'S',
        ri: 5,
        damage: '1d4!',
        recovery: 13,
        damageType: 'C',
        minRecovery: 4,
        bonus: true
    }
]

export const firearmStatsFree: RangedWeaponStatObject[] = []