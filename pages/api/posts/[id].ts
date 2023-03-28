import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../interfaces/Post";
import Data from '../../../data'

type ResponseError = {
    message: string;
}

const handler = (req: NextApiRequest,  res: NextApiResponse<Post | ResponseError>) : any => {
    const { query } = req;
    const { id } = query

    console.log({id: typeof id})

    const filtered = Data.filter((p) => p.title.includes(id))

    // return filtered.length > 0 ? res.status(200).json(filtered[0]) : res.status(404).json({
    //     message: `Post with title ${id} not found.`
    return res.status(200);
    // })
}

export default handler