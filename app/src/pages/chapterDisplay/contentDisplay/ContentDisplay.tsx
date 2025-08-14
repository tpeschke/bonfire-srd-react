import './ContentDisplay.css'
import { MarkdownContent, ComponentContent } from "@srd/common/interfaces/ChapterInterfaces";
import Markdown from "react-markdown";
import InlineDisplay from "./InlineDisplay";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    contents: (MarkdownContent | ComponentContent)[],
    pathname: string
}

export default function ContentDisplay({ contents, pathname }: Props) {
    const navigate = useNavigate()
    
    // BRODY
    useEffect(() => {
        if (contents) {
            const headers = document.querySelectorAll('.content-display-shell h1, .content-display-shell h2')
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
            {contents.reduce((displayedContent: any[], content: MarkdownContent | ComponentContent) => {

                if (content.type === 'markdown') {
                    displayedContent.push(<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]} key={displayedContent.length}>{content.body}</Markdown>)
                } else if (content.type === 'component') {
                    displayedContent.push(<InlineDisplay key={displayedContent.length} componentInfo={content} />)
                }

                return displayedContent
            }, [])}
        </div>
    )
}