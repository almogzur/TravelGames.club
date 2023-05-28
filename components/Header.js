import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';

const NavMenu = () => {

  return (

  <div style={{  
            position: "fixed",
            top: "0",
            width: "100%",
            display: 'flex',
            flexDirection:"column",
            justifyContent:"center",
            flexGrow:"4",
            zIndex:"6",
            background:"#e8e9e4",
            height:"50px"
        }}>
    <div style={{ display: 'flex', height: 20, alignItems: 'center'  ,justifyContent:"center" }}>

     <Link  href={"/"} className="Text">Home</Link>

      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
      <Link  href={"/reviews"} className="Text">Reviews</Link>
      
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
      <Link  href={"/about"} className="Text">About</Link>
    </div>
  </div>
  );
};

// eslint-disable-next-line react/display-name


export default NavMenu;