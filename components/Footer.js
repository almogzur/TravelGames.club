import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';

const SeparatorDemo = () => {

 return(
  <div style={{  
            position: "fixed",
            padding: "10px" ,
            bottom: "0",
            width: "100%",
            display: 'flex',
            flexDirection:"column",
            justifyContent:"center",
            flexGrow:"4",
            zIndex:"6",
            background:"#f2f4f0"

        }}>
    <div className="Text" style={{ fontWeight: 500 ,textAlign:"center" }}>
      <Link href='https://TravelGame.club'>TravelGame.club</Link>
    </div>
    <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
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
 )
    
};

export default SeparatorDemo;