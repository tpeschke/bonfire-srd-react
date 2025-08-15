import query from '../../db/database'
import { Response, Request } from '../../interfaces/apiInterfaces'
import searchSQL from '../../db/queries/search'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'

interface SearchRequest extends Request {
    params: {
        searchTerm: string
    }
}

export async function searchByTerm(request: SearchRequest, response: Response) {
    const { searchTerm } = request.params

    const searchResults = await query(searchSQL.search, searchTerm)

    checkForContentTypeBeforeSending(response, searchResults)
}