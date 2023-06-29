import Image from "next/image";
import Link from "next/link";
import CircumIcon from '@klarr-agency/circum-icons-react'
import { PageWidthContext } from "../../util/Context/Context";
import { useEffect, useState , useContext } from 'react';

export default function  Card  ({ review }) {
   
   const [diplayState,setDisplaystate]= useContext(PageWidthContext) 
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
               height:"300px",
               backgroundColor:" #fff",
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
             }
             :
             diplayState === "desk" ?
             {
            margin:"7px",
            width:"250px",
            height:"400px",
            backgroundColor:" #fff",
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
            backgroundColor:" #fff",
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
       diplayState=== "mob" ?  // mon
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
            :
       diplayState=== "tab" ?  // mon
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
            :
       diplayState=== "desk" ?  // mon
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


 
 