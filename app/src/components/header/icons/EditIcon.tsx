import { useSelector } from 'react-redux'
import { isOwner } from '../../../redux/slices/userSlice'
import '../Header.css'
import { Link } from "react-router-dom"

interface Props {
    pathname: string
}

export default function EditIcon({ pathname }: Props) {
    const userIsOwner = useSelector(isOwner)

    return (
        <>
            {userIsOwner && pathname !== '/' && !pathname.includes('edit') &&
                <Link className='header-spacer' to={`${pathname}/edit`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
            }
        </>
    )
}