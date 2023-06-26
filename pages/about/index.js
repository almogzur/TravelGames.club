import React ,{  useContext, useEffect, useState } from 'react';
import Header from '../../components/Header'
import { builder ,BuilderComponent , wi } from '@builder.io/react';
import Head from 'next/head';
import Footer from '../../components/Footer'


builder.init(`${process.env.BKEY}`);

export async function getStaticProps({ params }) {
  // Fetch the builder content
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
    revalidate: 5
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  });

  return {
    paths: [],
    fallback: true,
  };
}


export default  function About ({page}){

    return(
        <>
       <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
         <title>{"Reviews"}</title>
         <meta  property="og:image"  />
         <meta name="viewport" content="width=device-width, initial-scale=1 "  />
      </Head>
      <Header/>
      <BuilderComponent
       content={page}
       model="page"
       />
      <Footer/>
        </>
    )

}