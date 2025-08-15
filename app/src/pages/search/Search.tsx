import { useEffect, useState } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import SearchResults from '@srd/common/interfaces/SearchInterfaces'
import './Search.css'
import axios from 'axios'
import { searchURL } from '../../frontend-config'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string
}

export default function Search({ setLoading, pathname }: Props) {
    const [searchResults, setSearchResults] = useState<SearchResults[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    const guideDictionary = {
        rules: 'Rules Guide',
        players: 'Players Guide'
    }

    useEffect(() => {
        if (setLoading) {
            setLoading(false)
            setSearchResults([])

            const [_, searchParam] = pathname.split('/search/')
            setSearchTerm(searchParam)

            axios.get(searchURL + searchParam).then(({ data }) => {
                setSearchResults(data)
                setLoading(true)
            })
        }
    }, [pathname])

    return (
        <div className="search-shell">
            <h1>{searchResults.length} Results</h1>
            {searchResults.map(({ book, chapter, excerpt }, index) => {
                return (
                    <div className='search-result' key={index}>
                        <Link to={`/${book}/${chapter}`}>
                            <h2>{guideDictionary[book]} - Chapter {chapter}</h2>
                            <div className='search-quote'>
                                <p>...</p>
                                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >{excerpt.split(searchTerm).join(`<strong class='highlight'>${searchTerm}</strong>`)}</Markdown>
                                <p>...</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}