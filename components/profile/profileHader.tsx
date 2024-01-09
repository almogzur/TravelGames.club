import {   PageWidthC } from "../../context/context"
import { useContext } from "react"
import { useSession, signIn, signOut } from "next-auth/react"


function ProfileHeader ({isCollapsed}) {

   const {xl,md,sm} = useContext(PageWidthC) 

   const style = { 
      width:"100%",
      position:"absolute",
      left: isCollapsed ? 80 : 250,
      textAlign:"center"
   }
    const { data: session } = useSession()
         return (
         xl && md && sm ? 
          <div className="welcome" style={style}>
         {
            session? `Welcome Back ${session.user.name}` : null
         } 
         </div>
         :
         xl && md ?  
         <div className="welcome" style={style}>
         {
            session? `Welcome Back ${session.user.name}` : null
         } 
         </div>
         :
         xl?  
         <div className="welcome" style={style}>
         {
            session? `Welcome Back ${session.user.name}` : null
         } 
         </div>
         :
         <div className="welcome" style={style}>
         {
            session? `Welcome Back ${session.user.name}` : null
         } 
         </div>
      )
}

export default ProfileHeader