import { ChapterContentsReturn } from "@srd/common/interfaces/ChapterInterfaces";
import { chapterCache } from "./getCache";

export default function updateCache(newChapter: ChapterContentsReturn) {
    const { book, chapter } = newChapter
    chapterCache[book][chapter - 1] = newChapter
}