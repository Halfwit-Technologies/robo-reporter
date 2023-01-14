import Styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export const Header = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const [ theme, setTheme ] = useState('dark')

    if (loading) {
        return <h1>Loading... Please Wait!</h1>
    }

    return (!loading &&
        <header id={Styles.header}>
            <a className={`${Styles.title} ${Styles.link}`} id="name" href="/">RoboReporter</a>

            <div>
                <a className='link' href='/'>Latest</a>
                <a className='link' href='/news'>News</a>
                <a className='link' href='/opinion'>Opinion</a>
                <a className='link' href='/local'>Local</a>
                <a className='link' href='/politics'>Politics</a>
                <a className='link' href='/entertainment'>Entertainment</a>
                <a className='link' href='/sports'>Sports</a>
                <a className='link' href='/about'>About</a>
            </div>

            <div className={Styles.actions}>
                <p className='px-5'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => search()} className="social-link link ext-3xl" />
                </p>

                <p className='px-5'>
                    <FontAwesomeIcon id="themeSwitcher" icon={theme == 'light' ? faMoon : faSun} onClick={() => switchTheme()} className="social-link link text-3xl"/>
                </p>

                {status === 'authenticated' ? 
                <>
                    <p>Signed in as {session.user?.name}</p>
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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

}