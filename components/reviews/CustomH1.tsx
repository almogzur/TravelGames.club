import { useEffect , useContext , useState } from "react";
import {PageWidthContext} from "../../context/context"

function CustomH1({category}) { 

  const [diplayState,setDisplaystate] = useContext(PageWidthContext) 

  useEffect(()=>{
      //console.log(category , "profile h1")
   })

      const handelText = (Cat: string) => {
     switch(Cat){
      case "TGA" :   "Travel Gear and Accessories" 
      break;
      case "TG" :   "Tech and Gadgets" 
      break;
      case "OAE" :    "Outdoor and Adventure Equipment" 
      break; 
      case "TBG" :    "Travel Books and Guides"
      break;
      default :  "All Reviews"
     }

      }
  
      return (
        <h3 className="cardwrapperheadline" >{handelText(category)}</h3>
      );
}

export default CustomH1;