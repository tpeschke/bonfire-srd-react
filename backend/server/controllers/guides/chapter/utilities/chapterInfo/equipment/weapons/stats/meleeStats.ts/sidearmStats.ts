import { MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const sidearmStats: MeleeWeaponStatObject[] = [
    {
        name: 'Bludgeon',
        size: 'S',
        damage: '1d8!',
        recovery: 11,
        damageType: 'C',
        parry: 0,
        measure: 2.25,
        bonus: true
    },
    {
        name: 'Cinquedea',
        size: 'S',
        damage: '4d3!',
        recovery: 14,
        damageType: 'S',
        parry: 0,
        measure: 1.5,
    },
    {
        name: 'Dagger',
        size: 'S',
        damage: '2d4!',
        recovery: 8,
        damageType: 'P',
        parry: 2,
        measure: 1,
        bonus: true
    },
    {
        name: 'Dagger',
        size: 'S',
        damage: '3d3!',
        recovery: 10,
        damageType: 'S',
        parry: 2,
        measure: 1,
        bonus: true
    },
    {
        name: 'Dusack',
        size: 'S',
        damage: '3d3!',
        recovery: 9,
        damageType: 'S',
        parry: 2,
        measure: 2.5,
        bonus: true
    },
    {
        name: 'Katzbalger',
        size: 'S',
        damage: '1d3!+2d4!',
        recovery: 11,
        damageType: 'S',
        parry: 0,
        measure: 0.25,
    },
    {
        name: 'Knife',
        size: 'S',
        damage: '3d3!',
        recovery: 10,
        damageType: 'S',
        parry: 0,
        measure: 0.75,
        bonus: true
    },
    {
        name: 'Scourge',
        size: 'M',
        damage: '2d3!+d4!',
        recovery: 12,
        damageType: 'S',
        parry: 0,
        measure: 2,
        bonus: true
    },
    {
        name: 'Stiletto',
        size: 'S',
        damage: 'd6!+d4!',
        recovery: 6,
        damageType: 'P',
        parry: 4,
        measure: 1.5,
    }
]

export const sidearmStatsFree: MeleeWeaponStatObject[] = [
    {
        name: 'Stiletto',
        size: 'S',
        damage: 'd6!+d4!',
        recovery: 6,
        damageType: 'P',
        parry: 4,
        measure: 1.5,
    }
]