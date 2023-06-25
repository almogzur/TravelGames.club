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
import { FavoritesContext , ReviewSidebarWidthContext , SerchBarlocatonContaxt  } from '../util/Context/Context'

function MyApp({ Component, pageProps : { session , ...pageProps } }) {  
      
      const [isCollapsed, setIsCollapsed] = useState(false)
      const [location , setLocation] = useState('')

      return (
        <SessionProvider session={session}>
        <SerchBarlocatonContaxt.Provider value={[location , setLocation]}>
        <ReviewSidebarWidthContext.Provider value={[isCollapsed, setIsCollapsed] }>
           <Component {...pageProps} />  
           
        </ReviewSidebarWidthContext.Provider>
        </SerchBarlocatonContaxt.Provider>
        </SessionProvider>
         )
    }
    export default MyApp