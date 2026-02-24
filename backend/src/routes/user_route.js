import { Router} from 'express'
//Router is the tool we need to use from express
import {loginUser, logoutUser, registerUser} from '../controllers/user_controller.js'
const router = Router()

router.route('/register').post(registerUser) //post is HTTP methods
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

export default router
/*
(Frontend)Single-page Application: A router decides what web page is presented by a URL, changes the content of the web page without refreshing the page

(Backend)API: parses a request and directs/routes the request to various handlers w/in the program. Handles the request and response

For this project, assume we are using the API definition
*/