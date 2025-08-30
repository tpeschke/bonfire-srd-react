import { RangedWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

export const mechanicalStats: RangedWeaponStatObject[] = [
    {
        name: 'Bellybow',
        size: 'L',
        ri: 100,
        damage: '2d20!+1d10!',
        recovery: 36,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Composite Bow',
        size: 'M',
        ri: 50,
        damage: '3d6!',
        recovery: 14,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Crossbow',
        size: 'L',
        ri: 80,
        damage: '1d20!+1d10!',
        recovery: 26,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Latchet Crossbow',
        size: 'M',
        ri: 35,
        damage: '1d8!+1d6!',
        recovery: 13,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Longbow',
        size: 'L',
        ri: 200,
        damage: 'd20!',
        recovery: 22,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Sling',
        size: 'S',
        ri: 30,
        damage: '1d10!',
        recovery: 11,
        damageType: 'C',
        minRecovery: 3,
    },
    {
        name: 'Warbow',
        size: 'H',
        ri: 60,
        damage: '3d10!',
        recovery: 16,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    }
]

export const mechanicalStatsFree: RangedWeaponStatObject[] = [
    {
        name: 'Composite Bow',
        size: 'M',
        ri: 50,
        damage: '3d6!',
        recovery: 14,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Crossbow',
        size: 'L',
        ri: 80,
        damage: '1d20!+1d10!',
        recovery: 26,
        damageType: 'P',
        minRecovery: 5,
        bonus: true
    },
    {
        name: 'Sling',
        size: 'S',
        ri: 30,
        damage: '1d10!',
        recovery: 11,
        damageType: 'C',
        minRecovery: 3,
    }
]
