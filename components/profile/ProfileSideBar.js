import { useState, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CircumIcon from '@klarr-agency/circum-icons-react'

// in the project all styles in hendeld in css models exept this component 

export default function ProfileSidebar({isCollapsed,setIsCollapsed}) {

  const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')

  useEffect(()=>{
    console.log(PagewidthIsLessThen)
},[PagewidthIsLessThen])

  return (
    <div  >
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
           { PagewidthIsLessThen? null : !isCollapsed ? ["Close SideBar", <CircumIcon key={2} size={25} name="minimize_1" />]:<CircumIcon name="maximize_1" />} 
           </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}


