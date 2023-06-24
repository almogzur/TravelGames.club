"use client"
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import React ,{  useContext, useEffect, useState } from 'react';
import { SubMenu } from 'react-pro-sidebar';

export default function SearchComponent({
    reviews , 
    MenuItem ,
    isCollapsed 
   }) 
   {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')

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
       MenuItem ? //cheak to see if in sub menu is paseed as pros  if it is render the given props 
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
      <SubMenu label={isCollapsed ? "Result" :" Serch Results"}>
        { 
         searchResults.map(
            (item) => 
            <MenuItem 
             key={item.name}
             style={{padding:"20px"}}
            >  
            {item.name.replaceAll("-"," ")}
            <Image style={{marginLeft:"15px"}} height={35} width={35} src={item.data.mainImg} alt=""/>
            </MenuItem>
           )
        }
      </SubMenu>
      }

        </>
        : // else return this div 
       <div className='serch-wrapper'
         >
        <input 
          className='serch-bar'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
    
        />
        <div className='serch-results'>
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
        </div>

       </div>
    );
  }
  