import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';


const NavMenu = () => {
  return (
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

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

// eslint-disable-next-line react/display-name


export default NavMenu;