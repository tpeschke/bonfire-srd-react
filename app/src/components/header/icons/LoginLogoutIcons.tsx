import { useSelector } from 'react-redux'
import { signOutURL, signInURL } from '../../../frontend-config'
import { isUserLoggedOn } from '../../../redux/slices/userSlice'
import '../Header.css'

interface Props {
}

export default function LoginLogoutIcons({ }: Props) {
    const userIsLoggedIn = useSelector(isUserLoggedOn)

    return (
        <>
            {userIsLoggedIn ?
                <a className='header-spacer' href={signOutURL}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </a>
                :
                <a className='header-spacer' href={signInURL}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </a>
            }
        </>
    )
}