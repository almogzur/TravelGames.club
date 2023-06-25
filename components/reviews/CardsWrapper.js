import { useEffect, useContext } from "react"
import { ReviewSidebarWidthContext , SerchBarlocatonContaxt } from "../../util/Context/Context"
import Card from './Card'
import { useMediaQuery } from 'usehooks-ts'

export default function CardsWrapper({reviews, category}){

  const [isCollapsed, setIsCollapsed] = useContext(ReviewSidebarWidthContext)
  const PagewidthIsLessThen = useMediaQuery('(max-width: 900px)')
  const [location , setLocation] = useContext(SerchBarlocatonContaxt)

    useEffect(()=>{
      //  console.log( isCollapsed)
    },[])

 return (
 
       <div className="cards-wrapper"
        style={ // mob
           PagewidthIsLessThen ? 
           {
            left:"15px",
            "top": "200px"
           } 

           :
           {  // desk
            left: isCollapsed? "80px":"250px",
            transition:"ease 1s"
           }}
          >     
          {
            reviews.map((review,i)=>{
            return <Card  key={i} review={review}  />
          })
          }
       </div>
   
  )
  
    

  
}


