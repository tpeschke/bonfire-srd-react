import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-shell">
            <Link to='privacypolicy'>
                Privacy Policy
            </Link>
            <a href='https://stone-fish.com/'>
                Stone Fish Games
            </a>
            <a href='https://discord.gg/G8GVTME'>
                Discord
            </a>
        </div>
    )
}