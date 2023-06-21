"use client"

import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import Image from 'next/image';
import React ,{  useContext, useEffect, useState } from 'react';

export default function SearchComponent({reviews}) {

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
       <div 
      className='serch-wrapper'
      style={ {
      position:"absolute",
      right: PagewidthIsLessThen ? "10px" : "50px",
      width: PagewidthIsLessThen ? "100px": "250px",
      height:"150px",
      zIndex:"2"
    }}
      >
        <input 
          className='serch-bar'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          style={{
            width: PagewidthIsLessThen ? "150px" : "245px",
            }}
        />
        <div className='serch-results'>
          {searchResults.map((item) => (
            searchTerm === '' ?  null :
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
          ))}
        </div>
       </div>
    );
  }
  