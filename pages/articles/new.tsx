import { NextPage } from "next"

const NewArticlePage: NextPage = () => {
    const handleSubmit = async (event: any) => {
        event.preventDefault()

        console.log(event)
        const data = {
            title: event?.target?.title.value,
            category: event?.target?.category.value,
            content: event.target.content.value,
            coverImage: event.target.cover_image.value
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

        const response = await fetch(endPoint, options)

        const result = await response.json()
        alert(result.success)
    }   

    return (
        <>
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
                        <option value="political">Political</option>
                        <option value="opinion">Opinion</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="sports">Sports</option>
                    </select>

                    <br />
                    <br />

                    <label htmlFor="content">Content</label>
                    <br />  
                    <textarea name="content" className="border border-slate-600" id="content" required cols={50} rows={10}></textarea>

                    <br />
                    <br />

                    <label htmlFor="cover-image">Cover Image: </label>
                    <input type="file" name="cover_image" id="cover_image" accept=".png,.gif,.jpg,.jpeg" required />
                    <br />
                    <br />

                    <input type="button" value="Save" className="border rounded-md bg-blue-600 text-white px-5" />
                    <input type="submit" value="Submit" className="border rounded-md bg-green-600 text-white px-5" />
                </form>
            </div>
        </>
    )
}

export default NewArticlePage