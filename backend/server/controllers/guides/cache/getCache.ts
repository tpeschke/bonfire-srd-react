import { Books, ChapterContentsCache } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces"
import { rulesChapters, playerChapters } from "@srd/common/utilities/chapters"
import { getChapterFromDB } from "../chapter/getChapter"
import populateChapterContents from "../utilities/parseChapterContents"

interface ChapterCache {
    rules: ChapterContentsCache[],
    players: ChapterContentsCache[]
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

        chapterCache[book][index] = populateChapterContents(book, index + 1, chaptercontents)
    }
}