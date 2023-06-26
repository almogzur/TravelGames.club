import ProfileHeader from "../../components/profile/profileHader"
import Head from "next/head"
import ProfileSideBar from '../../components/profile/ProfileSideBar'
import ProfileTopBar from "../../components/profile/ProfileTopBar"
import Haeder from "../../components/Global/Header"
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { useState, useContext,useEffect} from 'react';
import { useMediaQuery } from 'usehooks-ts'
import {  PageWidthContext } from "../../util/Context/Context"


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


function ProfilePage ({session , reviews}){

  const [ isCollapsed, setIsCollapsed] = useState(true)

  const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')
  const pageWidth = useContext(PageWidthContext) 
  const xl = pageWidth.xl
  const md = pageWidth.md
  const sm = pageWidth.sm

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
        {
          xl && md && sm ? // mob 
         <ProfileTopBar/> 
          : 
          xl && md ? //tab
          <ProfileTopBar/> 
         :
         xl ? 
         <ProfileSideBar
             defaultCollapsed={true}
             isCollapsed={PagewidthIsLessThen ? true : isCollapsed}
             setIsCollapsed={setIsCollapsed}
         /> //desk
         :
         <ProfileSideBar
             defaultCollapsed={true}
             isCollapsed={PagewidthIsLessThen ? true : isCollapsed}
             setIsCollapsed={setIsCollapsed}
         />  // desk and up
         }
      
        </>
    )
   
}

export default ProfilePage