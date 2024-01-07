import type { AppProps } from 'next/app'

//Global 
import 'styles/footer.css'
import 'styles/header.css'
import 'styles/glob.css'
// Profile
import 'styles/Profile/profilepage.css'
//ReviewPage 
import 'styles/Reviews/ReviewPage/extebdedcaroysel.css'
import 'styles/Reviews/ReviewPage/imegelayout.css'
import 'styles/Reviews/ReviewPage/reviewpage.css'
// Context
import { SessionProvider } from "next-auth/react"
import {   IsRevSideBColl , SerchBarLocC , PageWidthC  } from 'context/context'
import { useMediaQuery } from 'usehooks-ts'
import { useState, useEffect } from 'react'

function MyApp(
  { Component , pageProps : { session , ...pageProps } } :AppProps ) {  
     // replasing css media quarys widh in js styled 
      const xl = useMediaQuery('(max-width: 1200px)')
      const md = useMediaQuery('(max-width: 900px)')
      const sm = useMediaQuery('(max-width: 600px)')

      const [isReviewSideBarCollapsed, setIsReviewSideBarCollapsed] = useState(false)
      const [serchBarLocation , setSerchBarLocation] = useState('')
      const [diplayState,setDisplaystate] = useState("")
       
       useEffect(()=>{
        
         xl&&md&&sm ?
         setDisplaystate("mob")
         :
         xl&&md?
         setDisplaystate("tab")
         :
         xl?
         setDisplaystate("desk")
         :
         setDisplaystate("deskandup")
       },[md, sm, xl])
33

      
      return (
        <SessionProvider session={session}>
        <SerchBarLocC.Provider value={[serchBarLocation, setSerchBarLocation] as any}>
        <IsRevSideBColl.Provider value={[isReviewSideBarCollapsed, setIsReviewSideBarCollapsed] as any }>
        <PageWidthC.Provider value={[diplayState,setDisplaystate] as any} >
           <Component {...pageProps} />  
         </PageWidthC.Provider>
        </IsRevSideBColl.Provider>
        </SerchBarLocC.Provider>
        </SessionProvider>
         )
    }
    export default MyApp