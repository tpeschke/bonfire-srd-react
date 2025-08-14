import { Response, Request } from '../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../common/utilities/sendingFunctions'
import { isOwner } from './userUtilities'

export async function checkIfLoggedIn(request: Request, response: Response) {
    const { user } = request

    const userInfo = {
        isUserLoggedIn: user && user.id,
        patreon: user?.patreon ? user.patreon : 0,
        isOwner: isOwner(user?.id)
    }

    checkForContentTypeBeforeSending(response, userInfo)
}