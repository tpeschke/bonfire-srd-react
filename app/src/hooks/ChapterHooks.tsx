import { ChapterContentsReturn } from "@srd/common/interfaces/ChapterInterfaces"
import axios from "axios"
import { useState, useEffect } from "react"
import { chapterURL } from '../frontend-config.ts'
import { useDispatch, useSelector } from "react-redux"
import { saveChapter } from "../redux/slices/chapterSlice.tsx"

interface ChapterHookReturn {
    chapter: ChapterContentsReturn | null
}

export default function ChapterHook(pathname: string): ChapterHookReturn {
    const [chapter, setChapter] = useState<ChapterContentsReturn | null>(null)
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)

    const dispatch = useDispatch()

    const cachedRulesChapters = useSelector((state: any) => state.chapter.rulesGuideChapters)
    const cachedPlayerChapters = useSelector((state: any) => state.chapter.playersGuideChapters)

    function getChapterFromCache(book: string, chapterNumber: string): ChapterContentsReturn | undefined {
        if (book === 'rules') {
            return cachedRulesChapters[chapterNumber]
        } else if (book === 'player') {
            return cachedPlayerChapters[chapterNumber]
        }
    }

    function getChapterFromServer(book: string, chapterNumber: string): void {
        axios.get(chapterURL + `${book}.${chapterNumber}`).then(({ data }) => setInfo(data))
    }

    function setInfo(chapterInfo: ChapterContentsReturn) {
        setCurrentRoute(pathname)
        dispatch(saveChapter(chapterInfo))
        setChapter(chapterInfo)
    }

    useEffect(() => {
        if (pathname !== currentRoute) {
            const [_, book, chapterNumber] = pathname.split('/')

            let chapterInfo: ChapterContentsReturn | undefined = getChapterFromCache(book, chapterNumber)

            if (chapterInfo) {
                setInfo(chapterInfo)
            } else {
                getChapterFromServer(book, chapterNumber)
            }
        }
    }, [pathname])

    return {
        chapter
    }
}