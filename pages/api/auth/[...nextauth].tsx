import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from 'util/db'
import { Adapter } from "next-auth/adapters"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
        clientId: `${process.env.GOOGEL_ID}`,
        clientSecret: `${process.env.GOOGEL_SECRET}`,
    }),
    Discord({
      clientId: process.env.DISCORD_ID as string, 
      clientSecret: process.env.DISCORD_SECRET as string,
  }),
    Github({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  }),

    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise) ,
}
export default NextAuth(authOptions)