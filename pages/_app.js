import '../styles/glob.css'
import '../styles/categotybar.css'
import '../styles/cardswrapper.css'
import '../styles/footer.css'
import '../styles/imegelayout.css'
import '../styles/reviewpage.css'
import '../styles/header.css'
import '../styles/extebdedcaroysel.css'
import '../styles/cardwrapperheadline.css'
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
         </SessionProvider>)
    }
    export default MyApp