import { RangedWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const thrownStats: RangedWeaponStatObject[] = [
    {
        name: 'Javelin',
        size: 'M',
        ri: 25,
        damage: '2d6!',
        recovery: 14,
        damageType: 'P',
        minRecovery: 4,
        bonus: true
    },
    {
        name: 'Throwing Axe',
        size: 'S',
        ri: 15,
        damage: '2d3!',
        recovery: 12,
        damageType: 'S',
        minRecovery: 3,
        bonus: true
    },
    {
        name: 'Throwing Knife',
        size: 'S',
        ri: 15,
        damage: '2d4!',
        recovery: 11,
        damageType: 'P',
        minRecovery: 3,
        bonus: true
    }
]

export const thrownStatsFree: RangedWeaponStatObject[] = [
    {
        name: 'Javelin',
        size: 'M',
        ri: 25,
        damage: '2d6!',
        recovery: 14,
        damageType: 'P',
        minRecovery: 4,
        bonus: true
    }
]