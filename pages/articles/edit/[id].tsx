import { NextPage } from "next"
import Image from 'next/image'
import { DefaultSession, Session } from "next-auth"
import { useSession, signIn,  } from "next-auth/react"
import { useRouter } from "next/router"
import Articles from '../../../data'
import Post from "../../../interfaces/Post"

const EditArticlePage: NextPage = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const router = useRouter()
    const id = router.query.id as string

    if (loading) {
        return <h1 className="text-center font-bold text-xl">Loading... Please Wait!</h1>
    }

    const article = Articles.find((article) => {
        return article.id == id
    })

    if (status == 'authenticated') {
        return (
        <>
            <h1 className='underline text-center text-4xl font-bold py-3 dark:text-white'>Edit Article</h1>
            <div className="flex items-center justify-center content-center m-auto">
                <form action="/api/posts/edit" method="POST" onSubmit={(event) => handleSubmit(event, session)}>
                    <label htmlFor="article-name" className="dark:text-white">Title: </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="article-title" 
                        className="border valid:border-green-500 border-slate-400 rounded-sm" 
                        minLength={1}
                        required 
                        placeholder="Title of article"
                        defaultValue={article?.title}
                        size={article?.title.length}
                        />

                    <br />
                    <br />

                    <label htmlFor="category" className="dark:text-white">Category: </label>
                    <select name="category" className="border" required aria-required id="category" defaultValue={article?.category?.toLowerCase()}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="opinion">Opinion</option>
                        <option value="political">Political</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="sports">Sports</option>
                        <option value="sponsored">Sponsored</option>
                    </select>

                    <br />
                    <br />

                    <label htmlFor="content" className="dark:text-white">Content: </label>
                    <br />  
                    <textarea 
                        name="content" 
                        className="border border-slate-600 rounded-md" id="content" 
                        required 
                        cols={100} 
                        rows={25} 
                        defaultValue={article?.content}></textarea>

                    <br />
                    <br />

                    {/* <Image src={article?.coverImage} alt="cover image" className="max-w-5xl h-full rounded-lg object-cover m-auto" width="1250" height="300"/> */}

                    <br />

                    <label htmlFor="cover-image" className="dark:text-white">Cover Image: </label>
                    <input type="file" name="coverImage" id="cover_image" accept=".png,.gif,.jpg,.jpeg" />

                    <br />
                    <br />

                    <input type="button" value="Save" className="border rounded-md bg-blue-600 text-white px-5" onClick={handleSave}/>
                    <input type="submit" value="Submit" className="border rounded-md bg-green-600 text-white px-5" />
                </form>
            </div>
        </>
    )
    }

    return (
        <div className="content-center items-center justify-center">
            <h1 className="text-5xl text-center font-bold dark:text-white">Please login</h1>
            <button type="button" className="border rounded-md bg-blue-600 px-5 text-white" onClick={() => signIn()}>Sign In</button>
        </div>
    )
}

const handleSubmit = async (event: React.FormEvent, session?: Session) => {
    event.preventDefault()

    // console.log(event.target.)

    const target = event.target as typeof event.target & {
        title: { defaultValue: string },
        category: { defaultValue: string },
        content: { defaultValue: string },
        coverImage: { defaultValue: string },
        // author: { defaultValue:  DefaultSession.user}
    }
    const data = {
        title: target?.title.defaultValue,
        category: target?.category.defaultValue,
        content: target?.content.defaultValue,
        coverImage: target?.coverImage.defaultValue,
        author: session?.user
    }

    const endPoint = '/api/posts/edit'

    const JsonData = JSON.stringify(data)

    const options = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },

        body: JsonData
    }

    const response = await fetch(endPoint, options)

    const result = await response.json()
    alert(result.success)
}

const handleSave = () => {
    console.log('saved')
}

export default EditArticlePage