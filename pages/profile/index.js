import ProfileHeader from "../../components/profile/profileHader"
import Head from "next/head"
import { useSession, signIn, signOut } from "next-auth/react"
import SideBar from '../../components/profile/SideBar'
import Haeder from "../../components/Header"
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export async function getServerSideProps(context) {
  
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

function ProfilePage ({session}){

    return(
        <>
         <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
         <title>{"Profile"}</title>
         <meta  property="og:image"  />
         <meta name="viewport" content="width=device-width, initial-scale=1 "  />
        </Head>
        <Haeder/>
        <ProfileHeader/>
        <SideBar/>
        </>
    )
}

export default ProfilePage