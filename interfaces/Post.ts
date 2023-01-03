import User from './User'

type Post = {
    title: string
    createdTimestamp: number,
    category: string,
    coverImage: string
    author: User
    ogImage: {
        url: string
    }
    content: string
    slug: string
}

export default Post

