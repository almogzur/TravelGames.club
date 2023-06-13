/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LogunBtn() {

  const { data: session } = useSession()

 useEffect(()=>{
  session? console.log(session):null
 },[session])

  if (session) {
  
 return (
      <>
        <br />
        <Image  src={session.user.image} height={25} width={25} style={{borderRadius:"15px"}} alt=""/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div >
      <button onClick={() => signIn()}>Sign in</button>
      Not signed in
      <br />
    </div>
  )
}