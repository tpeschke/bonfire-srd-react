// @ts-ignore
import express from 'express'
import { searchByTerm } from './searchController'

const searchRoutes = express.Router()

searchRoutes.get('/:searchTerm', searchByTerm)

export default searchRoutes