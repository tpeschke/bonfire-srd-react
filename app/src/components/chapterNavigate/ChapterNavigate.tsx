import { useEffect, useState } from 'react';
import './ChapterNavigate.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import ChapterHook from '../../hooks/ChapterHooks';
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'

export default function ChapterNavigate() {
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
                <h1 className='player-heading'>Players Guide</h1>
                {playerChapters.map((route, index) => {
                    const routePath = `/players/${index + 1}`
                    return <Link onMouseEnter={_ => preloadChapter(routePath)} key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
                })}
            </div>
        </>
    )
}