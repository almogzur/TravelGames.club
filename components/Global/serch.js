"use client"
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import React ,{  useContext, useEffect, useState } from 'react';
import { SubMenu } from 'react-pro-sidebar';
import { SerchBarlocatonContaxt } from "../../util/Context/Context"


export default function SearchComponent({
    reviews , 
    MenuItem ,
    isCollapsed ,
   }) 
   {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSerchOpen , setIsSerchOpen ] = useState(true)
    const [location , setLocation] =useState(SerchBarlocatonContaxt)

    // ceck to see wher component is render
    useEffect(()=>{
      // if the props are passed to component then we know he is in sidebar
      MenuItem ? setLocation("sidebar") : setLocation("topbar")
    }, [MenuItem, location])
    
    const handleSearch = (event) => {

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
      <SubMenu open={isSerchOpen} onClick={()=>setIsSerchOpen(!isSerchOpen)} label={isCollapsed ? "Result" :" Serch Results"}>
        { 
         searchResults.map(
            (item) => 
            <MenuItem 
             key={item.name}
             style={{padding:"20px" ,color:"red"}}
            >  
            {item.name.replaceAll("-"," ")}
            </MenuItem>
           )
        }
      </SubMenu>
      }

        </>
        :  // else return this div 
       location === "topbar" ?
       <>
        <input 
          className='serch-bar'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
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
            > 
              
            <Link 
              href={`/reviews/${item.name}`} 
            >{[<Image key={item.name} src={item.data.mainImg} height={25} width={25} alt=""/>,item.name]}
             {}
            </Link>
            <br/>
            </div>
               
          )
          )}
   

       </>
       
        :
        null
    );
  }
  