import { MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const swordStats: MeleeWeaponStatObject[] = [
    {
        name: 'Arming Sword',
        size: 'M',
        damage: '2d3!+1d4!',
        recovery: 11,
        damageType: 'S',
        parry: 4,
        measure: 2.5,
        bonus: true
    },
    {
        name: 'Court Sword',
        size: 'S',
        damage: '2d6!',
        recovery: 7,
        damageType: 'P',
        parry: 4,
        measure: 3.25,
    },
    {
        name: 'Estoc',
        size: 'M',
        damage: '2d6!',
        recovery: 10,
        damageType: 'P',
        parry: 2,
        measure: 3.5,
        bonus: true
    },
    {
        name: "Executioner's Sword",
        size: 'H',
        damage: '8d4!',
        recovery: 26,
        damageType: 'S',
        parry: 2,
        measure: 10,
    },
    {
        name: 'Falchion',
        size: 'M',
        damage: '2d3!+2d4!',
        recovery: 14,
        damageType: 'S',
        parry: 2,
        measure: 3,
        bonus: true
    },
    {
        name: 'Koncerz',
        size: 'M',
        damage: '2d6!',
        recovery: 7,
        damageType: 'P',
        parry: 4,
        measure: 5.25,
        bonus: true
    },
    {
        name: 'Longsword',
        size: 'M',
        damage: '3d3!+d4!',
        recovery: 14,
        damageType: 'S',
        parry: 8,
        measure: 3.75,
    },
    {
        name: 'Messer',
        size: 'M',
        damage: '6d3!',
        recovery: 18,
        damageType: 'S',
        parry: 5,
        measure: 2.5,
    },
    {
        name: 'Rapier',
        size: 'M',
        damage: '2d6!',
        recovery: 7,
        damageType: 'P',
        parry: 6,
        measure: 4,
    },
    {
        name: 'Sabre',
        size: 'M',
        damage: '3d2!+2d3!',
        recovery: 12,
        damageType: 'S',
        parry: 4,
        measure: 3,
    },
    {
        name: 'Schiavona',
        size: 'S',
        damage: '2d4!+d3!',
        recovery: 8,
        damageType: 'S',
        parry: 4,
        measure: 2,
    },
    {
        name: 'Zweihander',
        size: 'L',
        damage: '7d3!',
        recovery: 20,
        damageType: 'S',
        parry: 2,
        measure: 7,
        bonus: true
    }
]


export const swordStatsFree: MeleeWeaponStatObject[] = [
    {
        name: 'Longsword',
        size: 'M',
        damage: '3d3!+d4!',
        recovery: 14,
        damageType: 'S',
        parry: 8,
        measure: 3.75,
    },
    {
        name: 'Zweihander',
        size: 'L',
        damage: '7d3!',
        recovery: 20,
        damageType: 'S',
        parry: 2,
        measure: 7,
        bonus: true
    }
]