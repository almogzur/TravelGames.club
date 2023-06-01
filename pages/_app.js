// root level component for feeding next width the style modles 

import '../styles/glob.css'
import '../styles/categotybar.css'
import '../styles/card.css'
import '../styles/footer.css'


    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp