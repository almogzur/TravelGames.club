/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function ProfileControls() {

 const  style =  {borderRadius:"10px"}
  const { data: session } = useSession()

 useEffect(()=>{
  session? console.log(session):null
 },[session])

return( 
   session? 
   <>
    <Link 
      className="controls-link" 
      href={"/profile"}
      >Profile
    </Link>
    <div className="usercontrols" 
      tabIndex={1} 
      onClick={() => signOut()} 
      >
       <span style={{marginBottom:"3px"}}>Sign Out</span>
        <Image 
         src={session.user.image} 
         height={30}
         width={30} 
         alt=""
         style={style}
        />
    </div>
    </>
   :
   <div className="usercontrols" 
    tabIndex={1} 
    onClick={() => signIn()} 
    >
     Sign In
    </div>
  
)
}