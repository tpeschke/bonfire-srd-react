import { Link } from 'react-router-dom'
import './Header.css'
import HomeIcon from './icons/HomeIcon'
import LoginLogoutIcons from './icons/LoginLogoutIcons'
import EditIcon from './icons/EditIcon'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {

    return (
        <div className="header-shell">
            <Link to={'/'}><h1>Bonfire SRD</h1></Link>
            <EditIcon pathname={pathname} />
            <LoginLogoutIcons />
            <HomeIcon pathname={pathname} />
        </div>
    )
}