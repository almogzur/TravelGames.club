import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';

const Footer = () => {
  
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
  <div  
     className='footerWrapper'
     style={{transform: isHidden ? "translateY(100%)" : "translateY(0)"}}
   >
       <div className="footerlink" >
       <a className='footerlink' href='https://almogzurdemo.netlify.app/'>TravelGame.club</a>
   </div>
      <Separator.Root className="SeparatorRoot" style={{ margin: '5px' }} />
      <div className="text-center footerlink">All Rights Reserved CopyRight 2023 TravelGame.Club</div>
  </div>
 )
};
export default Footer;