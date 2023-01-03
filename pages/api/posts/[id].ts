import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../interfaces/Post";
import Data from '../../../data'

type ResponseError = {
    message: string;
}
export default (req: NextApiRequest,  res: NextApiResponse<Post | ResponseError>) : any => {
    const { query } = req;
    const { id } = query

    // const filtered = Data.filter((p) => p.title.includes(id))

    // return filtered.length > 0 ? res.status(200).json(filtered[0]) : res.status(404).json({
    //     message: `Post with title ${id} not found.`
    return res.status(200);
    // })
}