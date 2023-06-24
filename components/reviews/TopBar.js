import Link  from "next/link";
import Head from "next/head"; 
import {useState , useEffect , useContext} from "react"
import { useMediaQuery } from "usehooks-ts";
import Serch from "../../components/reviews/serch"


export default function TopBar({reviews}){
    
    return ( 
       <div className="topbar-wrapper" >
        <Serch reviews={reviews}/>
       </div>
        )

}