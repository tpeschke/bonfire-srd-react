import { ChapterContentsReturn } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import { chapterCache } from "./getCache";

export default function updateCache(newChapter: ChapterContentsReturn) {
    const { book, chapter } = newChapter
    chapterCache[book][chapter - 1] = newChapter
}