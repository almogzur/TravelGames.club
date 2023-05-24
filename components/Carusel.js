'use client'
import  {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react'
import CircumIcon from "@klarr-agency/circum-icons-react"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : 0,
      opacity: 0
    };
  }
};

// accept array of photos 

export default function Gallery ({photos}){

const objLength = Object.entries(photos).length

  const [ currentPhoto , setCurrentPhoto ] = useState(1)


  const upClick = () => { 
    setCurrentPhoto(currentPhoto < objLength ? currentPhoto + 1 : 1 ) 
  }

useEffect(()=>{

    

  },[])

return (
<>
   <AnimatePresence initial={"enter"} >
     <div className=''>
        <div className=''>
        
          <motion.img 
             key={currentPhoto}
             src={photos[currentPhoto]}
             style={{  borderRadius:"0px" , width:"30vw"}}
          
             variants={variants}
             initial="enter"
             animate="center"
             exit="exit"
             transition={{
                  x: { type: "spring", stiffness: 100, damping: 50 },
                  opacity: { duration: 1 },
                  zIndex:0
               }}
          /> 
        </div>
     
     </div>
   </AnimatePresence>
   <button className = "btnleft" onClick = { upClick } > left</button>
</>

)

}