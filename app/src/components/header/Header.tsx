import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import HomeIcon from './icons/HomeIcon'
import LoginLogoutIcons from './icons/LoginLogoutIcons'
import EditIcon from './icons/EditIcon'
import SearchIcon from './icons/searchIcon/SearchIcon'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {

    return (
        <div className="header-shell">
            <div>
                <img src={logo} />
                <Link to={'/'}>
                    <h1>Bonfire SRD</h1>
                </Link>
            </div>
            <EditIcon pathname={pathname} />
            <LoginLogoutIcons />
            <SearchIcon pathname={pathname} />
            <HomeIcon pathname={pathname} />
        </div>
    )
}