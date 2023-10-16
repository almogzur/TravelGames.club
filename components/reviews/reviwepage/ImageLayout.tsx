import Image from "next/image"
import { useState } from "react"

 const ImageLayout = ({mainPhoto}) =>{

const [isClick , setIsClick] = useState(0)

const clickHendler = (e) =>{
      console.log(e)
}

return (
       <div  className='imegelayout' >
          <Image
             alt=""
             fill
             style={{objectFit: "contain" }}
             loading='eager'
             src={mainPhoto}
             onClick={(e)=>clickHendler(e)}
           />   
       </div>
     

)

}
export default ImageLayout