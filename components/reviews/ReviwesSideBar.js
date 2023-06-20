import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CircumIcon from '@klarr-agency/circum-icons-react'


// in the project all styles in hendeld in css models exept this component 

export default function ReviewsSidebar({ setCategory , isCollapsed,setIsCollapsed}) {

  const click = (e)=>{
     
    switch(e.target.innerText){
      case "Travel Gear and Accessories" : setCategory("TGA") ; 
       break;
      case "Tech and Gadgets" : setCategory("TG") ;
       break;
      case "Outdoor and Adventure Equipment": setCategory("OAE") ; 
       break;
      case "Travel Books and Guides": setCategory("TBG") ;
       break; 
      case "All": setCategory(false); 
      break;
      default : throw new Error("no category value")
    }
  }


  return (
    
      <Sidebar  
        collapsed={isCollapsed}
        onBackdropClick={() => setToggled(false)}
        
        >
        <Menu   
          rootStyles={{
            height:"100vh",
           
        }}
              >
           <MenuItem onClick={(e)=>click(e)}>Travel Gear and Accessories</MenuItem>
           <MenuItem onClick={(e)=>click(e)}>Tech and Gadgets</MenuItem>
           <MenuItem onClick={(e)=>click(e)}>Outdoor and Adventure Equipment</MenuItem>
           <MenuItem onClick={(e)=>click(e)}>Travel Books and Guides</MenuItem>
          <SubMenu  
            label={ !isCollapsed? [  "Favorites Reviews", <CircumIcon size={25} key={1} name="star"/>] :<CircumIcon name="star"/>}>

            <MenuItem > Link1  </MenuItem>
            <MenuItem> Link2 </MenuItem>
          </SubMenu>
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
           { !isCollapsed ? ["Close SideBar", <CircumIcon key={2} size={25} name="minimize_1" />]:<CircumIcon name="maximize_1" />} 
           </MenuItem>
           
        </Menu>
      </Sidebar>
  
  )
}