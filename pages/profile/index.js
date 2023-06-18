import ProfileHeader from "../../components/profile/profileHader"
import Head from "next/head"
import ProfileSideBar from '../../components/profile/ProfileSideBar'
import Haeder from "../../components/Global/Header"
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useState } from 'react';
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
  const [ isCollapsed, setIsCollapsed] = useState(true)
    return(
        <>
         <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
         <title>{"Profile"}</title>
         <meta  property="og:image"  />
         <meta name="viewport" content="width=device-width, initial-scale=1 "  />
        </Head>
        <Haeder/>
        <ProfileHeader isCollapsed={isCollapsed} />
        <ProfileSideBar
         defaultCollapsed={true}
         isCollapsed={isCollapsed}
         setIsCollapsed={setIsCollapsed}
         width={250}
         collapsedWidth={80}
         />
        </>
    )
   
}

export default ProfilePage