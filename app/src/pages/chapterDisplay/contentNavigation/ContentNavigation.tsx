import { ChapterNavigation } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import './ContentNavigation.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Props {
    navigation: ChapterNavigation[],
    pathname: string
}

export default function ContentNavigation({ navigation, pathname }: Props) {
    const [currentNavigation, setCurrentNavigation] = useState<ChapterNavigation[] | null>(null)
    const [currentHeaderID, setCurrentHeaderID] = useState<string | null>(null)

    useEffect(() => {
        if (navigation.length > 0 && currentNavigation !== navigation) {
            const headers = document.querySelectorAll(".content-display-shell h1, .content-display-shell h2");

            setCurrentHeaderID(headers[0].getAttribute("id"))
            window.addEventListener('scroll', updateCurrentHeadingID(headers));

            setCurrentNavigation(navigation)
        }
    }, [navigation])

    const updateCurrentHeadingID = (headers: NodeListOf<Element>) => {
        return () => {
            headers.forEach((header: any) => {
                const headerTop = header.offsetTop - 67 - 32;
                if (pageYOffset >= headerTop) {
                    setCurrentHeaderID(header.getAttribute("id"))
                }
            });
        }
    }

    return (
        <div className='inner-nav-shell'>
            <h1>In This Chapter</h1>
            <div className='quick-link-shell'>
                {navigation.map(({ section, type, id }, index) => {
                    const pathToHeading = `${pathname}#${id}`

                    if (type === 'h1') {
                        return <Link key={index} to={pathToHeading} className={currentHeaderID === id ? 'active' : ''}><h2>{section}</h2></Link>
                    } else if (type === 'h2') {
                        return <Link key={index} to={pathToHeading} className={currentHeaderID === id ? 'active' : ''}><h3>{section}</h3></Link>
                    }

                    return <p key={index}>SOMETHING WENT WRONG</p>
                })}
            </div>
        </div>
    )

}