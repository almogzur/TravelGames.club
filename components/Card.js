import Image from "next/image";
import Link from "next/link";


export default function  Card  ({ review }) {
    return( 
      <Link style={{all:"unset"}}  href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
            <Image loading="lazy" src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h2 style={{marginTop:"-10px"}}>{review.data.name}</h2>  
            <p style={{marginTop:"-10px" , padding:"10px"}}>{review.data.cardtext}</p> 
         </div>    
      </div>
      </Link>
              )
  }

