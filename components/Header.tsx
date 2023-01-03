import Styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Header = () => {
    const [ theme, setTheme ] = useState('dark')

    return (
        <header id={Styles.header}>
            <a className={`${Styles.title} ${Styles.link}`} id="name" href="/">RoboReporter</a>

            <div>
                <a className={Styles.link} href='/'>Latest</a>
                <a className={Styles.link} href='/news'>News</a>
                <a className={Styles.link} href='/opinion'>Opinion</a>
                <a className={Styles.link} href='/local'>Local</a>
                <a className={Styles.link} href='/politics'>Politics</a>
                <a className={Styles.link} href='/entertainment'>Entertainment</a>
                <a className={Styles.link} href='/sports'>Sports</a>
                <a className={Styles.link} href='/about'>About</a>
            </div>

            <div className={Styles.actions}>
                <a className={Styles.link}>
                    {/* <span>  */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => search()} className={`${Styles.icon} ${Styles.link}`} />
                    {/* </span> */}
                </a>
                <a className={Styles.link}>
                    {/* <span> */}
                        <FontAwesomeIcon id="themeSwitcher" icon={theme == 'light' ? faMoon : faSun} onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} className={`${Styles.icon} ${Styles.link}`}/>
                    {/* </span> */}
                </a>
            </div>
        </header>
    )
}

const search = () => {

}

const switchTheme = () => {
    let currentTheme = localStorage.getItem('theme');
    localStorage.setItem('theme', currentTheme == 'dark' ? 'light' : 'dark');

    const icon = document.getElementById('themeSwitcher')
}