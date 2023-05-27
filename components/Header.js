import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
const NavMenu = () => {
  return (
   <div style={{width:"100vw",background:"#e8e9e4", height:"70px"}}>
      <Link href={"/"}>Home</Link>
      <Link href={"/reviews"}>Reviews</Link>
      <Link href={"/about"}>About</Link>

    </div>
  );
};

// eslint-disable-next-line react/display-name


export default NavMenu;