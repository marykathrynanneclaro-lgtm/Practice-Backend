/* 
    const express = require('express')
This is an outdated way of including packages. It utilizes the commonjs type (found in the package.json). We will be using the ES modules (type: module) for this practice
    
The reason for the switch is because commonjs is synchronous while ES modules are asynchronous
*/
import express from "express"

const app = express() //create an express app

app.use(express.json()) //Parse json request client-side

//Routes import
import userRouter from './routes/user_route.js'

//Routes declaration
app.use("/api/v1/users", userRouter) //Example route: http://localhost:3000/api/v1/users/register

export default app
/*
You need to export so that it's usable in other files. DEFAULT export allows for the app object ot be the MAIN export of the file. You do not need to wrap the function in curly braces
    import func from PATH

The alternative is a NAMED export, which allows you to export multiple functions, objects, and classes. But you need to wrap the import call in curly braces i.e. 
    import {func1, func2} from PATH
*/