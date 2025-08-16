import './ContentDisplay.css'
import { MarkdownContent, ComponentContent, Books } from "@srd/common/interfaces/ChapterInterfaces";
import Markdown from "react-markdown";
import InlineDisplay from "./InlineDisplay";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChapterName from '../chapterName/ChapterName';

interface Props {
    contents: (MarkdownContent | ComponentContent)[],
    pathname: string,
    chapterName: string,
    chapterNumber: number,
    book: Books
}

export default function ContentDisplay({ contents, pathname, chapterName, chapterNumber, book }: Props) {
    const navigate = useNavigate()

    // BRODY
    useEffect(() => {
        if (contents) {
            const headers = document.querySelectorAll('.content-display-body-shell h1, .content-display-body-shell h2')
            headers.forEach(header => {
                header.addEventListener('click', getList(header.getAttribute("id")))
            })
        }
    }, [contents])

    const getList = (id: string | null) => {
        return () => {
            navigate(`${pathname}#${id}`)
        }
    }

    return (
        <div className="content-display-shell">
            <ChapterName chapterName={chapterName} chapterNumber={chapterNumber} book={book} />
            <div className="content-display-body-shell">
                {contents.reduce((displayedContent: any[], content: MarkdownContent | ComponentContent) => {

                    if (content.type === 'markdown') {
                        displayedContent.push(<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeRaw]} key={displayedContent.length}>{content.body}</Markdown>)
                    } else if (content.type === 'component') {
                        displayedContent.push(<InlineDisplay key={displayedContent.length} componentInfo={content} />)
                    }

                    return displayedContent
                }, [])}
            </div>
        </div>
    )
}