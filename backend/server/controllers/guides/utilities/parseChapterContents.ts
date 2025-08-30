import { MarkdownContent, ComponentContent, ValidComponents } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";

const validComponentArray: ValidComponents[] = [
    'characteristicGenerator', 'kits', 'originsShapesTraditions', 'rudimentsByTradition', 'burdensNInjuries',
    'dwarfImage', 'elfImage', 'humanImage', 'orcImage', 'pechImage', 'ratfolkImage', 'gauntImage', 'starCursedImage',
    'expertImage', 'fighterImage', 'servantImage', 'socialiteImage', 'weirdAdeptImage',
    'priceByDistance', 'animalLivestock', 'animalMounts', 'animalBarding', 'animalFeed', 'armorPrices', 'armorStats', 'beverages', 'clothing', 'clothingAccessories', 'containersHeavy', 
    'containersPersonal', 'musicalInstruments', 'poisonsNToxins', 'rope', 'shields', 'shieldStats', 'toolsAdventuring', 'toolsGeneral', 'toolsTrade', 'weaponsAxes', 'weaponsPolearms',
    'weaponsSidearms', 'weaponsSwords', 'weaponsTrauma', 'weaponsRanged', 'ammunition'
]

export default function parseChapterContents(rawChapterContents: string): (MarkdownContent | ComponentContent)[] {
    return rawChapterContents.split('<<').map((element: any) => {

        if (validComponentArray.includes(element)) {
            return {
                type: 'component',
                component: element
            }
        }
        return {
            type: 'markdown',
            body: element
        }
    })
}