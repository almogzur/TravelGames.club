import React, { useEffect } from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import ProfileControls from '../profile/ProfileControls'
import { useSession, signIn, signOut } from "next-auth/react"
import BurgerMenu from './BurgerMenu';
import { useMediaQuery } from 'usehooks-ts';

const Header = () => {
  const { data: session } = useSession()
 const widthQoury  = useMediaQuery('(min-width:290px ) and (max-width:1090px)')


 useEffect(()=>{
    console.log(widthQoury)
 },[widthQoury])
  return (
    !widthQoury?
  <div className='headerwrapper'>
    <div className='headerlinkwrapper'  >

     <Link 
       href={"/"}  
       className="Link-Text" >Home
     </Link>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
      <Link 
       href={"/reviews"} 
        className="Link-Text" >Reviews
      </Link> 
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
      <Link 
        href={"/about"} 
        className="Link-Text">About
      </Link>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px' }}
      />
      <ProfileControls location={undefined}/>
    </div>
  </div>
  :
  <BurgerMenu/>
  );
};

// eslint-disable-next-line react/display-name


export default Header;