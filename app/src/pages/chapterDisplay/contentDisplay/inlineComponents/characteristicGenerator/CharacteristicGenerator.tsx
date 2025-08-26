import './CharacteristicGenerator.css'
import { useState } from "react"
import { CharacteristicTypes } from '@srd/common/interfaces/chapterInterfaces/CharacteristicInterfaces'
import axios from 'axios'
import { characteristicURL } from '../../../../../frontend-config'

export default function CharacteristicGenerator() {
    const [description, setDescription] = useState<string | null>(null)
    const [conviction, setConviction] = useState<string | null>(null)
    const [relationship, setRelationship] = useState<string | null>(null)
    const [flaw, setFlaw] = useState<string | null>(null)

    async function getCharacteristic(param: CharacteristicTypes) {
        const { data } = await axios.get(characteristicURL + param)

        switch (data.type) {
            case 'description':
                setDescription(data.result.charAt(0).toUpperCase() + data.result.slice(1))
                break;
            case 'conviction':
                setConviction(data.result.charAt(0).toUpperCase() + data.result.slice(1))
                break;
            case 'relationship':
                setRelationship(data.result)
                break;
            case 'flaw':
                setFlaw(data.result)
                break;
            default:
                console.log('SOMETHING WENT WRONG')
        }
    }

    return (
        <div className='characteristic-generator-shell'>
            <div>
                <button onClick={_ => getCharacteristic('description')}>Get Me Description</button>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={_ => getCharacteristic('conviction')}>Get Me Conviction</button>
                <p>{conviction}</p>
            </div>
            <div>
                <button onClick={_ => getCharacteristic('relationship')}>Get Me Relationship</button>
                <p>{relationship}</p>
            </div>
            <div>
                <button onClick={_ => getCharacteristic('flaw')}>Get Me Flaw</button>
                <p>{flaw}</p>
            </div>
        </div>
    )
}