import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const NavMenu = () => {
  return (
   <div style={{width:"100vw",background:"#e8e9e4"}}>
    <NavigationMenu.Root className="NavigationMenuRoot">

       <NavigationMenu.List className="NavigationMenuList">
       
         <NavigationMenu.Item>
      
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="/">
            Home
            
          </NavigationMenu.Link>
          
         </NavigationMenu.Item>
         <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="/reviews">
            Reviews
          </NavigationMenu.Link>
         </NavigationMenu.Item>
         <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="/about">
            About
          </NavigationMenu.Link>
         </NavigationMenu.Item>

       </NavigationMenu.List>

    </NavigationMenu.Root>
    </div>
  );
};

// eslint-disable-next-line react/display-name


export default NavMenu;