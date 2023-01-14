import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NewsletterPrompt } from './NewsletterPrompt'
export const Footer = () => {

return (
    <footer className={`${styles.footer}`}>
        {/* <a
          href={process.env.HOST}
          rel="noopener noreferrer"
        >RoboReporter</a> */}

        <div className={`${styles.links} px-20`}>
          <div>
            <p className={styles.category}>Terms of use</p>
            <ul className={styles.noList}>
              <li><a href='/terms' target={'empty'} rel="noopener noreferrer">Terms of Service</a></li>
              <li><a href='/privacy' target={'_empty'} rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.category}>Support</p>
            <ul className={styles.noList}>
              <li><a href="/contact" target="_empty">Contact</a></li>
              <li><a href='/about' target="_empty">About</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.category}>Other Links</p>
            <ul className={styles.noList}>
              <li>
                <a href="https://halfwit.tech" target={"_empty"} rel="noopener noreferrer">Halfwit</a>
              </li>
            </ul>
          </div>

          <NewsletterPrompt />
        </div>



        <hr className={styles.spacer}/>

        <div className={styles.bottom}>
          <p>&copy; 2023  Halfwit Technologies. All Rights Reserved</p>
          <div className={styles.socials}>
          <a 
            href="https://discord.gg/mkV7DT64TB" 
            target="_empty" 
            rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faDiscord} className="social-link" />
              <span className="sr-only">Discord</span>
            </a>
          <a  
            href="https://github.com/Halfwit-Technologies" 
            target="_empty" 
            rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faGithub} className="social-link" />
             <span className="sr-only">Github</span>
            </a>
          <a 
            href="https://twitter.com" 
            target="_empty" 
            rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faTwitter} className="social-link" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    )
}