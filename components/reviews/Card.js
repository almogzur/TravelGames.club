import Image from "next/image";
import Link from "next/link";
import CircumIcon from '@klarr-agency/circum-icons-react'
import { PageWidthContext } from "../../util/Context/Context";
import { useEffect, useState , useContext } from 'react';

export default function  Card  ({ review }) {
   
   const pageWidth = useContext(PageWidthContext) 
   const xl = pageWidth.xl
   const md = pageWidth.md
   const sm = pageWidth.sm

    return( 
      xl && md && sm ? 
      <Link  href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
        
            <Image priority src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p> 
          
         </div>    
      </div>
      </Link>
      :
      xl && md ? 
      <Link  href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
        
            <Image priority src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p> 
          
         </div>    
      </div>
      </Link>
      :
      xl ?   
       <Link  href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
        
            <Image priority src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p> 
          
         </div>    
      </div>
      </Link>
      :
      <Link  href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
        
            <Image priority src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p> 
          
         </div>    
      </div>
      </Link>
              )
  }

