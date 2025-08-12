// @ts-ignore
import express from 'express'

import { getChapter } from './rulesGuideController'

const rulesGuideRoutes = express.Router()

rulesGuideRoutes.get('/:code', getChapter)

export default rulesGuideRoutes