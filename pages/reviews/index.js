// pages/your-page.jsx
import React ,{  useContext, useEffect, useState } from 'react';
import Header from '../../components/Header'
import { builder ,BuilderComponent , wi } from '@builder.io/react';
import CategoryBar from '../../components/CategoryBar';
import Footer from '../../components/Footer'
import CardsWrapper from '../../components/CardsWrapper';
import { getLocalStorageItem } from '../../util/localstoreg';
import Head from 'next/head';
import CustomH1 from '../../components/CustomH1'
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
 /* -- Categoty Sort Names --
Outdoor and Adventure Equipment:  OAE
Travel Gear and Accessories: TGA
Tech and Gadgets: TG
Travel Books and Guides: TBG
*/
export default function Reviews({ reviews }) {

  const [ filterdReviews , setFilterdReviews ] = useState({})

  const  [ category , setCategory ] = useState("")

  useEffect(()=>{
     // on page navigate get back the category from local storeg and
     // use it as state this works across all components LocalStoreg is in the Global Scoop
     const storedState = getLocalStorageItem('category');
    if (storedState) {
      setCategory(storedState);
    }
  },[])

  useEffect(()=>{
    console.log(category , "index Moundet")
    const sortByCategoty = (Obj) => { 
      let  arr = []
        if(!category ){return Obj}
        else if (category !== false){
          Obj.map(
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
  },[ category, reviews ])

  return (
    <>     
        <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
         <title>{"Reviews"}</title>
         <meta  property="og:image"  />
         <meta name="viewport" content="width=device-width, initial-scale=1 "  />
        </Head>
        <Header/>
        <CategoryBar setCategory={setCategory}/>
        <CustomH1 category={category}/>
        <CardsWrapper reviews={filterdReviews.length > 0 ? filterdReviews : reviews} category={category} />

    </>
  );
}