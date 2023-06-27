import Image from "next/image";
import Link from "next/link";
import CircumIcon from '@klarr-agency/circum-icons-react'
import { PageWidthContext } from "../../util/Context/Context";
import { useEffect, useState , useContext } from 'react';

export default function  Card  ({ review }) {
   
   const {xl,md,sm} = useContext(PageWidthContext) 

    return( 
      <Link  href={`/reviews/${review.name}`}>
       <div  className="card" 
         key={review.data.name}  
         style={
             xl && md && sm ?  
              {
               width:"160px",
               height:"300px",
               backgroundColor:" #fff",
               overflow: "hidden",
               transition:" all .2s ease-in-out",
               boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
               margin:"5px"
             }
            :
            xl && md ?{
            margin:"9px",
            width:"280px",
            height:"300px",
            backgroundColor:" #fff",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
            
            }
            :
            xl?{
              margin:"20px",
            width:"250px",
            height:"400px",
            backgroundColor:" #fff",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
            borderEadius:"15px",

            }
            :{
            margin:"20px",
            width:"250px",
            height:"400px",
            backgroundColor:" #fff",
            overflow: "hidden",
            transition:" all .2s ease-in-out",
            boxShadow: "0 3px 30px rgba(0, 0, 0, 0.6)",
            borderEadius:"15px",
            }
            }
      >
         <div className="card-header"
         style={
         xl && md && sm ? 
         {
         
         } 
         :
         xl && md ? 
         {
            
         }
         :
         xl?
         {
       
         }
         :
         {
         
         
         }
         }
         >
          <Image 
            priority
            src={review.data.mainImg} 
            width={
               xl && md && sm ? 
               150
               :
               xl && md ? 
               150
               :
               xl?
               250
               :
               250
               }
            height={
               xl && md && sm ? 
               150
               :
               xl && md ? 
               150
               :
               xl?
               250
               :
               250
               } 
            alt=""
            style={{ objectFit: "fill"}}
            />
         </div>
         <div className="card-body"
         style={
            xl && md && sm ? 
         {

         }
         :
         xl && md ? 
         {}
         :
         xl?
         {}
         :
         {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         padding: "10px",
         minHeight: "200px",
         }
         }
         >
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p>  
         </div>    
      </div>
      </Link>
     )}


 
 