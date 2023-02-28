import { Router } from 'express'
import { searchEndpoint } from '../controllers/searchResultController'

const router = Router()

router.route('/search').get(searchEndpoint)

export default router
