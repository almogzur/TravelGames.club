import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

import React ,{  useContext, useEffect, useState } from 'react';

export default function SearchComponent({reviews}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')

    const style = {
      position:"absolute",
      right: PagewidthIsLessThen ? "0px" : "50px"
    }
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
      style={style}
      >
        <input className=' serch-bar'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <div className='serch-results'>
          {searchResults.map((item) => (
            <Link href={`/reviews/${item.name}`} className='serch-result-item' 
              key={item.name}
            >{item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  