import { useEffect, useState } from 'react';
import './ChapterNavigate.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function ChapterNavigate() {
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)
    const location = useLocation();

    const rulesRoutes = [
        'Basic Mechanics',
        'Confrontations'
    ]

    const playerRoutes = [
        'Making a Good Character',
        'Step-by-Step Overview'
    ]

    useEffect(() => {
        if (location.pathname !== currentRoute) {
            setCurrentRoute(location.pathname)
        }
    }, [location])

    return (
        <div className="chapter-navigate-shell">
            <h1>Rules Guide</h1>
            {rulesRoutes.map((route, index) => {
                const routePath = `/rules/${index + 1}`
                return <Link key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
            })}
            <h1>Players Guide</h1>
            {playerRoutes.map((route, index) => {
                const routePath = `/player/${index + 1}`
                return <Link key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
            })}
        </div>
    )
}