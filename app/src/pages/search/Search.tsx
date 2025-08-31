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
import ChapterHook from '../../hooks/ChapterHooks'
// @ts-ignore
import rehypeWrap from 'rehype-wrap-all'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string
}

export default function Search({ setLoading, pathname }: Props) {
    const [searchResults, setSearchResults] = useState<SearchResults[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [timeoutID, setTimeoutID] = useState<any | null>(null)

    const { preloadChapter } = ChapterHook()

    const guideDictionary = {
        rules: 'Rules Guide',
        players: 'Players Guide'
    }

    useEffect(() => {
        if (setLoading) {
            document.title = "Bonfire SRD"
            
            setLoading(false)

            if (timeoutID) { clearTimeout(timeoutID) }

            const newTimeoutID = setTimeout(() => {
                setSearchResults([])

                const [_, searchParam] = pathname.split('/search/')
                setSearchTerm(searchParam)

                axios.get(searchURL + searchParam).then(({ data }) => {
                    setSearchResults(data)
                    setLoading(true)
                })
            }, 1000)
            
            setTimeoutID(newTimeoutID)
        }
    }, [pathname])

    return (
        <div className="search-shell">
            <h1>{searchResults.length} Results</h1>
            {searchResults.map(({ book, chapter, excerpt }, index) => {
                const routePath = `/${book}/${chapter}`

                return (
                    <div className='search-result' key={index} onMouseEnter={_ => preloadChapter(routePath)}>
                        <Link to={routePath}>
                            <h2>{guideDictionary[book]} - Chapter {chapter}</h2>
                            <div className='search-quote'>
                                <p>...</p>
                                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, [rehypeWrap, {selector: 'table', wrapper: 'div.responsive-table'}]]} >{excerpt.replaceAll(/(\[([^;]*)\]\(([^;]*)\))/gm, "$2").split(searchTerm).join(`<strong class='highlight'>${searchTerm}</strong>`)}</Markdown>
                                <p>...</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}