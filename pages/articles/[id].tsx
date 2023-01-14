import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from 'next/image'
import Articles from '../../data'
import { AboutCard } from "../../components/AboutCard";
import { NewsletterPrompt } from "../../components/NewsletterPrompt";
import Post from '../../interfaces/Post'


const ArticleId: NextPage = () => {
    const router = useRouter()
    const id = router.query.id as string

    const article = Articles.find((article) => {
        return article.id == id
    })


    return (
    <div className="mx-auto">
        <div className="flex flex-wrap w-full pt-0 dark:bg-red-500">

            <div className="flex flex-col bg-gray-50 rounded shadow-md overflow-hidden mb-4">
                <h1 className="font-bold text-5xl">{article?.title}</h1>

            {/* <div className="text-xs mb-2 flex flex-wrap">
                <span className="uppercase cursor-pointer">
                    <a href={`/${article?.category}/${article?.id}`}>{article?.category}</a>
                </span>
                <span className="text-grey-400 mx-1"> - </span>
                <span className="text-grey-400">{Intl.DateTimeFormat('en-us').format(article?.createdAt)} - <a href='/'>RoboReporter.halfwit.tech</a></span>
            </div> */}

                <div className="shrink-0">
                    <img src={`${article?.coverImage}`} alt="cover image" className="max-w-5xl h-full rounded-lg object-cover" width="1250px"></img>
                </div>

                <div className="flex-1">
                    <p className="text-lg max-w-4xl">{article?.content}</p>
                </div>

                <AboutCard name="Joe" image="https://unsplash.it/50" _id="1" isAuthor={true} updatedAt={Date.now()}/>
            </div>

        </div>
        
        <div className="my-3 w-full">
            <NewsletterPrompt />
        </div>
    </div>


        // <div className="mx-auto">
        //     <div className="flex flex-wrap w-full pt-0">

        //         <div className="lg:flex lg:items-center lg:justify-between">
        //             <div className="mb-2 lg:pr-8 w-full lg:w-2">
        //                 {/* Title */}
        //                 <div className="flex-1 min-w-0">
        //                     <div className="mt-4 mb-1">
        //                         <span>{article?.title}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Date */}
        //         <div className="text-xs mb-2 flex justify-between">
        //             <div className="flex items-center flex-wrap">
        //                 <span className="uppercase cursor-pointer">
        //                     <a href={`/${article?.category}/${article?.id}`}>{article?.category}</a>
        //                 </span>

        //                 <span className="text-gray-400 mx-1"> - </span>
        //                 <span className="text-gray-400 mx-1"> Jan 12, 2023 . robo-reporter.halfwit.tech </span>
        //             </div>
        //         </div>


        //     </div>
        // </div>
    )
}

export default ArticleId