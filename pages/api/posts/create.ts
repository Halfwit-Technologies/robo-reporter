import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../interfaces/Post";
import User from "../../../interfaces/User";

type CreateRes = {
    success: boolean,
    message?: string
}

export default (req: NextApiRequest,  res: NextApiResponse<CreateRes>) : any => {
    const body = req.body

    if (!body.title || !body.content) {
        return res.status(400).json({ success: false, message: "Missing title or content" })
    }

    console.log(body)

    // TODO: make request to database to create article

    const data = {
        title: body.title,
        category: body.category,
        content: body.content,
        author: {
            id: '1',
            image: '',
            isAuthor: true,
            name: '',
            updatedAt: Date.now()
        },
        ogImage: {
            url: body.cover_image
        },
        coverImage: body.cover_image,
        createdTimestamp: Date.now(),
        slug: '',
        id: ''
    }

    res.status(200).json({ success: true })
}