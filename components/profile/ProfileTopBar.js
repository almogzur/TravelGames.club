import { useState, useEffect,useContext  } from "react";
import Link from "next/link";
import {   PageWidthContext } from "../../util/Context/Context"

export default function ProfileTobBar({}){
    
  const {xl,md,sm} = useContext(PageWidthContext) 

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