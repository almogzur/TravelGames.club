
import Image from "next/image"
export default function ImageLayout ({mainPhoto}){
return (
       <div  className='imegelayout'>
          <Image
             alt=""
             fill 
             style={{objectFit: "contain"}}
             loading='lazy'
             src={mainPhoto}
             transition={{ opacity: { duration: 1 }}}
           />   
       </div>
     

)

}