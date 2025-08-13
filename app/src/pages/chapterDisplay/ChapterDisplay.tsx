import { useEffect } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import './ChapterDisplay.css'
import ChapterHook from './ChapterHooks'
import ContentDisplay from './contentDisplay/ContentDisplay'
import ContentNavigation from './contentNavigation/ContentNavigation'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string
}

export default function ChapterDisplay({ setLoading, pathname }: Props) {
    const { chapter } = ChapterHook(pathname)

    useEffect(() => {
        if (setLoading) {
            setLoading(!!chapter)
        }
    }, [chapter])

    return (
        <div className='chapter-display-shell'>
            {chapter && <ContentDisplay contents={chapter.chapterContents} />}
            {chapter && <ContentNavigation navigation={chapter.navigation}  pathname={pathname} />}
        </div>
    )
}