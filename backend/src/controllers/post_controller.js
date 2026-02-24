import { Post } from "../models/post_model.js"

//Create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age} = req.body

        if(!name || !description || !age) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const post = await Post.create({name, description, age})
        res.status(201).json({
            message: "Post Created Sucessfully", post
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error", error
        })
    }
}

const getPosts = async (req,res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    }catch (error) {
        res.status(500).json({
            message: "Internal Server Error", error
        })
    }
}

const updatePost = async (req, res) => {
    try {
        //Basic Validation for empty body
        //req.body is a string, this means that if the length of the json is 0 means that the body is empty. 
        //Object.keys means to remove the "keys" i.e. {name: x, description: y, age: z}, remove name, description, and age
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            })
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!post) {return res.status(404).json({message: "Post not found!"})}

        res.status(200).json({message: "Post Updated Successfully", post})
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error", error
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id)

        if(!deleted) {res.status(404).json({message: "Post Not Found!"})}

        res.status(200).json({
            message: "Successfully deleted post!"
        })
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error})
    }
}

export {
    createPost,
    getPosts,
    updatePost,
    deletePost
}