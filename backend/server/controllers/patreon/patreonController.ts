import { Response, Request } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import patreonSQL from '../../db/queries/patreon'
import query from '../../db/database'

export async function getAll(request: Request, response: Response) {
    const patreons = await query(patreonSQL.all)

    let nameOnlyArray: string[] = []

    patreons.forEach(({ name, patreon }) => {
        for (let i = 0; i < patreon; i++) {
            nameOnlyArray.push(name)
        }
    })

    checkForContentTypeBeforeSending(response, nameOnlyArray)
}