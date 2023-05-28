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
            background:"#e8e9e4"
        }}>
    <div className="Text" style={{ fontWeight: 500 ,textAlign:"center" }}>
      <Link href='https://TravelGame.club'>TravelGame.club</Link>
    </div>
    <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
    <spam className="text-center">All Rights Reserved CopyRight 2023 TravelGame.Club
</spam>
  </div>
 )
    
};

export default SeparatorDemo;