import { useEffect } from "react";

function CustomH1({category}) { 

useEffect(()=>{
  //console.log(category , "profile h1")
})

  const handelText = (Cat) => {
     switch(Cat){
      case "TGA" :  return "Travel Gear and Accessories" ; 
      break;
      case "TG" : return  "Tech and Gadgets" ; 
      break;
      case "OAE" : return   "Outdoor and Adventure Equipment" ; 
      break; 
      case "TBG" : return   "Travel Books and Guides"
      break;
      default : return "All Reviews"
     }

  }

    return (
        <h3 className="cardwrapperheadline" >{handelText(category)}</h3>
      );
}

export default CustomH1;