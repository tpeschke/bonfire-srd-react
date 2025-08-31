import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import HomeIcon from './icons/HomeIcon'
import LoginLogoutIcons from './icons/LoginLogoutIcons'
import EditIcon from './icons/EditIcon'
import SearchIcon from './icons/searchIcon/SearchIcon'
import { getUserPatreon, infoHasBeenFetched } from '../../redux/slices/userSlice'
import { useSelector } from 'react-redux'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {
    const readyToGo = useSelector(infoHasBeenFetched)
    const userPatreon = useSelector(getUserPatreon)

    return (
        <div className="header-shell">
            <div>
                <img src={logo} />
                <Link to={'/'}>
                    <div className='title-shell'>
                        <h1>Bonfire SRD</h1>
                        {readyToGo && <p>{userPatreon > 0 ? 'Deluxe' : 'Free'}</p>}
                    </div>
                </Link>
            </div>
            <EditIcon pathname={pathname} />
            <LoginLogoutIcons />
            <SearchIcon pathname={pathname} />
            <HomeIcon pathname={pathname} />
        </div>
    )
}