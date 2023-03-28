import Styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { CategoryContext } from '../utils/CategoryContex'

export const Header = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const [ theme, setTheme ] = useState('dark')
    const { category, setCategory } = useContext(CategoryContext)

    if (loading) {
        return <h1>Loading... Please Wait!</h1>
    }

    return (!loading &&
        <header id={Styles.header} className="m-10">
            <Link className={`${Styles.title} ${Styles.link}`} id="name" href="/">RoboReporter</Link>

            <div>
                <Link className='link' href='/'>Latest</Link>
                <a className='link' onClick={() => setCategory('news')}>News</a>
                <a className='link' onClick={() => setCategory('opinion')}>Opinion</a>
                <a className='link' onClick={() => setCategory('local')}>Local</a>
                <a className='link' onClick={() => setCategory('politics')}>Politics</a>
                <a className='link' onClick={() => setCategory('entertainment')}>Entertainment</a>
                <a className='link' onClick={() => setCategory('sports')}>Sports</a>
                <Link className='link' href='/about'>About</Link>
            </div>

            <div className={Styles.actions}>
                <p className='px-5'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => search()} className="social-link link text-3xl" />
                </p>

                <p className='px-5'>
                    <FontAwesomeIcon id="themeSwitcher" icon={theme == 'light' ? faMoon : faSun} onClick={() => switchTheme()} className="social-link link text-3xl"/>
                </p>

                {status === 'authenticated' ? 
                <>
                    <p className="pr-4">Signed in as {session.user?.name}</p>
                    <button onClick={() => signOut()} className="rounded-md bg-blue-400 text-white px-3">Sign Out</button>
                </> 
                : <button onClick={() => signIn()}>Sign In</button>}
            </div>
        </header>
    )
}

const search = () => {

}

const switchTheme = () => {
    let curTheme = localStorage.getItem('theme')

    if (curTheme == 'dark') {
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.setItem('theme', 'dark')
    }
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }
}