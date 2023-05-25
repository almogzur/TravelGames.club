// pages/your-page.jsx
import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import ProdactsLopp from '../../components/ReviewsLopp'
import { builder ,BuilderComponent , wi } from '@builder.io/react';
import CategoryBar from '../../components/CategoryBar';
import Footer from '../../components/Footer'
// Replace with your Public API Key.
builder.init("a3d0d381e56c45e8881e0794fc804b1a");

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
    const sortByCategoty = (reviewsObj) => { 
      let  arr = []
        if(!category){return reviewsObj}
           reviewsObj.map((review)=>{if(review.data.catgory === category){arr=[...arr,review] }
 })
    return arr
 }
    const sorted = sortByCategoty(reviews)

    setFilterdReviews(sorted)

    console.log(category , sorted) 
  },[category, setCategory, reviews])

  return (
    
    <>
        <Header/>
        <CategoryBar setCategory={setCategory} category={category}/>
        <ProdactsLopp reviews={Object.keys(filterdReviews).length > 0 ? filterdReviews : reviews} />
        <Footer/>
      {/* Put the rest of your page here. */}
     
    </>
  );
}