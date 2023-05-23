import { useEffect, useState } from "react"
import { builder ,BuilderComponent } from '@builder.io/react';
import Footer from "./Footer";
import Card from './Card'



export default function ReviewsLoop({reviews}){

    useEffect(()=>{
        //console.log(reviews)
    },[reviews])

return <div className="box-container">
          {
            reviews.map((review,i)=>{
            return <Card  key={i} review={review} />
          })
          }
       <Footer/>
    </div>
  
    

  
}


