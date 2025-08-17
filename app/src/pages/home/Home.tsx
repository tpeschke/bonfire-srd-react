import { useEffect } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import './Home.css'
import PatreonThankYou from './components/PatreonThankYou/PatreonThankYou'
import DiscordLink from './components/DiscordLink/DiscordLink'
import LoginLogout from './components/LoginLogout/LoginLogout'
import ToolsNResources from './components/ToolsNResources/ToolsNResources'

interface Props {
    setLoading?: SetLoadingFunction
}

export default function Home({ setLoading }: Props) {

    useEffect(() => {
        if (setLoading) {
            document.title = "Bonfire SRD"
            setLoading(true)
        }
    }, [])

    return (
        <div className="home-shell">
            <div className='columns'>
                <div className='left'>
                    <PatreonThankYou />
                </div>
                <div className='right'>
                    <DiscordLink />
                    <LoginLogout />
                </div>
            </div>
            <div className='bottom'>
                <ToolsNResources />
            </div>
        </div>
    )
}