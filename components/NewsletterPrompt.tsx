import styles from '../styles/NewsletterPrompt.module.css'

export const NewsletterPrompt = () => {
    return (
        <div className={`${styles.newsletter} max-w-xl`} >
        <div className='flex-1'>
          <h1 className='leading-5 text-white text-3xl font-bold'>Want to stay informed?</h1>
          <p className='mt-2 text-sm leading-4 text-gray-300'>Sign up for our newsletter to stay up to date on this week's craziest news</p>
        </div>

        <div className='mt-2 w-full'>
          <form action="/api/newsletter/add" method='POST'>
            <input type="email" name="newsletter_email" id="newsletter_email" aria-label='email address' required={true} placeholder="Enter your email" className='input'/>

            <div className='mt-3 rounded-md shadow'>
              <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out w-full bg-blue-400" type="submit">Subscribe</button>
            </div>
          </form>
          <p className="text-white">We care about the protection of your data. Read our <a className='underline' href='/privacy'>Privacy Policy</a>.</p>
        </div>
      </div>
    )
}