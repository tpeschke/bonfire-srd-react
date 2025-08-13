import { useLocation } from "react-router-dom"

interface HookReturn {
    pathname: string,
    hash: string
}

export default function LocationHook(): HookReturn {
    const { pathname, hash } = useLocation();

    return {
        pathname,
        hash
    }
}