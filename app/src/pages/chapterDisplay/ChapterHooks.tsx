import { ChapterContentsReturn } from "@srd/common/interfaces/ChapterInterfaces"
import axios from "axios"
import { useState, useEffect } from "react"
import { chapterURL } from '../../frontend-config.ts'
import { useParams } from "react-router-dom"

interface ChapterHookReturn {
    chapter: ChapterContentsReturn | null
}

export default function ChapterHook(): ChapterHookReturn { 
    const [chapter, setChapter] = useState<ChapterContentsReturn | null>(null)

    const { chapterNumber } = useParams()

    useEffect(() => {
        if (chapter?.chapter !== chapterNumber) {
            axios.get(chapterURL + chapterNumber).then(({data}) => {
                setChapter(data)
            })
        }
    }, [chapterNumber])

    return {
        chapter
    }
}