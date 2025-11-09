import { useEffect, useState } from 'react';
import './ChapterNavigate.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import ChapterHook from '../../hooks/ChapterHooks';
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'
import { getUserPatreon } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';

export default function ChapterNavigate() {
    const userPatreon = useSelector(getUserPatreon)

    const [currentRoute, setCurrentRoute] = useState<string | null>(null)
    const [showNav, setShowNav] = useState(false)

    const { preloadChapter } = ChapterHook()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== currentRoute) {
            setShowNav(false)
            setCurrentRoute(location.pathname)
        }
    }, [location])

    const [userCanViewCharacterCreation, setUserCanViewCharacterCreation] = useState(false)

    useEffect(() => {
        setUserCanViewCharacterCreation(userPatreon >= 1)
    }, [userPatreon])

    return (
        <>
            <div className='chapter-hamburger-menu'>
                {!showNav && <i onClick={_ => setShowNav(!showNav)} className="fa-solid fa-bars"></i>}
                {showNav && <i onClick={_ => setShowNav(!showNav)} className="fa-solid fa-x"></i>}
            </div>
            <div className={showNav ? "chapter-navigate-shell" : "chapter-navigate-shell closed"}>

                <h1>Rules Guide</h1>
                {rulesChapters.map((route, index) => {
                    const routePath = `/rules/${index + 1}`
                    return <Link onMouseEnter={_ => preloadChapter(routePath)} key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
                })}

                {userCanViewCharacterCreation ? (
                    <h1 className='player-heading'>
                        Players Guide
                    </h1>
                ) : (
                    <a href='https://www.patreon.com/c/bonfirerpg/membership' target='_blank'>
                        <h1 className='player-heading' data-tooltip-id="my-tooltip" data-tooltip-content="Character Creation is only for $1 and Up Patrons.">
                            <i className="fa-solid fa-lock"></i>
                            Players Guide
                        </h1>
                    </a>
                )
                }
                {playerChapters.map((route, index) => {
                    const routePath = `/players/${index + 1}`
                    if (userCanViewCharacterCreation) {
                        return <Link onMouseEnter={_ => preloadChapter(routePath)} key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
                    }
                    return <h2 key={index} className='disabled-route'>{index + 1} {route}</h2>
                })}
            </div>
        </>
    )
}