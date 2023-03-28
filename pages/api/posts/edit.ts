import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../interfaces/Post";
import User from "../../../interfaces/User";

import Articles from '../../../models/Article'
import TestData from '../../../data'
import { getSession } from 'next-auth/react'

type CreateRes = {
    success: boolean,
    message?: string
}

const handler = (req: NextApiRequest,  res: NextApiResponse<CreateRes>) : any => {
    const session = getSession({ req })

    if (!session) {
        return res.status(401).json({ success: false, message: 'Unauthorized.' })
    }
    const body = req.body

    if (!body.title || !body.content) {
        return res.status(400).json({ success: false, message: "Missing title or content" })
    }

    console.log(body)

    const article = TestData.find((article) => {
        return article.title == body.title
    })

    if (!article) {
        return res.status(404).json({ success: false, message: 'Could not find article' })
    }

    // TODO: make request to database to update article

    const data = {
        title: body.title,
        category: body.category,
        content: body.content,
        author: article?.author,
        ogImage: {
            url: body.coverImage
        },
        coverImage: body.coverImage,
        createdAt: article?.createdAt,
        slug: article?.slug,
        id: article?.id
    }

    // TestData.splice(TestData.indexOf(article), TestData.indexOf(article) + 1)
    // TestData.push(data)

    res.status(200).json({ success: true })
}

export default handler