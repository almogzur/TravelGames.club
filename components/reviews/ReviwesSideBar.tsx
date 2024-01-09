"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState , useContext, ComponentProps, MouseEvent } from 'react';
import { PageWidthC } from '../../context/context';
import * as Circum from '@klarr-agency/circum-icons-react' ;

import Serch from '../Global/serch'
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function ReviewsSidebar({
     setCategory
    ,isCollapsed
    ,setIsCollapsed 
    ,reviews
     }:ComponentProps<any>){

    const [diplayState,setDisplaystate]:any = useContext(PageWidthC) 

    const click = (e:)=>{

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
      diplayState=== "mob" ?  
      null // no side menu in  mob 
      :
      diplayState === "tab" ?
      null
      :
      diplayState === "desk" ?
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
             inSideBar={diplayState !== "mob" || diplayState !== "tab" ? true :false}
         />
         <SubMenu label={isCollapsed?  <CircumIcon name="grid_4-1"/>: "Categorys"}>
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
         <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>{
            isCollapsed ? 
             <Circum name="maximize_1" />   
             :
             <Circum name="minimize_1" />  
             }
         </MenuItem>
         </Menu>
      </Sidebar>
      : 
      
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
    
           />
           <SubMenu label={isCollapsed?  <CircumIcon name="grid_4-1"/>: "Categorys"}>
               <MenuItem onClick={(e)=>click(e)}
           >{ "ALL" }
              </MenuItem>
              <MenuItem  onClick={(e)=>click(e)}
               >{isCollapsed ?   "TGA" : "Travel Gear and Accessories" }
              </MenuItem>
              <MenuItem onClick={(e)=>click(e)}>
                 {isCollapsed ? "TG"  : "Tech and Gadgets"}
              </MenuItem>
              <MenuItem onClick={(e)=>click(e)}
           >{isCollapsed ? "OAD" : "Outdoor and Adventure Equipment"}
              </MenuItem>    
              <MenuItem onClick={(e)=>click(e)}
           >{ isCollapsed ? "TBG" : "Travel Books and Guides" }
              </MenuItem>
           </SubMenu>
           <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>{
              isCollapsed ? 
               <CircumIcon name="maximize_1" />   
               :
               <CircumIcon name="minimize_1" />  
               }      
           </MenuItem>
           </Menu>
      </Sidebar>
  
  )
}