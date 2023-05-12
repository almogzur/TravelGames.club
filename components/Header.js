import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';


const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">

       <NavigationMenu.List className="NavigationMenuList">
       
         <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="/">
            Home
          </NavigationMenu.Link>
         </NavigationMenu.Item>


         <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="/store">
            Store
          </NavigationMenu.Link>
         </NavigationMenu.Item>

         <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink nav_link" href="reviews">
            Reviews
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
const ListItem = React.forwardRef(( {className, children, title, ...props }, forwardedRef) => (
  <li className=''>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
))

export default NavigationMenuDemo;