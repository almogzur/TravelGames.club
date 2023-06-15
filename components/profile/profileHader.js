import { useSession, signIn, signOut } from "next-auth/react"

function ProfileHeader ({isCollapsed}) {

   const style = { 
      width:"100%",
      position:"absolute",
      left: isCollapsed ? 80 : 250,
      textAlign:"center"
   }
    const { data: session } = useSession()
         return <div className="welcome" style={style}>{
            session? `Welcome Back ${session.user.name}` : null
      }</div>
}

export default ProfileHeader