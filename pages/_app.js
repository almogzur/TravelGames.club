import { useState } from 'react'
//Global 
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/glob.css'
// Profile
import '../styles/Profile/profilepage.css'
//Reviews
import '../styles/Reviews/cardswrapper.css'
//ReviewPage 
import '../styles/Reviews/ReviewPage/extebdedcaroysel.css'
import '../styles/Reviews/ReviewPage/imegelayout.css'
import '../styles/Reviews/ReviewPage/reviewpage.css'
// Context
import { SessionProvider } from "next-auth/react"
import { FavoritesContext , ReviewSidebarWidthContext , SerchBarlocatonContaxt , PageWidthContext  } from '../util/Context/Context'
import { useMediaQuery } from 'usehooks-ts'

function MyApp({ Component, pageProps : { session , ...pageProps } }) {  
      
      const [isCollapsed, setIsCollapsed] = useState(false)
      const [serchBarLocation , setSerchBarLocation] = useState('')
       // replacing all css files with in line css and hooks for media quarys 
       const xl =  useMediaQuery('(max-width: 1200px) ')
       const md =   useMediaQuery('(max-width: 900px)')
       const sm =   useMediaQuery('(max-width: 600px)')
      
      return (
        <SessionProvider session={session}>
        <SerchBarlocatonContaxt.Provider value={[serchBarLocation , setSerchBarLocation]}>
        <ReviewSidebarWidthContext.Provider value={[isCollapsed, setIsCollapsed] }>
        <PageWidthContext.Provider value={{xl,md,sm}} >
           <Component {...pageProps} />  
         </PageWidthContext.Provider>
        </ReviewSidebarWidthContext.Provider>
        </SerchBarlocatonContaxt.Provider>
        </SessionProvider>
         )
    }
    export default MyApp