import { SetLoadingFunction } from '../../components/loading/Loading'
import './Search.css'

interface Props {
    setLoading?: SetLoadingFunction
}

export default function Search({ setLoading }: Props) {

    if (setLoading) {
        setLoading(true)
    }

    return (
        <div className="search-shell">
            <h1>Search</h1>
        </div>
    )
}