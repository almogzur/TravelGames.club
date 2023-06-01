import { useEffect, useState } from "react"
import Card from './Card'

export default function CardsWrapper({reviews}){

    useEffect(()=>{
     //   console.log( reviews)
    },[reviews])

 return (
       <div className="cards-wrapper">
          {
            reviews.map((review,i)=>{
              console.log(review,"cardsloop")
            return <Card  key={i} review={review} />
          })
          }
       </div>
  )
  
    

  
}


