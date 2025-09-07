import { ChapterContentsReturn } from "@srd/common/interfaces/chapterInterfaces/chapterInterfaces"
import axios from "axios"
import { useState, useEffect } from "react"
import { chapterURL } from '../frontend-config.ts'
import { useDispatch, useSelector } from "react-redux"
import { saveChapter } from "../redux/slices/chapterSlice.tsx"
import { resolve } from "path"

interface ChapterHookReturn {
    chapter: ChapterContentsReturn | null,
    preloadChapter: (pathname: string) => void,
    saveChapterToCache: (chapterInfo: ChapterContentsReturn) => void,
    backgroundPreloadChapter: () => void
}

export default function ChapterHook(pathname?: string): ChapterHookReturn {
    const [chapter, setChapter] = useState<ChapterContentsReturn | null>(null)
    const [currentRoute, setCurrentRoute] = useState<string | null | undefined>(null)
    const [timeoutID, setTimeoutID] = useState<any | null>(null)

    const dispatch = useDispatch()

    const cachedRulesChapters = useSelector((state: any) => state.chapter.rulesGuideChapters)
    const cachedPlayerChapters = useSelector((state: any) => state.chapter.playersGuideChapters)

    useEffect(() => {
        if (pathname && pathname !== currentRoute) {
            const [_, book, chapterNumber] = pathname.split('/')

            let chapterInfo: ChapterContentsReturn | undefined = getChapterFromCache(book, chapterNumber)

            if (chapterInfo) {
                setInfo(chapterInfo)
            } else {
                getChapterFromServer(book, chapterNumber).then(({ data }) => setInfo(data))
            }
        }
    }, [pathname])

    function getChapterFromCache(book: string, chapterNumber: string): ChapterContentsReturn | undefined {
        if (book === 'rules') {
            return cachedRulesChapters[chapterNumber]
        } else if (book === 'players') {
            return cachedPlayerChapters[chapterNumber]
        }
    }

    async function getChapterFromServer(book: string, chapterNumber: string) {
        return axios.get(chapterURL + `${book}.${chapterNumber}`)
    }

    function setInfo(chapterInfo: ChapterContentsReturn) {
        setCurrentRoute(pathname)
        dispatch(saveChapter(chapterInfo))
        setChapter(chapterInfo)
    }

    async function preloadChapter(pathname: string) {
        if (timeoutID) { clearTimeout(timeoutID) }

        const newTimeoutID = setTimeout(async () => {
            const [_, book, chapterNumber] = pathname.split('/')

            const chapterInfo: ChapterContentsReturn | undefined = getChapterFromCache(book, chapterNumber)

            if (!chapterInfo) {
                const { data } = await getChapterFromServer(book, chapterNumber)
                dispatch(saveChapter(data))
            }
        }, 250)

        setTimeoutID(newTimeoutID)
    }

    async function backgroundPreloadChapter() {
        const preloadOrder = [
            'rules/6',
            'players/6',
            'rules/3',
            'players/4',
            'players/8',
            'players/10',
            'rules/2',
            'players/3',
            'players/5',
            'rules/5',
            'players/2',
            'rules/1',
            'rules/4',
            'players/7',
            'rules/7',
            'players/9',
            'players/1',
            'players/11',
        ]

        let index = 0

        while (index < preloadOrder.length) {
            await delay(500)

            const [book, chapterNumber] = preloadOrder[index].split('/')

            const chapterInfo: ChapterContentsReturn | undefined = getChapterFromCache(book, chapterNumber)

            if (!chapterInfo) {
                const { data } = await getChapterFromServer(book, chapterNumber)
                dispatch(saveChapter(data))
            }

            index++
        }

        console.log('all chapters preloaded')
    }

    function saveChapterToCache(chapterInfo: ChapterContentsReturn) {
        dispatch(saveChapter(chapterInfo))
    }

    return {
        chapter,
        preloadChapter,
        saveChapterToCache,
        backgroundPreloadChapter
    }
}

function delay(arg0: number) {
    throw new Error("Function not implemented.")
}
