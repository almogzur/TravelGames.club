'use client'
import  {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import CircumIcon from "@klarr-agency/circum-icons-react"


const variants = {
  enter: () => {
    return {
      opacity: 0
    };
  },
  center: {
    opacity: 1
  },
  exit: () => {
    return {
      opacity: 0
    };
  }
};

// accept array of photos 

export default function ImageLayout ({mainPhoto}){

return (
       <div tabIndex={1} className='gallerywrapeer' >
          <motion.img 
             loading='lazy'
             height={500}
             width={500}
             src={mainPhoto}
             variants={variants}
             initial="enter"
             animate="center"
             exit="exit"
             transition={{ opacity: { duration: 1 }}}
           />   
        <div className='photoText' >Press On The Photo </div>
       </div>
     

)

}