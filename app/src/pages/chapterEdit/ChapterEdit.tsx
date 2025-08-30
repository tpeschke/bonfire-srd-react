import '../chapterDisplay/ChapterDisplay.css'
import '../chapterDisplay/contentDisplay/ContentDisplay.css'
import { SetLoadingFunction } from "../../components/loading/Loading";
import { useEffect, useState } from 'react';
import ChapterHook from '../../hooks/ChapterHooks';
import { Books } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces';
import axios from 'axios';
import { chapterURL, editChapterURL } from '../../frontend-config';
import { useNavigate } from 'react-router-dom';

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string,
}

interface ChapterContentsEdit {
    book: Books,
    chapter: number,
    chapterName: string,
    chapterContents: string
}

export default function ChapterEdit({ setLoading, pathname }: Props) {
    const { saveChapterToCache } = ChapterHook(pathname)

    const [chapter, setChapter] = useState<ChapterContentsEdit | null>(null)
    const [chapterContents, setChapterContents] = useState<string>('')

    const navigate = useNavigate()

    useEffect(() => {
        const [_, book, chapterNumber] = pathname.split('/')

        axios.get(chapterURL + 'edit/' + `${book}.${chapterNumber}`).then(({data}) => {
            setChapter(data)
        })
    }, [pathname])

    useEffect(() => {
        if (setLoading) {
            setLoading(!!chapter)
        }
        if (!!chapter) {
            setChapterContents(chapter.chapterContents)
            window.scrollTo(0, 0)
        }
    }, [chapter])

    function captureText(event: any) {
        const { value } = event.target
        setChapterContents(value)
    }

    async function saveChapter() {
        const { data } = await axios.patch(editChapterURL + `${chapter?.book}.${chapter?.chapter}`, { chapterContents })
        saveChapterToCache(data)

        navigate(`/${chapter?.book}/${chapter?.chapter}`)
    }

    const componentReminder = "<<componentName<<"

    const commentReminder = "[//]: <> (This is a comment.)"

    const deluxeReminder = "<<deluxe<<"

    const freeReminder = "<<free<<"

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            {chapter &&
                <textarea className="content-display-shell" value={chapterContents} onChange={captureText} />
            }
            <div className='inner-nav-shell'>
                <h2 onClick={saveChapter}>
                    <i className="fa-solid fa-floppy-disk"></i>
                </h2>

                <p>{componentReminder}</p>
                <p>{commentReminder}</p>
                <p>{deluxeReminder}</p>
                <p>{freeReminder}</p>
            </div>
        </div>
    )
}