import { useState } from 'react'
//Global 
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/glob.css'
// Profile
import '../styles/Profile/profilepage.css'
import '../styles/Profile/profilesidebar.css'
//ReviewPage 
import '../styles/Reviews/ReviewPage/extebdedcaroysel.css'
import '../styles/Reviews/ReviewPage/imegelayout.css'
import '../styles/Reviews/ReviewPage/reviewpage.css'
//Reviews
import '../styles/Reviews/reviewssidebar.css'
import '../styles/Reviews/cardswrapper.css'
import '../styles/Reviews/cardwrapperheadline.css'
import '../styles/Reviews/reviewssidebar.css'
// Context
import { SessionProvider } from "next-auth/react"
import { FavoritesContext , ReviewSidebarWidthContext } from '../util/Context/Context'

function MyApp({
          Component, 
          pageProps:{session, ...pageProps},
          }) 
           {  
      const [isCollapsed, setIsCollapsed] = useState(false)

      return (
        <SessionProvider session={session}>
        <FavoritesContext.Provider  >
        <ReviewSidebarWidthContext.Provider value={[isCollapsed, setIsCollapsed] }>
           <Component {...pageProps} />  
        </ReviewSidebarWidthContext.Provider>
        </FavoritesContext.Provider>
        </SessionProvider>
         )
    }
    export default MyApp