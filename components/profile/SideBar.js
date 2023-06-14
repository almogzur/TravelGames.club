import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CircumIcon from '@klarr-agency/circum-icons-react'


export default function DefaultSidebar({isCollapsed,setIsCollapsed}) {

  return (
    <div  >
      <Sidebar
        collapsed={isCollapsed}
        
        onBackdropClick={() => setToggled(false)}
        >
        <Menu className='bar'>
          <SubMenu className='bar-item' label={ !isCollapsed? "Favorites Reviews":<CircumIcon name="star"/>}>

            <MenuItem > Link1  </MenuItem>
            <MenuItem> Link2 </MenuItem>
          </SubMenu>
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
           { !isCollapsed ? `Close sidebar`:<CircumIcon  name="maximize_1"/>} 
           </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}


