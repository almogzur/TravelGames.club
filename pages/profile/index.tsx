import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useState, useContext, useEffect } from 'react';

import { PageWidthContext } from "context/context"
import ProfileHeader from "components/profile/profileHader"
import Head from "next/head"
import ProfileSideBar from 'components/profile/ProfileSideBar'
import ProfileTopBar from "components/profile/ProfileTopBar"
import Haeder from "components/Global/Header"

export async function getServerSideProps(context: any) {

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

function ProfilePage({ session, reviews }: any) {

  const [profileIsCollapsed, setProfileIsCollapsed] = useState(false)


  const { xl, md, sm }: any = useContext(PageWidthContext)

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{"Profile"}</title>
        <meta property="og:image" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
      </Head>
      <Haeder />

      <ProfileHeader isCollapsed={profileIsCollapsed} />
      {
        xl && md && sm ? // mob 
          <ProfileTopBar />
          :
          xl && md ? //tab
            <ProfileTopBar />
            :
            xl ? //desk
              <ProfileSideBar
                isCollapsed={profileIsCollapsed}
                setIsCollapsed={setProfileIsCollapsed}
              /> //and up 
              :
              <ProfileSideBar
                isCollapsed={profileIsCollapsed}
                setIsCollapsed={setProfileIsCollapsed}
              />
      }

    </>
  )

}

export default ProfilePage