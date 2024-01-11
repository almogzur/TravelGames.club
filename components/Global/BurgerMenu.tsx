"use client"
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import Dropdown from 'rc-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'rc-dropdown/assets/index.css';


function onSelect({ key }:any) {
    console.log(`${key} selected`);
  }
  
  function onVisibleChange(visible: any) {
    console.log(visible);
  }


  const menu = (
        
    <Menu onSelect={onSelect}>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem key="1">one</MenuItem>
      <Divider />
      <MenuItem key="2">two</MenuItem>
    </Menu>
    
  );
  

const BurgerMenu = ()=>{
    

  
    return(


      <div style={{height:"70px", background:"#3f71ae",display:"flex",justifyContent:"flex-end"}}>
        <Dropdown
          trigger={['click']}
          overlay={menu}
          animation="slide-up"
          onVisibleChange={onVisibleChange}
        >
          <button style={{width:"70px" }}>{<FontAwesomeIcon size={"2x"} icon={faBars} />}</button>
        </Dropdown>
      </div>
      
    )
  }
  export default BurgerMenu