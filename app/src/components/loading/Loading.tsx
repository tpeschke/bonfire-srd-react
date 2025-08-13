import { cloneElement, JSX, useState } from 'react'
import './Loading.css'
import LoadingIndicator from './components/LoadingIndicator'

export type SetLoadingFunction = (showPageCondition: boolean) => void

interface Props {
    children: JSX.Element,
    secondary?: boolean
}

export default function Loading({ children, secondary = false }: Props) {
    const [isLoading, setIsLoading] = useState(true)

    const setLoading = async (showPageCondition: boolean) => {
        setIsLoading(!showPageCondition)
    }

    return (
        <>
            <LoadingIndicator stylings={isLoading ? '' : 'display-none'} secondary={secondary} />
            <div className={isLoading ? 'display-none' : 'page-loaded'}>
                {cloneElement(children, { setLoading })}
            </div>
        </>
    )
}