//Start of the Server
import dotenv from "dotenv"
import connectDB from './config/database.js'
import app from './app.js'
//Dependency that allows us to use environment variables in all servers

dotenv.config({
    path: './.env'
})

const startServer = async () => {
    try {
        await connectDB()
        //Unsure of what kind of method on() is in Express
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port : ${process.env.PORT}`)
        })
        //PORT is in .env file OR 8000
    } catch (error) {
        console.log("MongoDB connection failed", error)
    }
}

startServer()
/*
Added nodemon as developer dependency for real-time reflection of changes in code. Check package.json
*/