import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import CircumIcon from '@klarr-agency/circum-icons-react'
import LogunBtn from './LoginBtn';
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
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
  
      <Link 
        href={"/profile"} 
        className="Link-Text">Profile
      </Link>
   
      <LogunBtn/>
    
    </div>

    
  </div>
  );
};

// eslint-disable-next-line react/display-name


export default Header;