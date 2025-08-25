import { BurdensNInjuriesInfo, BurdenNInjuryTable } from '@srd/common/interfaces/chapterInterfaces/BurdensNInjuriesInterfaces'

const burdens: BurdenNInjuryTable[] = [
    {
        number: 6,
        burdenNInjury: 'Allergy, Food'
    },
    {
        number: 6,
        burdenNInjury: 'Allergy, Misc'
    },
    {
        number: 8,
        burdenNInjury: 'Bastard'
    },
    {
        number: 7,
        burdenNInjury: 'Debtor'
    },
    {
        number: 2,
        burdenNInjury: 'Deranged'
    },
    {
        number: 6,
        burdenNInjury: 'Excommunicated'
    },
    {
        number: 8,
        burdenNInjury: 'Fated'
    },
    {
        number: 3,
        burdenNInjury: 'Feral'
    },
    {
        number: 9,
        burdenNInjury: 'Half Life'
    },
    {
        number: 8,
        burdenNInjury: 'Haunted'
    },
    {
        number: 5,
        burdenNInjury: 'Idiot Savant'
    },
    {
        number: 7,
        burdenNInjury: 'Impulsive'
    },
    {
        number: 2,
        burdenNInjury: 'Inbred'
    },
    {
        number: 3,
        burdenNInjury: 'Orphan'
    },
    {
        number: 4,
        burdenNInjury: 'Poor'
    },
    {
        number: 2,
        burdenNInjury: 'Refugee'
    },
    {
        number: 4,
        burdenNInjury: 'Thrall'
    },
    {
        number: 4,
        burdenNInjury: 'Vow of Poverty'
    },
    {
        number: 3,
        burdenNInjury: 'Weird Resistant'
    },
    {
        number: 3,
        burdenNInjury: 'Weird Vulnerable'
    }
]

const injuries: BurdenNInjuryTable[] = [
    {
        number: 5,
        burdenNInjury: 'Ageusia'
    },
    {
        number: 5,
        burdenNInjury: 'Asthmatic'
    },
    {
        number: 3,
        burdenNInjury: 'Blind'
    },
    {
        number: 5,
        burdenNInjury: 'Burn Scars'
    },
    {
        number: 3,
        burdenNInjury: 'Deaf'
    },
    {
        number: 5,
        burdenNInjury: 'Epileptic'
    },
    {
        number: 4,
        burdenNInjury: 'Hemophilic'
    },
    {
        number: 3,
        burdenNInjury: 'Hyperopia'
    },
    {
        number: 6,
        burdenNInjury: 'Infirm'
    },
    {
        number: 4,
        burdenNInjury: 'Insomniac'
    },
    {
        number: 7,
        burdenNInjury: 'Labyrinthitis'
    },
    {
        number: 3,
        burdenNInjury: 'Limp'
    },
    {
        number: 2,
        burdenNInjury: 'Missing Arm'
    },
    {
        number: 4,
        burdenNInjury: 'Missing Digit'
    },
    {
        number: 3,
        burdenNInjury: 'Missing Ear'
    },
    {
        number: 2,
        burdenNInjury: 'Missing Eye'
    },
    {
        number: 2,
        burdenNInjury: 'Missing Hand'
    },
    {
        number: 2,
        burdenNInjury: 'Missing Leg'
    },
    {
        number: 5,
        burdenNInjury: 'Missing Teeth'
    },
    {
        number: 3,
        burdenNInjury: 'Mute'
    },
    {
        number: 4,
        burdenNInjury: 'Myopia'
    },
    {
        number: 4,
        burdenNInjury: 'No Depth Perception'
    },
    {
        number: 5,
        burdenNInjury: 'Shaky Hands'
    },
    {
        number: 2,
        burdenNInjury: 'Sterile'
    },
    {
        number: 3,
        burdenNInjury: 'Stutter'
    },
    {
        number: 4,
        burdenNInjury: 'Trick Knee'
    },
    {
        number: 2,
        burdenNInjury: 'Weak'
    }
]

const burdensNInjuriesInfo: BurdensNInjuriesInfo = {
    type: 'burdensNInjuries',
    info: [
        {
            burdens,
            injuries
        }
    ]
}

export default burdensNInjuriesInfo