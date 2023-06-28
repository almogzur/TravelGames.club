import { useEffect, useContext } from "react"
import { IsCollapsedContext ,  PageWidthContext } from "../../util/Context/Context"
import Card from './Card'

export default function CardsWrapper({reviews, category}){

  const [isCollapsed, setIsCollapsed] = useContext(IsCollapsedContext)

  const {xl,md,sm} = useContext(PageWidthContext) 

    useEffect(()=>{
        console.log( xl,md,sm)
    },[md, sm, xl])

 return (
       <div className="cards-wrapper"
        style={ 
           xl && md && sm ? //mob
           {
            position:"absolute",
            position:"absolute",
            top:"250px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            width:"100%",
            

           } 
           :
           xl && md ?  // tab
           {  
            position:"absolute",
            top:"250px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            width:"100%",
        
           }
           :
           xl ?// desk
           { 
            position:"absolute",
            top:"100px",
            left:isCollapsed? "80px" : "250px",
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
            left:isCollapsed? "80px" : "250px",
            transition:"ease 1s",
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


