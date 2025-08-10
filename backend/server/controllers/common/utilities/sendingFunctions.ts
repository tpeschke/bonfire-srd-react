import { Response } from '../../../interfaces/apiInterfaces'

export const checkForContentTypeBeforeSending = (response: Response, body: Object) => {
    if (!response.get("content-type")) {
        response.send(body)
    }
}