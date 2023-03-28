import { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import Articles from '../../data'
import Post from "../../interfaces/Post"

const NewArticlePage: NextPage = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const [message, setMessage] = useState('Submit')

    if (loading) {
        return (<h1>Now Loading... Please Wait.</h1>)
    }

    if (status == 'authenticated') {
        return (
            <>
            <form onSubmit={handleAiSubmit}>
                <label htmlFor="aiMsg">ChatGPT input: </label>
                <input type="text" name="aiMsg" id="aiMsg" />

            </form>
                <h1 className='underline text-center text-4xl font-bold py-3'>New Article</h1>
                <div className="flex items-center justify-center content-center m-auto">
                    <form action="/api/posts/create" method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="article-name">Title: </label>
                        <input 
                            type="text" 
                            name="title" 
                            id="article-title" 
                            className="border valid:border-green-500 border-slate-400" 
                            minLength={1}
                            required 
                            placeholder="Title of article"/>
                        <br />
                        <br />
    
                        <label htmlFor="category">Category: </label>

                        <select name="category" className="border" required aria-required id="category">
                            <option value="none" disabled hidden className="text-blue-600">Select an Option</option>
                            <option value="political">Political</option>
                            <option value="opinion">Opinion</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="sports">Sports</option>
                            <option value="sponsored">Sponsored</option>
                        </select>
    
                        <br />
                        <br />
    
                        <label htmlFor="content">Content: </label>
                        <br />  
                        <textarea name="content" value={message} className="border border-slate-600" id="content" required cols={50} rows={10} spellCheck={true}></textarea>
    
                        <br />
                        <br />
    
                        <label htmlFor="cover-image">Cover Image: </label>
                        <input type="file" name="cover_image" id="cover_image" accept=".png,.gif,.jpg,.jpeg" required />
                        <br />
                        <br />
    
                        <button type="button" value="Save" className="border rounded-md bg-blue-600 text-white px-5 hover:bg-blue-700">Save</button>
                        <button type="submit" value="Submit" className="border rounded-md bg-green-600 text-white px-5 hover:bg-green-700">Submit</button>
                        <button type="button" value="generate-tts" className="border rounded-md bg-orange-600 text-white px-5 hover:bg-orange-700" onClick={generateTTS}>Generate TTS</button>
                    </form>
                </div>

                <textarea name="aiMsgRes" id="aiMsgRes" cols={30} rows={10}></textarea>
            </>
        )
    }

    return (
        <div className="content-center items-center justify-center">
            <h1 className="text-5xl text-center font-bold dark:text-white">Please login</h1>
            <button type="button" className="border rounded-md bg-blue-600 px-5 text-white" onClick={() => signIn()}>Sign In</button>
        </div>
    )
    
    async function handleAiSubmit(event: any) {
        event.preventDefault()
    
        const aiOptions = {
            method: "POST",
            body: JSON.stringify({
                messages: [
                    { 'role': 'system', content: 'You are a journalist for a satirical news site called "Robo-Reporter". Your articles blur the line between believable and too good to be true. The articles should be in the markdown format' },
                    { 'role': 'user', content: event.target.aiMsg.value }
                ]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        console.log(aiOptions, JSON.stringify([
            { 'role': 'system', content: 'You are a journalist for a satirical news site called "Robo-Reporter". Your articles blur the line between believable and too-good-to-be-true. The articles should be in the markdown format' },
            { 'role': 'user', content: event.target.aiMsg.value }
        ]))

        const aiMsg = await fetch('/api/ai/create_message', aiOptions)
        const fnlMsg = await aiMsg.json()
    
        console.log(fnlMsg)
        setMessage(fnlMsg.message)
    }
}

const generateTTS = async () => {
    const content = document.getElementById('content')
    const ttsOptions = {
        method: "POST",
        file: content?.value
    }

    const response = await fetch('/api/ai/generate_tts', ttsOptions)
    const tts = response.json()

    return tts
}

const handleSubmit = async (event: any) => {
    event.preventDefault()

    // console.log(event)

    const data: Post = {
        title: event?.target?.title.value,
        category: event?.target?.category.value,
        content: event.target.content.value,
        coverImage: event.target.cover_image.value,
        author: {
            _id: '',
            image: '',
            isAuthor: false,
            name: '',
            updatedAt: Date.now()
        },
        _id: "",
        createdAt: Date.now(),
        ogImage: {
            url: ''
        },
        slug: '',
        posted: true
    }
    
    const endPoint = '/api/posts/create'
    
    const JsonData = JSON.stringify(data)
    
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JsonData
    }
    console.log({req: event.target})
    
    // const messageArea = document.createElement("p")
    // const content = document.createTextNode(fnlMsg)
    // messageArea.appendChild(content)


    const response = await fetch(endPoint, options)

    const result = await response.json()

    // Articles.push(data)
}   

async function chat() {
    
}

export default NewArticlePage