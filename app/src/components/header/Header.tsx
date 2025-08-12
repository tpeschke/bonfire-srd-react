import { Link } from 'react-router-dom'
import './Header.css'

interface Props {

}

export default function Header({}: Props) {
    return (
        <div className="header-shell">
            <Link to={'/'}><h1>Bonfire SRD</h1></Link>
            <Link to={'/'}><i className="fa-solid fa-house"></i></Link>
        </div>
    )
}