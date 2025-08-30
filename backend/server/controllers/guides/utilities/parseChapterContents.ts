import { Books, ChapterContents, ChapterContentsCache, ComponentContent, LockedChapterContents, MarkdownContent, ValidComponents } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import chapterInfo from "../chapter/utilities/chapterInfo";
import createNavigationArray from "./createNavigationArray";
import { rulesChapters, playerChapters } from "@srd/common/utilities/chapters";

const validComponentArray: ValidComponents[] = [
    'characteristicGenerator', 'kits', 'originsShapesTraditions', 'rudimentsByTradition', 'burdensNInjuries',
    'dwarfImage', 'elfImage', 'humanImage', 'orcImage', 'pechImage', 'ratfolkImage', 'gauntImage', 'starCursedImage',
    'expertImage', 'fighterImage', 'servantImage', 'socialiteImage', 'weirdAdeptImage',
    'priceByDistance', 'animalLivestock', 'animalMounts', 'animalBarding', 'animalFeed', 'armorPrices', 'armorStats', 'beverages', 'clothing', 'clothingAccessories', 'containersHeavy',
    'containersPersonal', 'musicalInstruments', 'poisonsNToxins', 'rope', 'shields', 'shieldStats', 'toolsAdventuring', 'toolsGeneral', 'toolsTrade', 'weaponsAxes', 'weaponsPolearms',
    'weaponsSidearms', 'weaponsSwords', 'weaponsTrauma', 'weaponsRanged', 'ammunition', 'meleeWeaponStats', 'rangedWeaponStats'
]

export default function populateChapterContents(book: Books, chapterNumber: number, rawChapterContents: string): ChapterContentsCache {
    const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

    const chapterContents = parseChapterContents(rawChapterContents)

    return {
        book, chapterContents,
        chapterName: guideChapterNameArray[chapterNumber - 1],
        info: chapterInfo[book][chapterNumber - 1],
        chapter: chapterNumber,
        navigation: createNavigationArray(chapterContents),
    }
}

function parseChapterContents(rawChapterContents: string): ChapterContents | LockedChapterContents {
    let free: ChapterContents = []
    let deluxe: ChapterContents = []

    let onlyAddToFree: boolean = false
    let onlyAddToDeluxe: boolean = false

    let isASplitChapter: boolean = false

    let alreadySeenFirstCaret: boolean = false
    let trackingComponent: boolean = false

    let trackedString: string = ''

    function populateArray() {
        if (trackedString === 'free') {
            isASplitChapter = true
            onlyAddToFree = !onlyAddToFree
        } else if (trackedString === 'deluxe') {
            isASplitChapter = true
            onlyAddToDeluxe = !onlyAddToDeluxe
        } else {
            const componentType = returnProperComponentType(trackedString)

            if (onlyAddToFree) {
                free.push(componentType)
            } else if (onlyAddToDeluxe) {
                deluxe.push(componentType)
            } else {
                free.push(componentType)
                deluxe.push(componentType)
            }
        }

        trackedString = ''
    }

    rawChapterContents.split('').forEach((letter: string) => {
        const letterIsCaret = letter === '<'

        if (letterIsCaret && !alreadySeenFirstCaret) {
            alreadySeenFirstCaret = true
        } else if (letterIsCaret && alreadySeenFirstCaret && !trackingComponent) {
            alreadySeenFirstCaret = false
            trackingComponent = true

            populateArray()
        } else if (letterIsCaret && alreadySeenFirstCaret && trackingComponent) {
            alreadySeenFirstCaret = false
            trackingComponent = false

            populateArray()
        } else if (alreadySeenFirstCaret) {
            alreadySeenFirstCaret = false
            trackedString += '<'
            trackedString += letter
        } else {
            trackedString += letter
        }
    })

    if (trackedString !== '') {
        populateArray()
    }

    if (isASplitChapter) {
        return {
            free,
            deluxe
        }
    } else {
        return free
    }
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