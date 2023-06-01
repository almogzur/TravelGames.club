import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import Carusel from './Carusel'
import { useState } from "react";

/* Data Schema
name √
headline √
subhadline √
intro √
publicOn 
body √
mainimg √
photos 
pepole asmk
call to action
relayed
catgory
discount
stars
link
price
*/
export default function ProdactPage({ review }) {
 const [ data  ] = useState( review.data)
  const photos = data.photos
//  console.log(photos)
    return (
       <div className="MainDiv" maxWidth={1200}>
          <div className= "Section">
            <div className="PageHade">
            <h1>{data.name.toUpperCase()}</h1>
            </div>
          <div className="Subhade">
          <h2>{data.subhadline}</h2>
       </div>
         <div className="MainWrapper">         
           <div className="SectionWrapper" >
              <div className="ColumnA" >
                <div className="ColumnAWrapper">
                   <Carusel photos={photos[0]} />
                   <div className="DieatelsWrapper">
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
                <button className="Button">{data.callToAction}</button>
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  } 
 