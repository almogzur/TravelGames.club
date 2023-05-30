'use client'
import  {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import CircumIcon from "@klarr-agency/circum-icons-react"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 0 : 0,
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
      x: direction < 0 ? 0 : 0,
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


return (
     <AnimatePresence initial={"enter"} >
       <div tabIndex={1} className='gallerywrapeer' onClick={upClick}>
          <motion.img 
            height={500}
            width={500}
             key={currentPhoto}
             src={photos[currentPhoto]}
             variants={variants}
             initial="enter"
             animate="center"
             exit="exit"
             transition={{
                  x: { type: "spring", stiffness: 50, damping: 5 },
                  opacity: { duration: 0.5 },
                  zIndex:0
               }}
           /> 
       </div>
       <div style={{textAlign:"center"}}>Press On The Photo </div>
   </AnimatePresence>
)

}