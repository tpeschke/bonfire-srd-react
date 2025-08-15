import '../chapterDisplay/ChapterDisplay.css'
import '../chapterDisplay/contentDisplay/ContentDisplay.css'
import { SetLoadingFunction } from "../../components/loading/Loading";
import { useEffect, useState } from 'react';
import ChapterHook from '../../hooks/ChapterHooks';
import { MarkdownContent, ComponentContent } from '@srd/common/interfaces/ChapterInterfaces';
import axios from 'axios';
import { editChapterURL } from '../../frontend-config';
import { useNavigate } from 'react-router-dom';

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string,
}

export default function ChapterEdit({ setLoading, pathname }: Props) {
    const { chapter, saveChapterToCache } = ChapterHook(pathname)
    
    const [chapterContents, setChapterContents] = useState<string>('')

    const navigate = useNavigate()


    useEffect(() => {
        if (setLoading) {
            setLoading(!!chapter)
        }
        if (!!chapter) {
            formatMarkdownString(chapter.chapterContents)
            window.scrollTo(0, 0)
        }
    }, [chapter])

    function formatMarkdownString(chapterArray: (MarkdownContent | ComponentContent)[]) {
        let chapterContents = ''

        chapterArray.forEach(contentItem => {
            if (contentItem.type === 'markdown') {
                chapterContents += contentItem.body
            } else if (contentItem.type === 'component') {
                chapterContents += `<<${contentItem.component}<<`
            }
        })

        setChapterContents(chapterContents)
    }

    function captureText(event: any) {
        const { value } = event.target
        setChapterContents(value)
    }

    async function saveChapter() {
        const { data } = await axios.patch(editChapterURL + `${chapter?.book}.${chapter?.chapter}`, { chapterContents })
        saveChapterToCache(data)

        navigate(`/${chapter?.book}/${chapter?.chapter}`)
    }

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            {chapter &&
                <textarea className="content-display-shell" value={chapterContents} onChange={captureText} />
            }
            <div className='inner-nav-shell'>
                <h2 onClick={saveChapter}>
                    <i className="fa-solid fa-floppy-disk"></i>
                </h2>
            </div>
        </div>
    )
}