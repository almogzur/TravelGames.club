import { useEffect } from "react"
import Card from './Card'

export default function CardsWrapper({reviews, category}){

    useEffect(()=>{
        console.log( reviews)
    },[reviews])

 return (
 
       <div className="cards-wrapper">     
          {
            reviews.map((review,i)=>{
            return <Card  key={i} review={review}  />
          })
          }
       </div>
   
  )
  
    

  
}


