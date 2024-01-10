"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState , useContext, ComponentProps, MouseEvent } from 'react';
import { PageWidthC } from '../../context/context';
import Serch from 'components/Global/serch'

export default function ReviewsSidebar({
     setCategory
    ,isCollapsed
    ,setIsCollapsed 
    ,reviews
     }:any){

    const [diplayState,setDisplaystate]:any = useContext(PageWidthC) 

    const click = (e:any)=>{

    switch(e.target.innerText){
       case "TGA" :
       case  "Travel Gear and Accessories" :  setCategory("TGA") ; 
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
         <SubMenu label={isCollapsed?  "Categorys Icon": "Categorys"}>
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
         <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>

         </MenuItem>
         </Menu>
      </Sidebar>
      : 
      <Sidebar 
        collapsed={isCollapsed}
      
        
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
           <SubMenu label={isCollapsed?  "CategorysIcon": "Categorys"}>
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
           <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)}>
           </MenuItem>
           </Menu>
      </Sidebar>
  
  )
}