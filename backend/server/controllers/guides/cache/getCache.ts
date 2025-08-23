import { Books, ChapterContentsReturn } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces"
import { rulesChapters, playerChapters } from "@srd/common/utilities/chapters"
import createNavigationArray from "../utilities/createNavigationArray"
import parseChapterContents from "../utilities/parseChapterContents"
import { getChapterFromDB } from "../chapter/getChapter"
import chapterInfo from "../chapter/utilities/chapterInfo"

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
    const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters
    
    return async (_: string, index: number) => {
        const [{ chaptercontents }] = await getChapterFromDB(book, index + 1)

        chapterCache[book][index] = {
            book: book,
            chapterName: guideChapterNameArray[index],
            chapter: index + 1,
            info: chapterInfo[book][index],
            navigation: createNavigationArray(chaptercontents),
            chapterContents: parseChapterContents(chaptercontents)
        }
    }
}