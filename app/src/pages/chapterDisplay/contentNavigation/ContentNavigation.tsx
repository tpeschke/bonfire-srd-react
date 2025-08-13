import { ChapterNavigation } from '@srd/common/interfaces/ChapterInterfaces'
import './ContentNavigation.css'
import { Link } from 'react-router-dom'

interface Props {
    navigation: ChapterNavigation[],
    pathname: string
}

export default function ContentNavigation({ navigation, pathname }: Props) {
    return (
        <div className='inner-nav-shell'>
            <h1>In This Chapter</h1>
            {navigation.map(({ section, type, id }, index) => {
                if (type === 'h1') {
                    return <Link key={index} to={`${pathname}#${id}`}><h2>{section}</h2></Link>
                } else if (type === 'h2') {
                    return <Link key={index} to={`${pathname}#${id}`}><h3>{section}</h3></Link>
                } 
                return <p key={index}>SOMETHING WENT WRONG</p>
            })}
        </div>
    )
}