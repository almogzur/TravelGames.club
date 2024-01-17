"use client"
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import Dropdown from 'rc-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'rc-dropdown/assets/index.css';
import { useState } from 'react';
import Router from 'next/router';
import ProfileControls from '../profile/ProfileControls';


  const BurgerMenu = ()=>{
    let MenuItemsArray = ["Reviews","About"]


    
    const itemCss :React.CSSProperties= {
      color:"red",
      width:"300px",
      height:"50px",
      marginTop:"20px",
      display:"flex",
      justifyContent:"center",
  

    }
    const handleMouseOver = (e:any) => {
      e.target.style.background="#3f71ae"

    };
  
    const handleMouseOut = (e:any) => {
      e.target.style.background="#fff"


    };

    const ComMenu = ():any => {

      return<Menu>
        {MenuItemsArray.map((item,i)=>{
          return(<MenuItem 
          style={itemCss} 
          key={i}
          onMouseOver={(e)=>handleMouseOver(e)}
          onMouseOut={(e)=>handleMouseOut(e)}
          onClick={()=>Router.push("/"+item.toLowerCase())}
          >
          {item}
          <Divider/>
          <ProfileControls/>

          </MenuItem>)
        })}
      </Menu>


    }

   
  
    
    return(
      <div style={{height:"70px", background:"#3f71ae",display:"flex",justifyContent:"flex-end"}}>
        <Dropdown
          trigger={['click']}
          overlay={ComMenu}
          animation="slide-up"
     
        >
          <button style={{width:"70px" }}>{<FontAwesomeIcon size={"2x"} icon={faBars} />}</button>
        </Dropdown>
      </div>
    )
  }
  export default BurgerMenu