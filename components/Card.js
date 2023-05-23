import Image from "next/image";
import Link from "next/link";

export default function  Card  ({ review }) {
   
    return( 
      <Link href={`/reviews/${review.name}`}>
      <div  key={review.data.name} className="card" >
         <div className="card-header">
            <Image loading="lazy" src={review.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h6>{new Date(review.data.publicOn).toISOString()}</h6>
            <p>{review.data.introduction}</p>   
         </div>      
      </div>
    </Link>
              )
  
  }

