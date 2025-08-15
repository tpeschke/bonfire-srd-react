import { useEffect, useState } from 'react'
import '../../Header.css'
import './SearchIcon.css'
import { useNavigate } from 'react-router-dom'

interface Props {
    pathname: string
}

export default function SearchIcon({ pathname }: Props) {
    const [focus, setFocus] = useState(false)
    const [search, setSearch] = useState("")
    const [timeoutID, setTimeoutID] = useState<any | null>(null)

    const navigate = useNavigate()

    const searchId = 'search-input'
    let searchInput: any = document.getElementById(searchId)

    useEffect(() => {
        if (pathname.substring(0, 7) !== '/search') {
            setSearch('')
            setFocus(false)
            if (searchInput) {
                searchInput.value = ''
            }
        }
    }, [pathname])

    function openInput() {
        if (timeoutID) { clearTimeout(timeoutID) }

        const newTimeoutID = setTimeout(() => {
            setFocus(true)
            searchInput?.focus()
        }, 250)

        setTimeoutID(newTimeoutID)
    }

    function closeInput() {
        if (timeoutID) { clearTimeout(timeoutID) }
        setFocus(false)
    }

    function searchByTerm(value: string) {
        setSearch(value)
        navigate(`/search/${value}`)
    }

    return (
        <div className={focus || search !== '' ? 'search-icon-shell unset-width' : 'search-icon-shell'} onMouseEnter={openInput} onMouseLeave={closeInput}>
            <input id={searchId} onChange={event => searchByTerm(event.target.value)} className={focus || search !== '' ? 'open-search' : ''} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}