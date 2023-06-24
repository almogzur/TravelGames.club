// pages/your-page.jsx
import React ,{  useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts'
import { builder } from '@builder.io/react';
import { getLocalStorageItem } from '../../util/localstoreg';
import { ReviewSidebarWidthContext } from '../../util/Context/Context';
import CardsWrapper from '../../components/reviews/CardsWrapper';
import Head from 'next/head';
import CustomH1 from '../../components/reviews/CustomH1'
import ReviewsSideBar from "../../components/reviews/ReviwesSideBar"
import Header from '../../components/Global/Header'
import TopBar from '../../components/reviews/TopBar';

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

export default function Reviews({ reviews }) {

  const PagewidthIsLessThen = useMediaQuery('(max-width: 1090px)')
  const [ filterdReviews , setFilterdReviews ] = useState({})
  const [ category , setCategory ] = useState()
  const [isCollapsed , setIsCollapsed ] = useContext(ReviewSidebarWidthContext)
 
 // local storeg
  useEffect(()=>{
     // on page navigate get back the category from local storeg and
     // use it as state this works across all components LocalStoreg is in the Global Scoop
     const storedState = getLocalStorageItem('category');

     if (storedState) {
      setCategory(storedState);
    }
  },[])
// reviers filter 
  useEffect(()=>{
  //  console.log( "filtring process")
    const sortByCategoty = (Obj) => { 
    let  arr = []
    if(!category ){return Obj}
    else if(category !== false){
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

// chak for width and update sidebar no dip array this need to cheak vs the window listner for changes 
//cansel esliont no dep array 
  useEffect(()=>{
 // console.log("this is runing")
  if(PagewidthIsLessThen){
    setIsCollapsed(true)
  }
})

  return (
    <>     
        <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
         <title>{"Reviews"}</title>
         <meta  property="og:image"  />
         <meta name="viewport" content="width=device-width, initial-scale=1 "  />
        </Head>
        <Header/>
        
       {
         PagewidthIsLessThen ? 
        <TopBar 
         reviews={reviews}

        />
       :
        <ReviewsSideBar  
         reviews={reviews}
         setCategory={setCategory}
         defaultCollapsed={false}
         isCollapsed={ isCollapsed }
         setIsCollapsed={setIsCollapsed}       
        />

       }
        <CustomH1 category={category}/>
        <CardsWrapper reviews={filterdReviews.length > 0 ? filterdReviews : reviews} category={category} />

    </>
  );
}