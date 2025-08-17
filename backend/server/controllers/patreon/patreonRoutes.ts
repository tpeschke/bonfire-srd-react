// @ts-ignore
import express from 'express'
import { getAll } from './patreonController'

const patreonRoutes = express.Router()

patreonRoutes.get('/getAll', getAll)

export default patreonRoutes