
auth intgration 

Added with next auth 

Npm i next-auth 

Created files and changes 

* pages/api/auth  // 
[...nexyAuth].js // confing the auth providers and drivers this project use mongo-driver 
restricted.js // chake if user sessone and return from api 

* /util
db.js for saving providers loging in mongo // driver made by next to use in mongo case 

* /components
default login button 
LoginBtn

* _app.js
 wrapping the app in the sesson context 

* function MyApp({
       Component, 
       pageProps:{session, ...pageProps},
       }) {   
      return (
        < SessionProvider session={session} >
         < Component {...pageProps} />  
         < /SessionProvider > )
    }


* Setup NEXTAUTH_URL=https://example.com 
 in dev to localhost 
 in prd tp domain

