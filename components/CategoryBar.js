
// the nav bar set the vale of state.catagory 
// then in index.js get sort by state 
// then pass to loop 
// if catgory == null all reviews shows
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

 function CategoryBar ({setCategory} ){

 /* -- Categoty sort names --
Outdoor and Adventure Equipment:  OAE
Travel Gear and Accessories: TGA
Tech and Gadgets: TG
Travel Books and Guides: TBG
*/
    const click = (e)=>{
     
      switch(e.target.innerText){
        case "Travel Gear and Accessories" : setCategory("TGA") ; 
         break;
        case "Tech and Gadgets" : setCategory("TG") ;
         break;
        case "Outdoor and Adventure Equipment": setCategory("OAE") ; 
         break;
        case "Travel Books and Guides": setCategory("TBG") ;
         break; 
        case "All": setCategory(false); 
        break;
        default : throw new Error("no category value")
      }
    }
return (
 
    <NavigationMenu.Root className="NavigationMenuRoot" >
      
     <NavigationMenu.List className="NavigationMenuList">

        <NavigationMenu.Item >
         <NavigationMenu.Link   onClick={(e)=>click(e)} value={"TGA"}  className="NavigationMenuLink nav_link"  >
           Travel Gear and Accessories
         </NavigationMenu.Link>
        </NavigationMenu.Item>


   <NavigationMenu.Item>
     <NavigationMenu.Link onClick={(e)=>click(e)} value={"TG"} className="NavigationMenuLink nav_link"  >
      Tech and Gadgets 
     </NavigationMenu.Link>
    </NavigationMenu.Item>

  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)} value={"OAE"}  className="NavigationMenuLink nav_link" >
   Outdoor and Adventure Equipment
   </NavigationMenu.Link>
  </NavigationMenu.Item>

  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)} value={"TBG"} className="NavigationMenuLink nav_link" >
   Travel Books and Guides
   </NavigationMenu.Link>
  </NavigationMenu.Item>


  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)} value={"All"} className="NavigationMenuLink nav_link" >
  All
   </NavigationMenu.Link>
  </NavigationMenu.Item>

     </NavigationMenu.List>

  
    </NavigationMenu.Root>
  
)
}

export default CategoryBar