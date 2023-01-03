import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Articles from '../data.js'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RoboReporter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <section> */}
        {Articles.map((article, idx) => {
          return article.ogImage && <div key={idx} className={styles.card} onClick={() => {
            window.open(article.slug, "_empty")
          }}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        })}
        {/* </section> */}
      </main>
    </div>
  )
}

export default Home