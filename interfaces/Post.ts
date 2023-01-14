import User from './User'
import { Model, Document } from 'mongoose'
import ConstructorMapping from '../types/types'

interface Post {
    _id: string
    title: string
    createdAt: number,
    category: string,
    coverImage: string
    author: User
    ogImage: {
        url: string
    }
    content: string
    slug: string,
}

const postSchema = {
    _id: String,
    title: Number,
    createdAt: Number,
    category: String,
    coverImage: String,
    Author: String,
    ogImage: {
        url: String,
    },
    content: String,
    slug: String,
}

type ArticleSchema = typeof postSchema
type Article = {
    [prop in keyof ArticleSchema]: ConstructorMapping<ArticleSchema[prop]>
}

declare let articleSchema: Model<Post>

export default Post

