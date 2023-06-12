import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function LogunBtn() {

  const { data: session } = useSession()

  if (session) {
    console.log(session)
    return (
      <>
        <br />
        <Image src={session.user.image} height={25} width={25} style={{borderRadius:"15px"}} alt=""/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}