import { useState, useEffect,useContext } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {   PageWidthC } from "context/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // package
import { faBookBookmark, faCubesStacked, faRankingStar, faShop } from '@fortawesome/free-solid-svg-icons' // icons 

// in the project all styles in hendeld in css models exept this component 

export default function ProfileSidebar({isCollapsed,setIsCollapsed}:any) {

  const {xl,md,sm} = useContext(PageWidthC) 


  useEffect(()=>{},[])

  return (
    xl && md && sm ?  // mob
    null // no sidebar in mob
    :
    xl && md ?  // tab
    <Sidebar 
    collapsed={isCollapsed}
    onBackdropClick={() => setToggled(false)}
    >
    <Menu
          rootStyles={{
          background:"#3F72AF",
          height:"100vh"
           
           }} >
      <SubMenu label={  !isCollapsed? [  "Favorites Reviews", "Star"] :"Star"}>

        <MenuItem > Link1  </MenuItem>
        <MenuItem> Link2 </MenuItem>
      </SubMenu>
      { PagewidthIsLessThen? null :
      <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
        {!isCollapsed ? ["Close SideBar", <FontAwesomeIcon key={2}  icon={faShop} />]:<FontAwesomeIcon icon={faBookBookmark} />}
       </MenuItem>
       }
    </Menu>
   </Sidebar>  
    :
    xl ?   // desk  
    <Sidebar 
      collapsed={isCollapsed}
      onBackdropClick={() => setToggled(false)}
      >
      <Menu
            rootStyles={{
            background:"#3F72AF",
            height:"100vh"
             
             }} >
        <SubMenu label={  !isCollapsed? [  "Favorites Reviews", <FontAwesomeIcon key={2}  icon={faShop} />] :<FontAwesomeIcon icon={faBookBookmark} />}>

          <MenuItem > Link1  </MenuItem>
          <MenuItem> Link2 </MenuItem>
        </SubMenu>
       
        <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
          {!isCollapsed ? ["Close SideBar", <CircumIcon key={2} size={25} name="minimize_1" />]:<CircumIcon name="maximize_1" />}
         </MenuItem>
         
      </Menu>
    </Sidebar>    
    : // desk and up
    <Sidebar 
        collapsed={isCollapsed}
        onBackdropClick={() => setToggled(false)}
        >
        <Menu
              rootStyles={{
              background:"#3F72AF",
              height:"100vh"
               
               }} >
          <SubMenu label={  !isCollapsed? [  "Favorites Reviews", <CircumIcon size={25} key={1} name="star"/>] :<CircumIcon name="star"/>}>

            <MenuItem > Link1  </MenuItem>
            <MenuItem> Link2 </MenuItem>
          </SubMenu>
      
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
            {!isCollapsed ? ["Close SideBar", <CircumIcon key={2} size={25} name="minimize_1" />]:<CircumIcon name="maximize_1" />}
           </MenuItem>
           
        </Menu>
    </Sidebar>
  )
}


