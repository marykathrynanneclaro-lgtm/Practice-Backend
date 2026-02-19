//Decision makers, handles the requests, the brains kumbaga
import { User } from "../models/user_model.js"

//For syntax, (req,res) ALWAYS
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        //A reqest is an object, the body is the contents

        //Basic validation

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        //Check if user exists

        const existing =  await User.findOne({ email: email.toLowerCase()})
        if (existing) {
            return res.status(400).json({message: "User Already Exists!"})
        }

        //Create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        })
        res.status(201).json({message: "User Registered",
            user: {id: user._id, email: user.email, username: user.username}
        })
    } catch (error){
        res.status(500).json({message: "Internal Server Error", error: error.message})
    }
}

export {
    registerUser
}