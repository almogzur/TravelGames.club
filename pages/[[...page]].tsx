import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer'
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing} from '@builder.io/react';
import useLocalStorageState from '../util/hooks/useLocalStorageStateHook'


builder.init(`${process.env.BKEY}`);

// page data 
export async function getStaticProps({ params }) {
  // Fetch the first page from Builder that matches the current URL.
  // Use the `userAttributes` field for targeting content.
  // For more, see https://www.builder.io/c/docs/targeting-with-builder
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}
export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url', 
    options: { noTargeting: true },
  });

  return {
    paths: [],
    fallback: true,
  };
}

export default function Page({ page  }) {

  // first setup of category in local storeg 
  const  [ category , setCategory ] = useLocalStorageState("category","false")  
  
  const handleUpdateCategory = (value) => {
    setCategory(value);
  };

  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{"TravelGame.club"}</title>
         <meta  property="og:image"  content={page?.data.image}/>
         <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Header/>
      <BuilderComponent 
         model="page" 
         content={page}
         data={{ handleUpdateCategory ,category }} />
      <Footer/>
    </>
  );
}
