// @ts-ignore
import express from 'express'

import { getChapter } from './guidesController'
import updateChapter from './chapter/updateChapter'

const guidesRoutes = express.Router()

guidesRoutes.get('/:code', getChapter)

guidesRoutes.patch('/update/:code', updateChapter)

export default guidesRoutes