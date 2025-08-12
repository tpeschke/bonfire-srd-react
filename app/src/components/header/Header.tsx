import { Link } from 'react-router-dom'
import './Header.css'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {
    return (
        <div className="header-shell">
            <Link to={'/'}><h1>Bonfire SRD</h1></Link>
            {pathname !== '/' && <Link to={'/'}><i className="fa-solid fa-house"></i></Link>}
        </div>
    )
}