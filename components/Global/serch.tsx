"use client"
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import React ,{  ReactEventHandler, useContext, useEffect, useState } from 'react';
import { SubMenu } from 'react-pro-sidebar';
import { SerchBarlocatonContaxt } from "../../context/context"
import CircumIcon from '@klarr-agency/circum-icons-react'


export default function SearchComponent({
    reviews , 
    MenuItem ,
    isCollapsed ,
   }:any) 
   {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSerchOpen , setIsSerchOpen ] = useState(true)
    const [location , setLocation] =useState<unknown>(SerchBarlocatonContaxt)

    // ceck to see wher component is render
    useEffect(()=>{
      // if the props are passed to component then we know he is in sidebar
      MenuItem ? setLocation("sidebar") : setLocation("topbar")
    }, [MenuItem, location])
    
    const handleSearch = (event:any) => {

      const { value } = event.target;
      setSearchTerm(value);
  
      // Perform the search logic using the JSON data
      const searchResults = Object.values(reviews).filter((item) =>
        item.data.name.toLowerCase().includes(value.toLowerCase())
      );
        console.log(searchResults)
         setSearchResults(searchResults);
    };
  
    return (
       location === "sidebar" ? //cheak to see if in sub menu is paseed as pros  if it is render the given props 
        <>
       <input 
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        style={
        {
         width: isCollapsed? null: "95%",
         border:"none",
         height:"50px",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         marginLeft:"5px",
         fontSize: isCollapsed? "14px":  "20px"
          }
        }
       />
       
     { 
       searchTerm === ""  ? null :
      <SubMenu open={isSerchOpen} onClick={()=>setIsSerchOpen(!isSerchOpen)} label={isCollapsed ? <CircumIcon name="search"/> :" Serch Results"}>
        { 
         searchResults.map(
            (item) => 
            <MenuItem 
             key={item.name}
             style={{padding:"20px" ,}}
            >  
            <Link href={`/reviews/${item.name}`}>{item.name.replaceAll("-"," ")}</Link>
            </MenuItem>
           )
        }
      </SubMenu>
      }

        </>
        :  // else return this div 
       location === "topbar" ?

       <div  className='serch-wrapper'
       
       >
        <input 
          className='serch-bar'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={"Search..."}
          style={{
            width:"250px",
            height:"55px"
          }}
        />
     
          {
            searchResults.map((item) => (
            searchTerm === '' ?  null 
            :
            <div className='serch-result-item' 
             key={item.name}
              style={{zIndex:"6",height:"30px",width:"250px"}} 
             
            > 
            <Link 
              href={`/reviews/${item.name}`} 
            >
             {[
             <Image key={item.name} 
              src={item.data.mainImg} 
              height={40} 
              width={40} 
              alt=""
            />,
              item.name
             ]}
            </Link>
            <br/>

            </div>
               
          )
          )
          }
       </div>      
        :
        null
    );
  }
  