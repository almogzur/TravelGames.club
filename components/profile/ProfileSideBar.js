import { useState, useEffect,useContext } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {   PageWidthContext } from "../../util/Context/Context"
import CircumIcon from '@klarr-agency/circum-icons-react'

// in the project all styles in hendeld in css models exept this component 

export default function ProfileSidebar({isCollapsed,setIsCollapsed}) {

  const {xl,md,sm} = useContext(PageWidthContext) 


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
      <SubMenu label={  !isCollapsed? [  "Favorites Reviews", <CircumIcon size={25} key={1} name="star"/>] :<CircumIcon name="star"/>}>

        <MenuItem > Link1  </MenuItem>
        <MenuItem> Link2 </MenuItem>
      </SubMenu>
      { PagewidthIsLessThen? null :
      <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
        {!isCollapsed ? ["Close SideBar", <CircumIcon key={2} size={25} name="minimize_1" />]:<CircumIcon name="maximize_1" />}
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
        <SubMenu label={  !isCollapsed? [  "Favorites Reviews", <CircumIcon size={25} key={1} name="star"/>] :<CircumIcon name="star"/>}>

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


