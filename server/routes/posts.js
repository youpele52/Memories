import express from 'express' // for creating the routing of our app
import { getPosts, createPosts } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPosts)
export default router
