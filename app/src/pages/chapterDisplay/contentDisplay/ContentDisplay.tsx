import './ContentDisplay.css'
import { MarkdownContent, ComponentContent, Books, ChapterInfo } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import Markdown from "react-markdown";
import InlineDisplay from "./InlineDisplay";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-ignore
import rehypeWrap from 'rehype-wrap-all'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChapterName from '../chapterName/ChapterName';
import rehypeRaw from 'rehype-raw';
import { toast } from 'react-toastify';

interface Props {
    contents: (MarkdownContent | ComponentContent)[],
    pathname: string,
    chapterName: string,
    chapterNumber?: number,
    book?: Books,
    chapterInfo?: ChapterInfo
}

export default function ContentDisplay({ contents, pathname, chapterName, chapterNumber, book, chapterInfo }: Props) {
    const navigate = useNavigate()

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
            copyQuickLinkURL(id)
        }
    }

    const copyQuickLinkURL = (id: string | null = ''): void => {
        let textArea = getTextArea()
        const { origin, pathname } = window.location
        const url = `${origin}${pathname}#${id}`

        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            toast.success(`${url} successfully copied`)
        } catch (err) {
            toast.error(`Unable to copy ${url}`)
        }
        document.body.removeChild(textArea);
    }

    const getTextArea = () => {
        let textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';

        return textArea
    }

    return (
        <div className="content-display-shell">
            <ChapterName chapterName={chapterName} chapterNumber={chapterNumber} book={book} />
            <div className="content-display-body-shell">
                {contents.reduce((displayedContent: any[], content: MarkdownContent | ComponentContent) => {

                    if (content.type === 'markdown') {
                        displayedContent.push(<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeRaw, [rehypeWrap, {selector: 'table', wrapper: 'div.responsive-table'}]]} key={displayedContent.length}>{content.body}</Markdown>)
                    } else if (content.type === 'component' && chapterInfo) {
                        displayedContent.push(<InlineDisplay key={displayedContent.length} componentInfo={content} chapterInfo={chapterInfo} />)
                    }

                    return displayedContent
                }, [])}
            </div>
        </div>
    )
}