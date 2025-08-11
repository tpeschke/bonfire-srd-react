import './ChapterNavigate.css'
import { Link } from "react-router-dom";

interface Props {

}

export default function ChapterNavigate({}: Props) {
    return (
        <div className="chapter-navigate-shell">
            <Link to={'/player/1'}>Chapter 1</Link>
            <Link to={'/player/2'}>Chapter 2</Link>
        </div>
    )
}