import query from '../../db/database'
import { Response, Request, User } from '../../interfaces/apiInterfaces'
import searchSQL from '../../db/queries/search'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import { ChapterContents, ChapterContentsCache, EquipmentTables } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import chapterInfo from '../guides/chapter/utilities/chapterInfo'

interface SearchRequest extends Request {
    params: {
        searchTerm: string
    }
}

export async function searchByTerm(request: SearchRequest, response: Response) {
    const { searchTerm } = request.params
    const { user } = request

    const searchResults = await search(user, searchTerm)

    checkForContentTypeBeforeSending(response, searchResults)
}

async function search(user: User | null | undefined, searchTerm: string) {
    if (user?.patreon && user?.patreon > 0) {
        return await query(searchSQL.deluxe, searchTerm)
    } else {
        return await query(searchSQL.free, searchTerm)
    }
}

export async function updateSearch(chapterInfo: ChapterContentsCache) {
    const { chapterContents, book, chapter } = chapterInfo

    if (Array.isArray(chapterContents)) {
        const stringifiedContents = stringifyContents(chapterContents, chapter, true)
        await query(searchSQL.updateFree, [stringifiedContents, book, chapter])
        await query(searchSQL.updateDeluxe, [stringifiedContents, book, chapter])
    } else {
        await query(searchSQL.updateFree, [stringifyContents(chapterContents.free, chapter, true), book, chapter])
        await query(searchSQL.updateDeluxe, [stringifyContents(chapterContents.deluxe, chapter, false), book, chapter])
    }
}

function stringifyContents(contents: ChapterContents, chapter: number, isFree: boolean): string {
    return contents.reduce((currentString, component) => {
        if (component.type === 'markdown') {
            currentString += component.body
        } else if (chapter === 8 && component.type === 'component') {
            currentString += stringifyIfEquipment(component.component, isFree)
        }

        return currentString
    }, '')
}

function stringifyIfEquipment(component: string, isFree: boolean): string {
    const equipmentComponents: string[] = ['animalLivestock', 'animalMounts', 'animalBarding', 'animalFeed', 'armorPrices', 'armorStats', 'beverages',
        'clothing', 'clothingAccessories', 'containersHeavy', 'containersPersonal', 'musicalInstruments', 'poisonsNToxins', 'rope', 'shields', 'shieldStats', 'toolsAdventuring',
        'toolsGeneral', 'toolsTrade', 'weaponsAxes', 'weaponsPolearms', 'weaponsSidearms', 'weaponsSwords', 'weaponsTrauma', 'weaponsRanged', 'ammunition', 'meleeWeaponStats',
        'rangedWeaponStats']

    const equipmentInfoFunction = chapterInfo.players[7]

    if (equipmentComponents.includes(component) && typeof equipmentInfoFunction === 'function') {
        const table = equipmentInfoFunction({ id: 0, patreon: isFree ? 0 : 1 }).info[0][component as EquipmentTables]

        if (Array.isArray(table)) {
            return table.reduce((currentString: string, row: any) => {
                Object.keys(row).forEach(cellKey => {
                    currentString += `${cellKey}: ${row[cellKey]}\n\n`
                })

                return currentString
            }, '')
        } else {
            return Object.keys(table).reduce((currentString: string, tableKey: any) => {
                // TODO
                // @ts-ignore
                table[tableKey].forEach((subTable) => {
                    Object.keys(subTable).forEach(rowKey => {
                        currentString += `${rowKey}: ${subTable[rowKey]}\n\n`
                    })
                })

                return currentString
            }, '')
        }
    }

    return ''
}