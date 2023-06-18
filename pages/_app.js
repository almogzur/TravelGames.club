//Global 
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/glob.css'

// Profile
import '../styles/Profile/profilepage.css'

//ReviewPage 
 
import '../styles/Reviews/ReviewPage/extebdedcaroysel.css'
import '../styles/Reviews/ReviewPage/imegelayout.css'
import '../styles/Reviews/ReviewPage/profilesidebar.css'
import '../styles/Reviews/ReviewPage/reviewpage.css'

//Reviews

import '../styles/Reviews/cardswrapper.css'
import '../styles/Reviews/cardwrapperheadline.css'

import '../styles/Reviews/reviewssidebar.css'







import { SessionProvider } from "next-auth/react"

 /* -- Categoty Sort Names --
Outdoor and Adventure Equipment:  OAE
Travel Gear and Accessories: TGA
Tech and Gadgets: TG
Travel Books and Guides: TBG
*/
    function MyApp({
       Component, 
       pageProps:{session, ...pageProps},
       }) {   
      return (
        <SessionProvider session={session}>
           <Component {...pageProps} />  
        </SessionProvider>
         )
    }
    export default MyApp