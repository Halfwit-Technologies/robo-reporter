import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET
        }),
        TwitterProvider({
            clientId: '',
            clientSecret: ''
        }),
        FacebookProvider({
            clientId: '',
            clientSecret: ''
        }),
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
})
