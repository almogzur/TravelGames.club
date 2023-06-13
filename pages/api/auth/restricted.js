import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

 const hendler = async (req, res) => {
    
  const session = await getServerSession(req, res, authOptions)
  
  if (session) {
     res.redirect(200, '/profile')
    
  } else {
    res.redirect('/')
  }
}
export default hendler