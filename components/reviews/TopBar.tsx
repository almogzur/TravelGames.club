
import Link  from "next/link";
import Head from "next/head"; 
import {useState , useEffect , useContext} from "react"
import Serch from 'components/Global/serch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // package
import { faBookBookmark, faCubesStacked, faRankingStar, faShop } from '@fortawesome/free-solid-svg-icons' // icons 
import { PageWidthC } from "context/context";
import CustomH1 from "./CustomH1";

// render if the PagewWidth is > ml

export default function ReviewsTopBar({
    reviews,
    category 
    }:any)
    {
      const [diplayState,setDisplaystate] :any = useContext(PageWidthC) 
    
    return ( 
      
        <div 
        style={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            height:"200px"
        }}>
         <div  className="topbar-icons" style={{color:"#3f72af"}}>
 

         <FontAwesomeIcon style={{margin:"10px"}} height={30} width={30} icon={faCubesStacked} />
         <FontAwesomeIcon style={{margin:"10px"}} height={30} width={30} icon={faBookBookmark} />   
         <FontAwesomeIcon style={{margin:"10px"}} height={30} width={30} icon={faRankingStar} />     
         <FontAwesomeIcon style={{margin:"10px"}} height={30} width={30} icon={faShop} />
         </div>
          <Serch reviews={reviews} inTopbar={true} />
          <CustomH1 category={category} />
       </div>

        )

}