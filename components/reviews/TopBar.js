
import Link  from "next/link";
import Head from "next/head"; 
import {useState , useEffect , useContext} from "react"
import Serch from '../Global/serch'
import CircumIcon from '@klarr-agency/circum-icons-react'
import CustomH1 from '../../components/reviews/CustomH1'
import { PageWidthContext } from "../../util/Context/Context";

export default function ReviewsTopBar({
    reviews,
    category 
    })
    {
      const [diplayState,setDisplaystate] = useContext(PageWidthContext) 
    
    return ( 
      
        <div 
        style={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            height:"200px"
        }}>
         <div  className="topbar-icons">
           <CircumIcon name="bookmark"/>
           <CircumIcon name="grid_4-1"/>
           <CircumIcon name="star"/>
         </div>
          <Serch reviews={reviews} inTopbar={true} />
          <CustomH1 category={category} />
       </div>

        )

}