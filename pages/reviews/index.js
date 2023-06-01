// pages/your-page.jsx
import React ,{ useEffect, useState } from 'react';
import Header from '../../components/Header'
import { builder ,BuilderComponent , wi } from '@builder.io/react';
import CategoryBar from '../../components/CategoryBar';
import Footer from '../../components/Footer'
import CardsWrapper from '../../components/CardsWrapper';

// Replace with your Public API Key.
builder.init(`${process.env.BKEY}`);

export async function getStaticProps() {
  const reviews =  await builder.getAll('review',{
    // Include references, like our `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing
    omit: "data.blocks",
  })
  return {
    props: {
      reviews: reviews || null,
    },
    revalidate: 5,
  };
  
}
 /* -- Categoty sort names --
Outdoor and Adventure Equipment:  OAE
Travel Gear and Accessories: TGA
Tech and Gadgets: TG
Travel Books and Guides: TBG
*/

export default function Reviews({ reviews }) {
  const [ category , setCategory ] = useState(false)
  const [ filterdReviews , setFilterdReviews ] = useState({})
  useEffect(()=>{
   // console.log(category)
    const sortByCategoty = (reviewsObj) => { 
      let  arr = []
        if(!category ){return reviewsObj}
        else if (category !== false){
            reviewsObj.map(
                  (review)=>{
                //console.log(review.data.category)
                    if(review.data.category === category){
                            arr.push(review)
                          }
             })
             }
       return arr
  }
    const sorted = sortByCategoty(reviews)
    setFilterdReviews(sorted)
  },[category, reviews ])

  return (
    <>     
        <Header/>
        <CategoryBar setCategory={setCategory}/>
        <CardsWrapper reviews={filterdReviews.length >= 1 ? filterdReviews : reviews} />
        <Footer/>
    </>
  );
}