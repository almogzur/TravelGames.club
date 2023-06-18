// pages/collections/[collection].jsx
import { BuilderComponent, builder } from '@builder.io/react';
import ReviewPage from '../../components/reviews/reviwepage/ReviewPage.js'
import Header from "../../components/Global/Header"
import Head from 'next/head';
builder.init(`${process.env.BKEY}`);

// url name is passed to static props as the name of the file as key 
//and get the vlau from Link review 

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
    return(
     <>
      <Head>
         <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
     <Header/>
     <ReviewPage review={reviewDetails}/>
     </>
    )
   }
}