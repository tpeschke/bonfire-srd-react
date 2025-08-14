import '../chapterDisplay/ChapterDisplay.css'
import '../chapterDisplay/contentDisplay/ContentDisplay.css'
import { SetLoadingFunction } from "../../components/loading/Loading";
import { useEffect, useState } from 'react';
import ChapterHook from '../../hooks/ChapterHooks';
import { MarkdownContent, ComponentContent } from '@srd/common/interfaces/ChapterInterfaces';

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string,
}

export default function ChapterEdit({ setLoading, pathname }: Props) {
    const { chapter } = ChapterHook(pathname)
    const [chapterContents, setChapterContents] = useState<string>('')

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
                chapterContents += `\n\n<<${contentItem.component}\n\n`
            }
        })

        setChapterContents(chapterContents)
    }

    function captureText(event: any) {
        const { value } = event.target
        setChapterContents(value)
    }

    function saveChapter() {
        
    }

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            {chapter &&
                <textarea className="content-display-shell" value={chapterContents} onChange={captureText} />
            }
            <div className='inner-nav-shell'>
                <h2>
                    <i className="fa-solid fa-floppy-disk"></i>
                </h2>
            </div>
        </div>
    )
}