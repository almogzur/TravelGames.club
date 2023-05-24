// pages/collections/[collection].jsx
import { BuilderComponent, builder } from '@builder.io/react';
import ProductPage from "../../components/ReviewPage"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


// Replace with your Public API Key.
builder.init("a3d0d381e56c45e8881e0794fc804b1a");

// url name is passed to static props as the name of the file as key 
//and get the vlau from Link prodact 

export async function getStaticProps({ params }) {

  const reviewDetails = await builder.get('review',{
    query: {
      name:`${params.url}`,
    }
  }).toPromise()

  return {
    props: {
      reviewDetails: reviewDetails || null,
    },
    // Show a 404 page if no product is found
    notFound: !reviewDetails,
    revalidate: 5,
  };
}

// quray the db for the selected review

export  async function getStaticPaths() {
  return {
    paths:[],
    fallback: true
  }
}
  
export default  function Page({ reviewDetails }) {


   if(!reviewDetails){
  <div>Loading...</div>
   }else{
    return <ProductPage review={reviewDetails}/>
   }
}