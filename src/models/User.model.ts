import {model,Document, Schema} from 'mongoose'

const userSchema = new Schema({
    user: String,
    password: String
})

interface IUser extends Document{
    user: string,
    password: string
}

export default model<IUser>('User', userSchema)