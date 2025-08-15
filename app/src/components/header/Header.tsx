import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from './icons/HomeIcon'
import LoginLogoutIcons from './icons/LoginLogoutIcons'
import EditIcon from './icons/EditIcon'
import SearchIcon from './icons/SearchIcon'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {

    return (
        <div className="header-shell">
            <Link to={'/'}><h1>Bonfire SRD</h1></Link>
            <EditIcon pathname={pathname} />
            <LoginLogoutIcons />
            <SearchIcon pathname={pathname} />
            <HomeIcon pathname={pathname} />
        </div>
    )
}