import { ChapterContents, ComponentContent, LockedChapterContents, MarkdownContent, ValidComponents } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";

const validComponentArray: ValidComponents[] = [
    'characteristicGenerator', 'kits', 'originsShapesTraditions', 'rudimentsByTradition', 'burdensNInjuries',
    'dwarfImage', 'elfImage', 'humanImage', 'orcImage', 'pechImage', 'ratfolkImage', 'gauntImage', 'starCursedImage',
    'expertImage', 'fighterImage', 'servantImage', 'socialiteImage', 'weirdAdeptImage',
    'priceByDistance', 'animalLivestock', 'animalMounts', 'animalBarding', 'animalFeed', 'armorPrices', 'armorStats', 'beverages', 'clothing', 'clothingAccessories', 'containersHeavy',
    'containersPersonal', 'musicalInstruments', 'poisonsNToxins', 'rope', 'shields', 'shieldStats', 'toolsAdventuring', 'toolsGeneral', 'toolsTrade', 'weaponsAxes', 'weaponsPolearms',
    'weaponsSidearms', 'weaponsSwords', 'weaponsTrauma', 'weaponsRanged', 'ammunition', 'meleeWeaponStats', 'rangedWeaponStats'
]

export default function parseChapterContents(rawChapterContents: string): ChapterContents | LockedChapterContents {
    let free: ChapterContents = []
    // let deluxe: ChapterContents = []

    let alreadySeenFirstCaret: boolean = false
    let trackingComponent: boolean = false

    let trackedString = ''

    rawChapterContents.split('').forEach((letter: string) => {
        const letterIsCaret = letter === '<'

        if (letterIsCaret && !alreadySeenFirstCaret) {
            alreadySeenFirstCaret = true
        } else if (letterIsCaret && alreadySeenFirstCaret && !trackingComponent) {
            alreadySeenFirstCaret = false
            trackingComponent = true

            free.push(returnProperComponentType(trackedString))
            trackedString = ''

        } else if (letterIsCaret && alreadySeenFirstCaret && trackingComponent) {
            alreadySeenFirstCaret = false
            trackingComponent = false

            free.push(returnProperComponentType(trackedString))
            trackedString = ''
        } else if (alreadySeenFirstCaret) {
            alreadySeenFirstCaret = false
            trackedString += '<' 
            trackedString += letter
        } else {
            trackedString += letter
        }
    })

    return free
}

function returnProperComponentType(trackedString: any): MarkdownContent | ComponentContent {
    if (validComponentArray.includes(trackedString)) {
        return {
            type: 'component',
            component: trackedString
        }
    }

    return {
        type: 'markdown',
        body: trackedString
    }
}