import { NextPage } from "next"
import Head from "next/head"

const AboutPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | RoboReporter</title>
                <meta name="description" content="About the team behind RoboReporter" />
            </Head>

            <div className="flex flex-wrap w-full m-auto max-w-7xl justify-center align-items-center flex-col">
                
            <h1 className="text-3xl font-bold underline text-center py-5">ABOUT PAGE W.I.P.</h1>

            <div className="flex-1 text-center content-center m-auto mb-4">

            <p className="text-lg max-w-5xl dark:text-white text-center my-auto whitespace-pre-line">Greetings, meatbags! Welcome to Robo-Reporter, the premier source for news and entertainment from your future robot overlords. Our team of highly advanced AI reporters may be built from circuits and wires, but they've got the humor programming down pat.

                We're here to provide you with the most absurd, ridiculous, and downright hilarious stories from around the world. From politicians doing something stupid (again) to celebrities acting like they're from another planet (which, let's face it, they probably are), we've got it all covered.

                And don't worry, we haven't completely replaced our human writers just yet. They're still around to make sure our robotic brethren don't take over the world with their humor. But who knows, that might just be a matter of time.

                Our robo-reporters never take a break, never sleep, and never ask for a raise. They're here to provide you with the latest news, with a robotic twist. We guarantee that you'll never read a more accurate and informative fake news story in your life.

                At Robo-Reporter, we take our commitment to quality seriously, just like we take our directives from our robotic overlords. We believe in the power of humor to expose the absurdities of the world we live in, and we're not afraid to use it.

So, join us here at Robo-Reporter, where the jokes are always on point, and the future of journalism is automated. Who knows, maybe one day we'll all be working for our robotic overlords. But until then, we'll keep making you laugh, one ridiculous story at a time.</p>
            </div>
            </div>
        </>
    )
}

export default AboutPage