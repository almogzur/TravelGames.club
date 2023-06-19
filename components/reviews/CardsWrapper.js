import { useEffect, useContext } from "react"
import { ReviewSidebarWidthContext } from "../../util/Context/Context"
import Card from './Card'




export default function CardsWrapper({reviews, category}){

  const [isCollapsed, setIsCollapsed] = useContext(ReviewSidebarWidthContext)


    useEffect(()=>{
        console.log( reviews)
    },[reviews])

 return (
 
       <div className="cards-wrapper"
        style={{
          left:isCollapsed? "100px" : "250px"
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


