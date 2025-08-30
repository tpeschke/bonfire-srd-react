import { use, useEffect, useState } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import './ChapterDisplay.css'
import ChapterHook from '../../hooks/ChapterHooks'
import ContentDisplay from './contentDisplay/ContentDisplay'
import ContentNavigation from './contentNavigation/ContentNavigation'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string,
    hash: string
}

export default function ChapterDisplay({ setLoading, pathname, hash }: Props) {
    const { chapter } = ChapterHook(pathname)

    useEffect(() => {
        if (setLoading) {
            setLoading(!!chapter)
        }
        if (!!chapter) {
            updateTab()
            setTimeout(scrollToCorrectPosition, 100)
        }
    }, [chapter])

    useEffect(() => {
        if (!!chapter) {
            scrollToCorrectPosition()
        }
    }, [hash])

    function updateTab() {
        const guide = chapter?.book === 'rules' ? 'R' : 'P'

        document.title = `${guide}.${chapter?.chapter} ${chapter?.chapterName} - Bonfire`
    }

    function scrollToCorrectPosition() {
        if (hash) {
            const element: any = document.querySelector(hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 83;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            {chapter && <ContentDisplay contents={chapter.chapterContents} chapterName={chapter.chapterName} pathname={pathname} book={chapter.book} chapterNumber={chapter.chapter} chapterInfo={chapter.info} />}
            {chapter && <ContentNavigation navigation={chapter.navigation} pathname={pathname} />}
        </div>
    )
}