import { useEffect, useContext } from "react"
import { ReviewSidebarWidthContext } from "../../util/Context/Context"
import Card from './Card'
import { useMediaQuery } from 'usehooks-ts'



export default function CardsWrapper({reviews, category}){

  const [isCollapsed, setIsCollapsed] = useContext(ReviewSidebarWidthContext)
  const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')


    useEffect(()=>{
       // console.log( reviews)
    },[reviews])

 return (
 
       <div className="cards-wrapper"
        style={{
          left:isCollapsed? "100px" :PagewidthIsLessThen? "100px" :"250px"

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


