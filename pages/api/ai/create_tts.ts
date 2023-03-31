import { NextApiRequest, NextApiResponse } from "next";
import textToSpeech from '@google-cloud/text-to-speech'
import * as fs from 'fs'

export default async(req: NextApiRequest,  res: NextApiResponse) => {
    const content = req.body

    let edit = content.toString()
    
    edit = edit.replaceAll('\n', '---')
    edit = edit.replaceAll('---', '\n')
    edit = edit.replace('# Robo-Reporter', '')

    const client = new textToSpeech.TextToSpeechClient({
        keyFilename: 'halfwit-tts.json'
    })

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
        input: {text: content},
        voice: voice_params,
        audioConfig: audio_config,
      };

    client.synthesizeSpeech({
        input: {text: edit},
        voice: voice_params,
        audioConfig: {
            audioEncoding: 'MP3'
        }
    }, (err: any, response: any) => {
        if (err) {
            console.error(err)
            return
        }

        fs.writeFile('out.mp3', response.audioContent, 'binary', (err) => {
            if (err) {
                console.error(err)
                return
            }

            console.log('audio content written to file: output.mp3')
        })
    })

    res.status(200).json({
        file: "/audio/output.mp3"
    })
}