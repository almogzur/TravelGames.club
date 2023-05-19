import { useEffect, useState } from "react"
import { builder ,BuilderComponent } from '@builder.io/react';
import Footer from "../components/Footer";
import Card from './Card'

export default function PostLoop({prodacts}){

   const [isActive,setIsActive]=useState(false)

    useEffect(()=>{
        console.log(prodacts)
    },[prodacts])

return <>
  { !isActive?
    <>
    <BuilderComponent model="page"/>
    <div className="box-container">
      {prodacts.map((prodact,i)=>{
       return <Card  key={i} prodact={prodact} setIsActive={setIsActive} />
      })}
    </div>
    <BuilderComponent model="page"/>
    <Footer/>
    </>
    :isActive
}
</>
  
  
}


