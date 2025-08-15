import { Books, ChapterContentsReturn } from "@srd/common/interfaces/ChapterInterfaces"
import { rulesChapters, playerChapters } from "@srd/common/utilities/chapters"
import createNavigationArray from "../utilities/createNavigationArray"
import parseChapterContents from "../utilities/parseChapterContents"
import { getChapterFromDB } from "../chapter/getChapter"

interface ChapterCache {
    rules: ChapterContentsReturn[],
    players: ChapterContentsReturn[]
}

export let chapterCache: ChapterCache = {
    rules: [],
    players: []
}

export function populateChapterCacheWorkhorse() {
    rulesChapters.forEach(getChapterForCache('rules'))
    console.log("Rules Guide Collected")

    playerChapters.forEach(getChapterForCache('players'))
    console.log("Players Guide Collected")
}

function getChapterForCache(book: Books) {
    return async (_: string, index: number) => {
        const [{ chaptercontents }] = await getChapterFromDB(book, index + 1)
        chapterCache[book][index] = {
            book: book,
            chapter: index + 1,
            navigation: createNavigationArray(chaptercontents),
            chapterContents: parseChapterContents(chaptercontents)
        }
    }
}