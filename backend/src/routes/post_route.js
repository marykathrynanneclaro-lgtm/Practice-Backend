import { Router} from 'express'
import {createPost, deletePost, getPosts, updatePost} from "../controllers/post_controller.js"

const router = Router()

router.route('/create').post(createPost)
router.route('/getPosts').get(getPosts)
router.route('/update/:id').patch(updatePost)
router.route('/delete/:id').delete(deletePost)
//Patch is for updating some data and kinda safer
//Put is for updating the entire schema

export default router