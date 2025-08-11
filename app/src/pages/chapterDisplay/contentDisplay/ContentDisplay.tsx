import './ContentDisplay.css'
import { MarkdownContent, ComponentContent } from "@srd/common/interfaces/ChapterInterfaces";
import Markdown from "react-markdown";
import InlineDisplay from "./InlineDisplay";

interface Props {
    contents: (MarkdownContent | ComponentContent)[]
}

export default function ContentDisplay({ contents }: Props) {
    return (
        <div className="content-display-shell">
            {contents.reduce((displayedContent: any[], content: MarkdownContent | ComponentContent) => {
                if (content.type === 'markdown') {
                    displayedContent.push(<Markdown key={displayedContent.length}>{content.body}</Markdown>)
                } else if (content.type === 'component') {
                    displayedContent.push(<InlineDisplay key={displayedContent.length} componentInfo={content} />)
                }

                return displayedContent
            }, [])}
        </div>
    )
}