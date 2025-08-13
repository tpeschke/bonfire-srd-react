import { use, useEffect, useState } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import './ChapterDisplay.css'
import ChapterHook from './ChapterHooks'
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
            setTimeout(scrollToCorrectPosition, 100)
        }
    }, [chapter])

    useEffect(() => {
        if (!!chapter) {
            scrollToCorrectPosition()
        }
    }, [hash])

    function scrollToCorrectPosition() {
        if (hash) {
            const element: any = document.querySelector(hash);
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 83;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className='chapter-display-shell' id='chapter-display-shell'>
            {chapter && <ContentDisplay contents={chapter.chapterContents} />}
            {chapter && <ContentNavigation navigation={chapter.navigation} pathname={pathname} />}
        </div>
    )
}