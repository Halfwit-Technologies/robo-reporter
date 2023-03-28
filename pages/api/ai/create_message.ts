import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";
import { encode, decode } from 'gpt-3-encoder'
import { ChatMessage } from "../../../types/types";

const configuration = new Configuration(
    {
        apiKey: process.env.OPENAI_KEY
    }
)

const openai = new OpenAIApi(configuration)

export default async (req: NextApiRequest,  res: NextApiResponse) => {
    const { messages } = req.body

    console.log({ messages })

    const chatGPT = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages
    })

    const GPTMessage = chatGPT.data.choices[0].message

    res.status(200).json({
        message: GPTMessage
    })
}