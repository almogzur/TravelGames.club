import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import ImageLayout from './ImageLayout'
import { useContext, useState } from "react";
import Link from "next/link";
import {PageWidthContext} from "context/context"

import Carousel from "./Carousel";
import { useMediaQuery } from "usehooks-ts";



/* Data Schema
name 
headline 
subhadline 
intro 
publicOn 
body 
mainimg 
photos 
pepole asmk
call to action
relayed
catgory:""
discount:""
stars:""
link:""
price :""
*/
export default function ProdactPage({ review }:any ) {

 const [ data ] = useState(review.data)
 const photos = data.photos[0]
 const [ mainPhoto , setMainPhoto ] = useState(data.mainImg)
 
 const pageWidth = useContext(PageWidthContext) 

 const xl = useMediaQuery('(max-width: 1200px)')
 const md = useMediaQuery('(max-width: 900px)')
 const sm = useMediaQuery('(max-width: 600px)')

//  console.log(photos)
    return (
       <div className="MainDiv" >
          <div className= "Section">
            <div className="PageHeader">
            <h1>{data.name.toUpperCase()}</h1>
            </div>
          <div className="Subhade">
          <h2>{data.subhadline}</h2>
       </div>
         <div className="MainWrapper">         
           <div className="SectionWrapper" >
              <div className="ColumnA" >
                <div className="ColumnAWrapper">
                   <ImageLayout mainPhoto={mainPhoto} />
                   <div className="DieatelsWrapper">
                      <Carousel  photos={photos} setMainPhoto={setMainPhoto}/>
                      <div className="ProdactDieatels">
                          <p>12 {data.discription}</p>
                      </div>
                      <div className="LinkDiv">
                      <p>{data.link}</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="ColumnB" >
                <div className="IntroWrapper">
                  <div className="Intro">
                    <p>{data.intro}</p>
                  </div>
                </div>
                <div className="ProdactheadLine">
                  <p>{data.headline}</p>
                </div>
                <div className="SubHading">
                  <p>{data.subhadline}</p>
                </div>
                <div className="ArticalBody">
                  <p>
                    {data.body}
                  </p>
                </div>
                <Link
                   className="Button"
                   href={data.link}>
                    {data.callToAction}
                    </Link>
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  } 
 