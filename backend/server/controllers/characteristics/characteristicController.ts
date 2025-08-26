import query from '../../db/database'
import characteristicSQL from '../../db/queries/characteristic'
import { Response, Request } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import { CharacteristicTypes } from '@srd/common/interfaces/chapterInterfaces/CharacteristicInterfaces'

interface CharacteristicRequest extends Request {
    params: {
        characteristicToGet: CharacteristicTypes
    }
}

export async function getCharacteristic(request: CharacteristicRequest, response: Response) {
    const { characteristicToGet } = request.params

    const [result] = await query(characteristicSQL[characteristicToGet])

    checkForContentTypeBeforeSending(response, { type: characteristicToGet, result: result.title})
}