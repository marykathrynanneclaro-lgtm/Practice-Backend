//Creating the schema for user models
import mongoose, { Schema }  from "mongoose"//Schema means structure

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, //trim removes whitespace
            minLength: 1,
            maxLength: 30
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)
//User is the model/schema/object (for me)