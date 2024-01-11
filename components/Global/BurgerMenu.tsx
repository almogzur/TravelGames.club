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

 const itemStyle : React.CSSProperties = {
    color:"red",
    width:"300px",
    height:"50px",
    marginTop:"20px",
    display:"flex",
    justifyContent:"center",
    background:""
}

  const InnerMenu = (
        
    <Menu onSelect={onSelect}>
      <MenuItem onMouseOver={()=>{ }}
       style={itemStyle} key="1">Reviews</MenuItem>
      <Divider />
      <MenuItem  style={itemStyle}key="2">About</MenuItem>
    </Menu>
    
  );
  
  const BurgerMenu = ()=>{
    
    return(
      <div style={{height:"70px", background:"#3f71ae",display:"flex",justifyContent:"flex-end"}}>
        <Dropdown
          trigger={['click']}
          overlay={InnerMenu}
          animation="slide-up"
          onVisibleChange={onVisibleChange}
        >
          <button style={{width:"70px" }}>{<FontAwesomeIcon size={"2x"} icon={faBars} />}</button>
        </Dropdown>
      </div>
    )
  }
  export default BurgerMenu