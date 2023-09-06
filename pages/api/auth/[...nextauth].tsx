import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '../../../util/db'


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
        clientId: `${process.env.GOOGEL_ID}`,
        clientSecret: `${process.env.GOOGEL_SECRET}`,
    }),
    Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
  }),
    Github({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),

    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
}
export default NextAuth(authOptions)