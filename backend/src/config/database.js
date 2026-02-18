import mongoose from "mongoose"

/*
Async or await is used when we want a task to finish before moving on to the next function
*/
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        //process.env returns an object containing the user environment and MONGODB_URI is found in the constants.js
        console.log(`\n Connected to Mongoose !!!
            ${connectionInstance}`) //Returns only [onject Object]
        //Backticks `` are used to mix text and variables in console.logs
    } catch (error) {
        console.log("Failed to connect to Mongoose", error)
        process.exit(1)
        //If it failes we can exit the async and move to the next function
    }
}

export default connectDB
//Check app.js for notes on why we need to export, default export, and named export