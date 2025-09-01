import { MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const axeStats: MeleeWeaponStatObject[] = [
    {
        name: 'Bardiche',
        size: 'L',
        damage: '6d4!',
        recovery: 20,
        damageType: 'S',
        parry: 0,
        measure: 4,
    },
    {
        name: 'Battle Axe',
        size: 'M',
        damage: '4d6!',
        recovery: 16,
        damageType: 'S',
        parry: 0,
        measure: 2.5,
    },
    {
        name: 'Dane Axe',
        size: 'H',
        damage: '6d6!',
        recovery: 26,
        damageType: 'S',
        parry: 0,
        measure: 6.5,
    },
    {
        name: 'Handaxe',
        size: 'S',
        damage: '3d4!',
        recovery: 14,
        damageType: 'S',
        parry: 0,
        measure: 1,
        bonus: true
    },
    {
        name: 'Horsemans Pick',
        size: 'M',
        damage: 'd12!+d6!',
        recovery: 11,
        damageType: 'P',
        parry: 0,
        measure: 2,
        bonus: true
    },
    {
        name: 'Lochaber Axe',
        size: 'L',
        damage: '5d6!',
        recovery: 22,
        damageType: 'S',
        parry: 0,
        measure: 6,
    }
]

export const axeStatsFree: MeleeWeaponStatObject[] = [
    {
        name: 'Bardiche',
        size: 'L',
        damage: '6d4!',
        recovery: 20,
        damageType: 'S',
        parry: 0,
        measure: 4,
    },
    {
        name: 'Battle Axe',
        size: 'M',
        damage: '4d6!',
        recovery: 16,
        damageType: 'S',
        parry: 0,
        measure: 2.5,
    }
]