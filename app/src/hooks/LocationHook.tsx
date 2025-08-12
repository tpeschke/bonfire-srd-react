import { useLocation } from "react-router-dom"

interface HookReturn {
    pathname: string
}

export default function LocationHook(): HookReturn {
    const location = useLocation();

    return {
        pathname: location.pathname
    }
}