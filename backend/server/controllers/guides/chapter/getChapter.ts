import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import query from "../../../db/database"
import chapterSQL from '../../../db/queries/chapter'
import { checkForContentTypeBeforeSending } from "../../common/utilities/sendingFunctions"
import { chapterCache } from "../cache/getCache"
import { Books, ChapterContents, ChapterNavigation, LockedChapterContents, LockedNavigation } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import { rulesChapters, playerChapters } from '@srd/common/utilities/chapters'
import populateChapterContents from '../utilities/parseChapterContents'
import { isOwner } from '../../user/ownerFunctions'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapterWorkhorse(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')
    const { user } = request

    if (book === 'rules' || book === 'players') {
        const cachedChapter = chapterCache[book][+chapter - 1]

        if (cachedChapter) {
            checkForContentTypeBeforeSending(response, {
                ...cachedChapter,
                ...getUserAppropriateChapter(user, cachedChapter.chapterContents, cachedChapter.navigation, cachedChapter.info)
            })
        } else {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)

            const populatedChapter = populateChapterContents(book, +chapter, chaptercontents)

            checkForContentTypeBeforeSending(response, {
                ...populatedChapter,
                ...getUserAppropriateChapter(user, populatedChapter.chapterContents, populatedChapter.navigation, populatedChapter.info)
            })
        }

    } else {
        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })
    }
}

export function getUserAppropriateChapter(
    user: User | null | undefined,
    chapterContents: ChapterContents | LockedChapterContents,
    navigation: ChapterNavigation[] | LockedNavigation,
    info: any
) {
    return {
        navigation: getChapterNavigation(user, navigation),
        chapterContents: getChapterContents(user, chapterContents),
        info: getInfo(user, info)
    }
}

function getChapterContents(user: User | null | undefined, chapterContents: ChapterContents | LockedChapterContents) {
    const isDeluxeUser = user?.patreon && user?.patreon > 0

    if (isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.deluxe
    } else if (!isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.free
    }

    return chapterContents
}

function getChapterNavigation(user: User | null | undefined, navigation: ChapterNavigation[] | LockedNavigation) {
    const isDeluxeUser = user?.patreon && user?.patreon > 0

    if (isDeluxeUser && !Array.isArray(navigation)) {
        return navigation.deluxe
    } else if (!isDeluxeUser && !Array.isArray(navigation)) {
        return navigation.free
    }
    return navigation
}

function getInfo(user: User | null | undefined, info: any) {
    if (info && info.type) {
        return info
    } else if (info && typeof info === 'function') {
        return info(user)
    }
}

export async function getChapterFromDB(book: Books, chapter: string | number) {
    return await query(chapterSQL.getByBookAndChapter, [book, chapter])
}

export async function getChapterForEdit(request: ChapterRequest, response: Response) {
    const { user } = request

    if (isOwner(user?.id)) {
        const [book, chapter] = request.params.code.split('.')

        if (book === 'rules' || book === 'players') {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)
            const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

            checkForContentTypeBeforeSending(response, {
                book,
                chapterContents: chaptercontents,
                chapterName: guideChapterNameArray[+chapter - 1],
                chapter: chapter
            })
        }
    } else {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have Edit Permissions" })
    }
}
