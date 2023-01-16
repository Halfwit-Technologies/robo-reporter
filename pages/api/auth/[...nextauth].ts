import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GithubProvider({
            // @ts-ignore
            clientId: process.env.GITHUB_ID,
            // @ts-ignore
            clientSecret: process.env.GITHUB_SECRET
        }),
        DiscordProvider({
            // @ts-ignore
            clientId: process.env.DISCORD_ID,
            // @ts-ignore
            clientSecret: process.env.DISCORD_SECRET
        }),
        TwitterProvider({
            // @ts-ignore
            clientId: '',
            // @ts-ignore
            clientSecret: ''
        }),
        FacebookProvider({
            // @ts-ignore
            clientId: process.env.FACEBOOK_ID,
            // @ts-ignore
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
            // @ts-ignore
            clientId: process.env.GOOGLE_ID,
            // @ts-ignore
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})
