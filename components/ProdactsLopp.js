import { useEffect } from "react"
import { builder ,BuilderComponent } from '@builder.io/react';
import Image from "next/image";



export default function PostLoop({prodacts}){

    useEffect(()=>{
        console.log(prodacts)
    },[prodacts])



  return(  
    
        prodacts.map((prodact,i)=>{
          return(
            <div key={prodact.name} className="box-container">
                 <div key={i} className="card">
                     <div className="card-header">
                     <Image src={prodact.data.mainImg} width={200} height={200} alt=""/>
                     </div>
                      <div className="card-body">
                      <h2>{prodact.data.publicOn}</h2>
                      <p>{prodact.data.introduction}</p>
                      
                     </div>
            </div>
         </div>
            )
  })
  )
}