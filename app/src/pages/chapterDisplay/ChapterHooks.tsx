import { ChapterContentsReturn } from "@srd/common/interfaces/ChapterInterfaces"
import axios from "axios"
import { useState, useEffect } from "react"
import { chapterURL } from '../../frontend-config.ts'
import { useParams, useLocation } from "react-router-dom"

interface ChapterHookReturn {
    chapter: ChapterContentsReturn | null
}

export default function ChapterHook(): ChapterHookReturn { 
    const [chapter, setChapter] = useState<ChapterContentsReturn | null>(null)
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)

    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== currentRoute) {
            const [_, book, chapterNumber] = location.pathname.split('/')
            axios.get(chapterURL + `${book}.${chapterNumber}`).then(({data}) => {
                setCurrentRoute(location.pathname)
                setChapter(data)
            })
        }
    }, [location])

    return {
        chapter
    }
}