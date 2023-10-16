"use client"
import { useEffect, useContext, Key } from "react"
import { IsReviewSideBarCollapsedContext ,  PageWidthContext } from "../../context/context"
import Card from './Card'
import { Props, ScriptProps } from "next/script"

export default function CardsWrapper({reviews, category}:any){

  const [isReviewSideBarCollapsed, setIsReviewSideBarCollapsed] = useContext(IsReviewSideBarCollapsedContext)
  const [diplayState,setDisplaystate] = useContext(PageWidthContext) 



 return (
       <div className="cards-wrapper"
        style={ 
          diplayState=== "mob" ?  // mon
           {
            position:"absolute",
            top:"250px",
            left:"7px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            
           } 
           :
           diplayState === "tab" ?
           {  
            position:"absolute",
            top:"250px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
           }
           :
           diplayState === "desk" ?
           { 
            position:"absolute",
            top:"100px",
            left:isReviewSideBarCollapsed? "80px" : "255px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            transition:"ease 1s",
       
           }
           : // desk and up 
           {
            position:"absolute",
            top:"100px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            left:isReviewSideBarCollapsed? "80px" : "255px",
            transition:"ease 1s",
           }
           }
          >     
          {
            reviews.map((review: any,i: Key | null | undefined)=>{
            return <Card  key={i} review={review}  />
          })
          }
       </div>
   
  )
  
    

  
}


