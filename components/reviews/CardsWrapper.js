import { useEffect, useContext } from "react"
import { ReviewSidebarWidthContext , SerchBarlocatonContaxt , PageWidthContext } from "../../util/Context/Context"
import Card from './Card'
import { useMediaQuery } from 'usehooks-ts'

export default function CardsWrapper({reviews, category}){

  const [isCollapsed, setIsCollapsed] = useContext(ReviewSidebarWidthContext)
  const [serchBarLocation , setSerchBarLocation] = useContext(SerchBarlocatonContaxt)
  const pageWidth = useContext(PageWidthContext) 
  const xl = pageWidth.xl
  const md = pageWidth.md
  const sm = pageWidth.sm

    useEffect(()=>{
        console.log( pageWidth)
    },[pageWidth])

 return (
 
       <div className="cards-wrapper"
        style={ //mob
           xl && md && sm ?
           {
            left:"15px",
            "top": "200px"
           } 
           :
           xl && md ?  
           {  // tab
            left: isCollapsed? "80px":"250px",
            transition:"ease 1s",
            background:"green"
           }
           :
          xl ?
           { // desk
            
            }
           : // desk and up
           {

           }
           }
          >     
          {
            reviews.map((review,i)=>{
            return <Card  key={i} review={review}  />
          })
          }
       </div>
   
  )
  
    

  
}


