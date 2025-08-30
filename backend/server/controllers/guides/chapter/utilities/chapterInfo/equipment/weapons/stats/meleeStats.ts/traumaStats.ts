import { MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const traumaStats: MeleeWeaponStatObject[] = [
    {
        name: 'Bec De Corbin',
        size: 'L',
        damage: '2d10!',
        recovery: 16,
        damageType: 'C',
        parry: 0,
        measure: 6,
    },
    {
        name: 'Brass Knuckles',
        size: 'S',
        damage: '1d8!',
        recovery: 10,
        damageType: 'C',
        parry: 2,
        measure: 0,
        bonus: true
    },
    {
        name: 'Club',
        size: 'M',
        damage: 'd10!',
        recovery: 10,
        damageType: 'C',
        parry: 0,
        measure: 1.5,
    },
    {
        name: 'Gauntlet',
        size: 'S',
        damage: '1d6!',
        recovery: 6,
        damageType: 'C',
        parry: 0,
        measure: 0,
    },
    {
        name: 'Goedendag',
        size: 'L',
        damage: '2d8!',
        recovery: 11,
        damageType: 'P',
        parry: 0,
        measure: 6,
    },
    {
        name: 'Great Hammer',
        size: 'H',
        damage: '2d12!+6',
        recovery: 22,
        damageType: 'C',
        parry: 0,
        measure: 6,
    },
    {
        name: 'Mace',
        size: 'M',
        damage: '1d12!',
        recovery: 10,
        damageType: 'C',
        parry: 0,
        measure: 2,
    },
    {
        name: 'Maul',
        size: 'L',
        damage: '2d12!',
        recovery: 17,
        damageType: 'C',
        parry: 0,
        measure: 4,
    },
    {
        name: "Peasant's Flail",
        size: 'L',
        damage: '1d20!',
        recovery: 15,
        damageType: 'C',
        parry: 0,
        measure: 4,
        bonus: true
    },
    {
        name: 'Quarterstaff',
        size: 'L',
        damage: '1d10!',
        recovery: 10,
        damageType: 'C',
        parry: 4,
        measure: 6,
    },
    {
        name: 'Unarmed',
        size: 'S',
        damage: '1d4!',
        recovery: 6,
        damageType: 'C',
        parry: 0,
        measure: 0,
        bonus: true
    },
    {
        name: 'War Flail',
        size: 'M',
        damage: '1d10!+1d4!',
        recovery: 13,
        damageType: 'C',
        parry: 0,
        measure: 4,
        bonus: true
    },
    {
        name: 'War Hammer',
        size: 'M',
        damage: 'd12!+d4!',
        recovery: 13,
        damageType: 'C',
        parry: 0,
        measure: 0.75,
    }
]


export const traumaStatsFree: MeleeWeaponStatObject[] = [
    {
        name: 'Mace',
        size: 'M',
        damage: '1d12!',
        recovery: 10,
        damageType: 'C',
        parry: 0,
        measure: 2,
    },
    {
        name: 'Maul',
        size: 'L',
        damage: '2d12!',
        recovery: 17,
        damageType: 'C',
        parry: 0,
        measure: 4,
    }
]