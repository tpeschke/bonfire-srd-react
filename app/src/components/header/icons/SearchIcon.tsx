import '../Header.css'
import { Link } from "react-router-dom"

interface Props {
    pathname: string
}

export default function SearchIcon({ pathname }: Props) {
    return (
        <>
            {pathname == '/search' && <i className="fa-solid fa-magnifying-glass"></i>}
            {pathname !== '/search' && <Link to={'/search'}><i className="fa-solid fa-magnifying-glass"></i></Link>}
        </>
    )
}