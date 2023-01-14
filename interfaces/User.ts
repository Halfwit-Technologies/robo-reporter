import { Model, Document } from 'mongoose'

interface User {
    _id: string
    name: string
    image: string
    updatedAt: number
    isAuthor: boolean
}

declare let userSchema: Model<User>
export default User;