import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CircumIcon from '@klarr-agency/circum-icons-react'


export default function ReviewsSidebar({ setCategory , isCollapsed,setIsCollapsed}) {

  return (
    
      <Sidebar className='reviews-sidebar'
        collapsed={isCollapsed}
        onBackdropClick={() => setToggled(false)}
        >
        <Menu className='reviews-sidebar-menu'>
          <SubMenu className='reviews-sidebar-item' label={ !isCollapsed? [  "Favorites Reviews", <CircumIcon size={25} key={1} name="star"/>] :<CircumIcon name="star"/>}>

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