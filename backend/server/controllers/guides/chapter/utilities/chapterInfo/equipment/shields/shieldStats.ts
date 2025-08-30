import { ShieldStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces";

export const shieldStats: ShieldStatObject[] = [
    {
        name: 'Buckler',
        dr: '5/d +4',
        def: -1,
        parry: 5,
        cover: '+1 (+2)',
        flanks: 2,
        fatigue: 4,
        bonus: true
    },
    {
        name: 'Clothe',
        dr: '6',
        def: 0,
        parry: 5,
        cover: '+0 (+1)',
        flanks: 2,
        fatigue: 0
    },
    {
        name: 'Figure Eight',
        dr: '2/d +2',
        def: -6,
        parry: 10,
        cover: '+9 (+12)',
        flanks: 3,
        fatigue: 3,
        bonus: true
    },
    {
        name: 'Heater',
        dr: '3/d +2',
        def: -7,
        parry: 15,
        cover: '+12 (+15)',
        flanks: 4,
        fatigue: 1
    },
    {
        name: 'Hoplon',
        dr: '2/d +2',
        def: -5,
        parry: 9,
        cover: '+10 (+15)',
        flanks: 3,
        fatigue: 1
    },
    {
        name: 'Kite',
        dr: '2/d +2',
        def: -8,
        parry: 14,
        cover: '+18 (+23)',
        flanks: 4,
        fatigue: 2
    },
    {
        name: 'Pavise',
        dr: '3/d +2',
        def: -8,
        parry: 0,
        cover: '+18 (*)',
        flanks: 1,
        fatigue: 5,
        bonus: true
    },
    {
        name: 'Round',
        dr: '2/d +2',
        def: -7,
        parry: 11,
        cover: '+12 (+15)',
        flanks: 3,
        fatigue: 3,
        bonus: true
    },
    {
        name: 'Tower',
        dr: '1/d +1',
        def: -10,
        parry: 18,
        cover: '+25 (*)',
        flanks: 3,
        fatigue: 2
    }
]

export const shieldStatsFree: ShieldStatObject[] = [
    {
        name: 'Buckler',
        dr: '5/d +4',
        def: -1,
        parry: 5,
        cover: '+1 (+2)',
        flanks: 2,
        fatigue: 4,
        bonus: true
    },
    {
        name: 'Heater',
        dr: '3/d +2',
        def: -7,
        parry: 15,
        cover: '+12 (+15)',
        flanks: 4,
        fatigue: 1
    },
    {
        name: 'Hoplon',
        dr: '2/d +2',
        def: -5,
        parry: 9,
        cover: '+10 (+15)',
        flanks: 3,
        fatigue: 1
    },
    {
        name: 'Tower',
        dr: '1/d +1',
        def: -10,
        parry: 18,
        cover: '+25 (*)',
        flanks: 3,
        fatigue: 2
    }
]