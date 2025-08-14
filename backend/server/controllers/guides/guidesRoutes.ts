// @ts-ignore
import express from 'express'

import { getChapter } from './guidesController'

const guidesRoutes = express.Router()

guidesRoutes.get('/:code', getChapter)

export default guidesRoutes