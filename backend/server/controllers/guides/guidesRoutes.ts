// @ts-ignore
import express from 'express'

import { getChapter } from './guidesController'
import updateChapter from './chapter/updateChapter'
import { getChapterForEdit } from './chapter/getChapter'

const guidesRoutes = express.Router()

guidesRoutes.get('/:code', getChapter)
guidesRoutes.get('/edit/:code', getChapterForEdit)

guidesRoutes.patch('/update/:code', updateChapter)

export default guidesRoutes