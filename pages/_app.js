import { useState } from 'react'
//Global 
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/glob.css'
// Profile
import '../styles/Profile/profilepage.css'
//Reviews
import '../styles/Reviews/cardswrapper.css'
import '../styles/Reviews/cardwrapperheadline.css'
//ReviewPage 
import '../styles/Reviews/ReviewPage/extebdedcaroysel.css'
import '../styles/Reviews/ReviewPage/imegelayout.css'
import '../styles/Reviews/ReviewPage/reviewpage.css'
// Reviews topbar
import '../styles/Reviews/topbar/serch.css'
import '../styles/Reviews/topbar/topbar.css'
// Context
import { SessionProvider } from "next-auth/react"
import { FavoritesContext , ReviewSidebarWidthContext } from '../util/Context/Context'

function MyApp({ Component, pageProps : { session , ...pageProps } }) {  
      
      const [isCollapsed, setIsCollapsed] = useState(false)

      return (
        <SessionProvider session={session}>
        
        <ReviewSidebarWidthContext.Provider value={[isCollapsed, setIsCollapsed] }>
           <Component {...pageProps} />  
        </ReviewSidebarWidthContext.Provider>

        </SessionProvider>
         )
    }
    export default MyApp