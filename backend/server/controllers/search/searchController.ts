import query from '../../db/database'
import { Response, Request, User } from '../../interfaces/apiInterfaces'
import searchSQL from '../../db/queries/search'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import { ChapterContents, ChapterContentsCache } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'

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
        const stringifiedContents = stringifyContents(chapterContents)
        await query(searchSQL.updateFree, [stringifiedContents, book, chapter])
        await query(searchSQL.updateDeluxe, [stringifiedContents, book, chapter])
    } else {
        await query(searchSQL.updateFree, [stringifyContents(chapterContents.free), book, chapter])
        await query(searchSQL.updateDeluxe, [stringifyContents(chapterContents.deluxe), book, chapter])
    }
}

function stringifyContents(contents: ChapterContents): string {
    return contents.reduce((currentString, component) => {
        if (component.type === 'markdown') {
            currentString += component.body
        }

        return currentString
    }, '')
}