import { useState, useEffect,useContext  } from "react";
import Link from "next/link";
import {   PageWidthC } from "context/context"

export default function ProfileTobBar({}){
    
  const {xl,md,sm}:any = useContext(PageWidthC) 

    return (
        xl && md && sm ?   // mob
        <div>

        </div>
        :
        xl && md ?  // tab
        <div>

        </div>
        :
        xl ?  // desk
         <div>

         </div>   
        : // desk and up
        <div>

        </div>

      )
}