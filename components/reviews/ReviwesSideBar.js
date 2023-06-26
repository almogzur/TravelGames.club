"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CircumIcon from '@klarr-agency/circum-icons-react'
import { useMediaQuery } from 'usehooks-ts'
import { useEffect, useState , useContext } from 'react';
import Serch from '../Global/serch'
import { PageWidthContext } from '../../util/Context/Context';


// in the project all styles is in css models ecxepts this component 

export default function ReviewsSidebar({
     setCategory
    ,isCollapsed
    ,setIsCollapsed 
    ,reviews
     }) 
   {
    const pageWidth = useContext(PageWidthContext) 
    const xl = pageWidth.xl
    const md = pageWidth.md
    const sm = pageWidth.sm
 

  const click = (e)=>{

    switch(e.target.innerText){
       case "TGA" : 
       case "Travel Gear and Accessories" : setCategory("TGA") ; 
        break;
       case "TG" :
       case "Tech and Gadgets" : setCategory("TG") ;
        break;
       case "OAD" :
       case "Outdoor and Adventure Equipment" : setCategory("OAE") ; 
        break;
       case "TBG" :
       case "Travel Books and Guides" : setCategory("TBG") ;
        break; 
       case "ALL": setCategory(false); 
       break;
       default : throw new Error("no categoy")
    }
  }

  useEffect(()=>{})

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
           <Serch 
               reviews={reviews} 
               SubMenu={SubMenu} 
               MenuItem={MenuItem}  
               isCollapsed={isCollapsed}
               isSideBar={true}
           />
           <SubMenu label={"Categorys"}>
           <MenuItem onClick={(e)=>click(e)}
           >{ "ALL" }
           </MenuItem>
           <MenuItem 
           onClick={(e)=>click(e)}
           >{isCollapsed ?   "TGA" : "Travel Gear and Accessories" }
           </MenuItem>
           <MenuItem 
           onClick={(e)=>click(e)}>
           {isCollapsed ? "TG"  : "Tech and Gadgets"}
           </MenuItem>
           <MenuItem onClick={(e)=>click(e)}
           >{isCollapsed ? "OAD" : "Outdoor and Adventure Equipment"}
           </MenuItem>    
           <MenuItem onClick={(e)=>click(e)}
           >{ isCollapsed ? "TBG" : "Travel Books and Guides" }
           </MenuItem>
           </SubMenu>

         { xl ? null:
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>{
              isCollapsed ?  <CircumIcon name="maximize_1" />   :<CircumIcon name="minimize_1" />  }
          
           </MenuItem>
           }
         
           </Menu>
      </Sidebar>
  
  )
}