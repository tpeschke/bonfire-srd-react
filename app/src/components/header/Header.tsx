import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import HomeIcon from './icons/HomeIcon'
import LoginLogoutIcons from './icons/LoginLogoutIcons'
import EditIcon from './icons/EditIcon'
import SearchIcon from './icons/searchIcon/SearchIcon'
import { getUserPatreon, infoHasBeenFetched } from '../../redux/slices/userSlice'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

interface Props {
    pathname: string
}

export type HideIconOnHeaderFunction = (isHidden: boolean) => void

export default function Header({ pathname }: Props) {
    const [hideIcons, setHideIcons] = useState(false)

    const readyToGo = useSelector(infoHasBeenFetched)
    const userPatreon = useSelector(getUserPatreon)

    function hideIconsOnHeader(isHidden: boolean) {
        if (window.innerWidth < 769) {
            setHideIcons(isHidden)
        }
    }

    function getSubtitle() {
        if (!userPatreon || userPatreon === 0) {
            return 'Free'
        } else if (userPatreon >= 3) {
            return 'Deluxe'
        }
        return ''
    }

    return (
        <div className="header-shell">
            {!hideIcons && <div>
                <img src={logo} />
                <Link to={'/'}>
                    <div className='title-shell'>
                        <h1>Bonfire SRD</h1>
                        {readyToGo && <p>{getSubtitle()}</p>}
                    </div>
                </Link>
            </div>}
            <div className='icon-shell'>
                {!hideIcons && <EditIcon pathname={pathname} />}
                {!hideIcons && <LoginLogoutIcons />}
                <SearchIcon pathname={pathname} hideIconsOnHeader={hideIconsOnHeader} />
                {!hideIcons && <HomeIcon pathname={pathname} />}
            </div>
        </div>
    )
}