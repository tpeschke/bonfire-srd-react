import { SetLoadingFunction } from '../../components/loading/Loading'
import './Home.css'

interface Props {
    setLoading?: SetLoadingFunction
}

export default function Home({ setLoading }: Props) {

    if (setLoading) {
        setLoading(true)
    }

    return (
        <div className="home-shell">
            <h1>Home</h1>
        </div>
    )
}