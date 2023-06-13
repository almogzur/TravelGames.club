import { useSession, signIn, signOut } from "next-auth/react"

function ProfileHeader ( ) {

    const { data: session } = useSession()

 if(session){
   return <div className="welcome" >Welcome Back,{session.user.name}</div>
 }else{
    return <div className="welcome" >Hello Guest</div>
 }
}

export default ProfileHeader