import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../interfaces/Post";
import User from "../../../interfaces/User";

import Articles from '../../../data'
import { useSession } from "next-auth/react";

type CreateRes = {
    success: boolean,
    message?: string
}

const handler = (req: NextApiRequest,  res: NextApiResponse<CreateRes>) : any => {
    const { data: session, status } = useSession()
    const body = req.body

    if (!body.title || !body.content) {
        return res.status(400).json({ success: false, message: "Missing title or content" })
    }

    // TODO: make request to database to create article

    const data:Post = {
        title: body.title,
        category: body.category,
        content: body.content,
        author: {
            _id: '1',
            image: '',
            isAuthor: true,
            name: '',
            updatedAt: Date.now()
        },
        ogImage: {
            url: body.coverImage
        },
        coverImage: body.coverImage,
        createdAt: Date.now(),
        slug: '',
        _id: '',
        posted: true
    }

    Articles.push(data)
    console.log(Articles[Articles.length - 1])

    res.status(200).json({ success: true })
}

export default handler