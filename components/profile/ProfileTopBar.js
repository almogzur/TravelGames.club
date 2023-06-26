import { useState, useEffect,useContext  } from "react";
import Link from "next/link";
import {   PageWidthContext } from "../../util/Context/Context"

export default function ProfileTobBar({}){
    
    const pageWidth = useContext(PageWidthContext) 
    const xl = pageWidth.xl
    const md = pageWidth.md
    const sm = pageWidth.sm

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