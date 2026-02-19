//Creating the schema for user models
import mongoose, { Schema }  from "mongoose"//Schema means structure
import bcrypt from "bcrypt"
//Bcrypt is good for hashing passwords and comparing passwords, but it's old made in 1999. Maybe there are better alternatives?

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

// Before saving password, need to hash
//pre() means saving the passwords, but before saving, HASH it
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {return} //if your password is NOT modified, it wont hash again
    this.password = await bcrypt.hash(this.password, 10) //10 is for saltrounds, how hashed is this password
})

//Compare passwords, let bcrypt do it for us
//Why use the schema rather than the user itself? These are all methods for general use in ALL users
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)
//User is the model/schema/object (for me)