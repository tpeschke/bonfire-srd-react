import Markdown from 'react-markdown'
import ChapterHook from './ChapterHooks'
import ContentDisplay from './contentDisplay/ContentDisplay'

interface Props {
    
}

export default function ChapterDisplay({ }: Props) {
    const { chapter } = ChapterHook()

    return (
        <>
            {chapter && <ContentDisplay contents={chapter.chapterContents} />}
        </>
    )
}