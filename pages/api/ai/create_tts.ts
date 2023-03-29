import { NextApiRequest, NextApiResponse } from "next";
import textToSpeech from '@google-cloud/text-to-speech'
import * as fs from 'fs'

export default async(req: NextApiRequest,  res: NextApiResponse) => {
    const article = req.body

    const client = new textToSpeech.TextToSpeechClient()

    const voice_params = {
        languageCode: 'en-US',
        name: 'en-US-Wavenet-D',
      };
      
      // define the audio output parameters
      const audio_config = {
        audioEncoding: 'MP3',
      };

      // generate the audio file
      const request = {
        input: {text: article},
        voice: voice_params,
        audioConfig: audio_config,
      };

    client.synthesizeSpeech({
        input: {text: "Hello, World!"},
        voice: voice_params,
        audioConfig: {
            audioEncoding: 'MP3'
        }
    }, (err: any, response: any) => {
        if (err) {
            console.error(err)
            return
        }
        fs.writeFile('/audio/output.mp3', response?.audioContent, 'binary', (err) => {
            if (err) {
                console.error(err)
                return
            }

            console.log('audio content written to file: /audio/output.mp3')
        })
    })

    res.status(200).json({
        file: "/audio/output.mp3"
    })
}