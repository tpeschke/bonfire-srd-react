import '../Header.css'
import { Link } from "react-router-dom"

interface Props {
    pathname: string
}

export default function HomeIcon({ pathname }: Props) {
    return (
        <>
            {pathname == '/' && <i className="fa-solid fa-house active"></i>}
            {pathname !== '/' && <Link to={'/'}><i className="fa-solid fa-house"></i></Link>}
        </>
    )
}