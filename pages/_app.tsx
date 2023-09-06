import { useEffect, useState } from 'react'
//Global 
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/glob.css'
// Profile
import '../styles/Profile/profilepage.css'
//ReviewPage 
import '../styles/Reviews/ReviewPage/extebdedcaroysel.css'
import '../styles/Reviews/ReviewPage/imegelayout.css'
import '../styles/Reviews/ReviewPage/reviewpage.css'
// Context
import { SessionProvider } from "next-auth/react"
import { FavoritesContext , IsReviewSideBarCollapsedContext , SerchBarlocatonContaxt , PageWidthContext  } from '../util/Context/Context'
import { useMediaQuery } from 'usehooks-ts'

function MyApp({ Component, pageProps : { session , ...pageProps } }) {  
     // replasing css media quarys widh in js styled 
      const xl = useMediaQuery('(max-width: 1200px)')
      const md = useMediaQuery('(max-width: 900px)')
      const sm = useMediaQuery('(max-width: 600px)')
      const [isReviewSideBarCollapsed, setIsReviewSideBarCollapsed] = useState(false)
      const [serchBarLocation , setSerchBarLocation] = useState('')
      const [diplayState,setDisplaystate] = useState(null)
       
       useEffect(()=>{
        
         xl&&md&&sm ?
         setDisplaystate("mob")
         :
         xl&md?
         setDisplaystate("tab")
         :
         xl?
         setDisplaystate("desk")
         :
         setDisplaystate("deskandup")
       },[md, sm, xl])

      
      return (
        <SessionProvider session={session}>
        <SerchBarlocatonContaxt.Provider value={[serchBarLocation , setSerchBarLocation]}>
        <IsReviewSideBarCollapsedContext.Provider value={[isReviewSideBarCollapsed, setIsReviewSideBarCollapsed]}>
        <PageWidthContext.Provider value={[diplayState,setDisplaystate]} >
           <Component {...pageProps} />  
         </PageWidthContext.Provider>
        </IsReviewSideBarCollapsedContext.Provider>
        </SerchBarlocatonContaxt.Provider>
        </SessionProvider>
         )
    }
    export default MyApp