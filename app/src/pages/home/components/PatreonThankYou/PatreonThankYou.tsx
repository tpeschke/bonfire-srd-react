import axios from "axios"
import { useEffect, useState } from "react"
import { patreonURL } from "../../../../frontend-config"

export default function PatreonThankYou() {
    const [patreons, setPatreon] = useState<string[]>([])
    const [displayedPatreons, setDisplayedPatreons] = useState<string[]>([])

    useEffect(() => {
        axios.get(patreonURL + '/getAll').then(({ data }) => {
            setPatreon(data)
            const shuffledArray = shuffle(data)
            setDisplayedPatreons(shuffledArray)
        })
    }, [])

    useEffect(() => {
        if (displayedPatreons.length > 0) {
            setTimeout(() => {
                setDisplayedPatreons(updateArray())
            }, 3000)
        }
    }, [displayedPatreons])

    function shuffle(array: string[]): string[] {
        let newArray: string[] = []

        while (newArray.length < 25) {
            const randomIndex = Math.floor(Math.random() * array.length);
            newArray.push(array[randomIndex])
        }

        return newArray
    }

    function updateArray(): string[] {
        let newArray: string[] = [...displayedPatreons]

        newArray.shift()

        const randomIndex = Math.floor(Math.random() * patreons.length);
        newArray.push(patreons[randomIndex])

        return newArray
    }

    return (
        <a href="https://www.patreon.com/c/bonfireRPG">
            <div className="card">
                <span>
                    <i className="fa-brands fa-patreon"></i>
                    <h1>A Big Thank You to Our Donors</h1>
                </span>
                <p className="subtitle">If you'd like to support Bonfire, you can do so on Patreon</p>
                <div className="patreon-shell">
                    {displayedPatreons.map((patreon, index) => <p key={index}>{patreon}</p>)}
                </div>
                <p className="sub-subtitle">Their names appear once for each dollar they donate.</p>
            </div>
        </a>
    )
}