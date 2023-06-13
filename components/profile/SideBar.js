import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';
export default function DefaultSidebar() {

  return (
    <div  >
      <Sidebar  >
        <Menu className='bar'>{/* need to active style in this level to avide style conflict  */}
          <SubMenu className='bar-item' label="Charts">
            <MenuItem > Pie charts  </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem href='/' > Home </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}


