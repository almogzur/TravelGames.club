
import Image from "next/image"

 const ImageLayout = ({mainPhoto}) =>{

   const componenyStyle = {}

return (

       <div  className='imegelayout' >
          <Image
             alt=""
             fill
             style={{objectFit: "contain"}}
             loading='lazy'
             src={mainPhoto}
           />   
       </div>
     

)

}
export default ImageLayout