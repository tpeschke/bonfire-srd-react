import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
import { isUserLoggedOn, isOwner } from '../../redux/slices/userSlice'
import { signOutURL, signInURL } from '../../frontend-config'

interface Props {
    pathname: string
}

export default function Header({ pathname }: Props) {
    const userIsLoggedIn = useSelector(isUserLoggedOn)
    const userIsOwner = useSelector(isOwner)

    return (
        <div className="header-shell">
            <Link to={'/'}><h1>Bonfire SRD</h1></Link>
            {userIsOwner && pathname !== '/' && !pathname.includes('edit') &&
                <Link to={`${pathname}/edit`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
            }
            {userIsLoggedIn ?
                <a href={signOutURL}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </a>
                :
                <a href={signInURL}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </a>
            }
            <p>|</p>
            {pathname !== '/' && <Link to={'/'}><i className="fa-solid fa-house"></i></Link>}
        </div>
    )
}