import { JSX, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { getUserPatreon, infoHasBeenFetched } from "../../redux/slices/userSlice";

interface Props {
    children: JSX.Element,
}

export default function PlayerAuth({ children }: Props) {
    const userPatreon = useSelector(getUserPatreon)
    const userInfoHasBeenFetched = useSelector(infoHasBeenFetched)
    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfoHasBeenFetched || (userInfoHasBeenFetched && userPatreon < 1)) {
            navigate('/')
        }
    }, [children, userInfoHasBeenFetched])

    return (
        <Loading>
            {children}
        </Loading>
    )
}