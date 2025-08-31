// @ts-ignore
import express from 'express'
import { getWeapons, getArmor, getShields } from './gearController'

const gearRoutes = express.Router()

gearRoutes.get('/weapons', getWeapons)
gearRoutes.get('/armor', getArmor)
gearRoutes.get('/shields', getShields)

export default gearRoutes