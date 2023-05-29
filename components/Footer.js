import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SeparatorDemo = () => {
  
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setIsHidden(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 return(
  <div style={{  
            position: "fixed",
            bottom: "0",
            width: "100%",
            display: 'flex',
            flexDirection:"column",
            justifyContent:"center",
            flexGrow:"4",
            zIndex:"0",
            background:"#dfe0db",
            transition: "transform 0.3s",
            transform: isHidden ? "translateY(100%)" : "translateY(0)"
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