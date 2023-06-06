function CustomH1({category}) { 

  const handelText = (Categoty) => {
     switch(Categoty){
      case "TGA" : return "Travel Gear and Accessories" ; 
      break;
      case "TG" : return "Tech and Gadgets" ; 
      break;
      case "OAE" : return "Outdoor and Adventure Equipment" ; 
      break; 
      case "TBG" : return "Travel Books and Guides"
      break;
      default : return "All Reviews"
     }

  }

    return (
        <h1 className="customh1" >{handelText(category)}</h1>
      );
}

export default CustomH1;