
import Image from "next/image"
export default function ImageLayout ({mainPhoto}){
return (
       <div  className='gallerywrapeer' >
          <Image
             alt=""
             height={400}
             width={400}
             loading='lazy'
             src={mainPhoto}
             transition={{ opacity: { duration: 1 }}}
           />   
       </div>
     

)

}