import './ChapterDisplay.css'
import ChapterHook from './ChapterHooks'
import ContentDisplay from './contentDisplay/ContentDisplay'

interface Props {
    
}

export default function ChapterDisplay({ }: Props) {
    const { chapter } = ChapterHook()

    return (
        <div className='chapter-display-shell'>
            {chapter && <ContentDisplay contents={chapter.chapterContents} />}
            <div className='inner-nav-shell'>
                Inner Chapter Nav
            </div>
        </div>
    )
}