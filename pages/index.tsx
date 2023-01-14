import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Articles from '../data.js'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
//   const { data: session, status } = useSession()
//   const userEmail = session?.user?.email
  
//   if (status === 'loading') {
//     return <p>Loading...</p>
// }

// if (status === 'authenticated') {
    return <>
    <div className={styles.container}>
      <Head>
        <title>RoboReporter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <p>Signed in as {userEmail}</p> */}
        {/* <section> */}
        {Articles.map((article, idx) => {
          return article.ogImage && <div key={idx} className={styles.card} onClick={() => {
            window.open(`/articles/${article.id}`, "_empty")
          }}>
            <Image src={article.coverImage} width="1000" height="500" alt="cover image for article"></Image>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        })}
        {/* </section> */}
      </main>
    </div>
    </>
// }

  // return (
  //   <button onClick={() => signIn()}>Sign In</button>
  // )
}

export default Home
