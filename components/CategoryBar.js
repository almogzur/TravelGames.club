
// the nav bar set the vale of state.catagory 
// then in index.js get sort by state 
// then pass to loop 
// if catgory == null all reviews shows
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function CategoryBar ({category,setCategory} ){

    const click = (e)=>{
        console.log(e)
    }

return (
<NavigationMenu.Root className="NavigationMenuRoot">

 <NavigationMenu.List className="NavigationMenuList">

  <NavigationMenu.Item >
   <NavigationMenu.Link  onClick={(e)=>click(e)}  className="NavigationMenuLink nav_link"  >
   Travel Gear and Accessories:
   </NavigationMenu.Link>
  </NavigationMenu.Item>

  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)}  className="NavigationMenuLink nav_link"  >
   Tech and Gadgets
   </NavigationMenu.Link>
  </NavigationMenu.Item>

  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)}  className="NavigationMenuLink nav_link" >
   Outdoor and Adventure Equipment
   </NavigationMenu.Link>
  </NavigationMenu.Item>

  <NavigationMenu.Item>
   <NavigationMenu.Link onClick={(e)=>click(e)}  className="NavigationMenuLink nav_link" >
   Travel Books and Guides:
   </NavigationMenu.Link>
  </NavigationMenu.Item>

</NavigationMenu.List>

<div className="ViewportPosition">
 <NavigationMenu.Viewport className="NavigationMenuViewport" />
</div>
</NavigationMenu.Root>
)
}