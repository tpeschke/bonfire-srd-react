// @ts-ignore
import express from 'express'
import { getCharacteristic } from './characteristicController'

const characteristicRoutes = express.Router()

characteristicRoutes.get('/:characteristicToGet', getCharacteristic)

export default characteristicRoutes