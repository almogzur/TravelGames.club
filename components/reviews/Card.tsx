import Image from "next/image";
import Link from "next/link";
//import CircumIcon from '@klarr-agency/circum-icons-react'
import type { PageWidthT } from "context/context";
import { PageWidthC , } from "context/context";
import { useEffect, useState , useContext } from 'react';

export default function  Card  ({ review }) {
   
   const [ diplayState, setDisplaystate ] = useContext<PageWidthT>({width:""}) 
   const [fortyFiveViewUnits,setFortyFiveViewUnits] = useState(0)

    useEffect(()=>{
      const getFortyFiveVw = () => {
       setFortyFiveViewUnits ('45vw');
     };
     getFortyFiveVw()
  
   },[])

   const cardStyle =  
             diplayState=== "mob" ?  // mon
             {
               width:fortyFiveViewUnits,
               height:"350px",
               backgroundColor:" #fefefe",
               overflow: "hidden",
               transition:" all .2s ease-in-out",
               boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
               margin:"5px",
             }
             :
             diplayState === "tab" ?
             { 
            margin:"9px",
            width:fortyFiveViewUnits,
            height:"400px",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",   
            backgroundColor:" #fefefe",

             }
             :
             diplayState === "desk" ?
             {
            margin:"7px",
            width:"250px",
            height:"400px",
            backgroundColor:" #fefefe",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
            borderEadius:"15px",
             }
             :
             { 
            margin:"10px",
            width:"250px",
            height:"400px",
            backgroundColor:" #fefefe",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
            borderEadius:"15px",
 }

    return( 
      <Link  href={`/reviews/${review.name}`}>
        <div  className="card" 
          key={review.data.name}  
          style={cardStyle}
          >
         <div className="card-header">
          <Image 
            priority
            src={review.data.mainImg} 
             alt=""
             height={150}
             width={150}
            style={{ width: '100%' , objectFit:"scale-down", }} // optional
            />
         </div>      
         {       
       diplayState=== "mob" ?  
       <div className="card-body" 
              style={{lineHeight:"20px"}} 
              >
               <h2 
               style={{margin:"5px"}} 
               >{review.data.name.slice(0,19)+"..."}
               </h2>
               <p style={{ marginLeft:"5px",height:"25px" ,lineHeight:"15px", overflowWrap:" break-word"}}>{review.data.intro.slice(0,50)+"..."}</p>
               <h3 style={{paddingTop:"20px",textAlign:"center"}}>{review.data.price+" $"}</h3>
               <div className="cat-tag"
               style={{
                height:"20px",
                width:"100px",
                background:"#3f72af",
                borderRadius:"10px",
                color:"#DBE2EF",
                marginLeft:"5px",
                textAlign:"center",
                position:"relative",
                left:"15%",
                margin:"-10px",
                }}
               >{review.data.category}
            </div>
      </div>
            :
       diplayState=== "tab" ?  
       <div className="card-body" style={{textAlign:"center"}} >
               <h2 
                 style={{textAlign:"center",}} 
               >
               {review.data.name.slice(0,20)+"..."}
               </h2>
               <p 
                 style={{height:"45px"}}
               >
                 {review.data.intro.slice(0,100)+"..."}
               </p>
               <h3 
                 style={{marginLeft:"7px"}}
               >
                 {review.data.price+" $"}
               </h3>
             <div 
               style={{
                height:"20px",
                width:"100px",
                background:"#3f72af",
                borderRadius:"10px",
                color:"#DBE2EF",
                textAlign:"center",
                  position:"relative",     
                  left:"35%"       
                }}
               >
               {review.data.category}
            </div>
        </div>
            :
       diplayState=== "desk" ?  
       <div className="card-body" 
        style={{lineHeight:"15px"}} 
       >
          <h2  style={{textAlign:"center",}} >{review.data.name.slice(0,15)+"..."}</h2>
          <p style={{marginLeft:"5px"}}>{review.data.intro.slice(0,100)+"..."}</p>
          <h3 style={{marginLeft:"7px"}}>{review.data.price+" $"}</h3>
          <div 
            style={{
               height:"20px",
               width:"100px",
               background:"#3f72af",
               borderRadius:"10px",
               color:"#DBE2EF",
               marginLeft:"5px",  
             }}
               >{review.data.category}
            </div>
       </div>
            :
       <div className="card-body" 
              style={{lineHeight:"15px"}} 
              >
               <h2 
               style={{textAlign:"center",}} 
               >{review.data.name.slice(0,15)+"..."}
               </h2>
               <p style={{marginLeft:"5px",height:"45px"}}>{review.data.intro.slice(0,100)+"..."}</p>
               <h3 style={{marginLeft:"7px"}}>{review.data.price+" $"}</h3>
             <div 
               style={{
                height:"20px",
                width:"100px",
                background:"#3f72af",
                borderRadius:"10px",
                color:"#DBE2EF",
                marginLeft:"5px",
              
                }}
               >{review.data.category}
            </div>
        </div>
         } 
        </div>    
      
      </Link>
     )}


 
 