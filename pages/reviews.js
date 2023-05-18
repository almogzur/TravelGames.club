// pages/your-page.jsx
import Header from '@/components/Header';
import ProdactsLopp from '../components/ProdactsLopp'
import { builder ,BuilderComponent } from '@builder.io/react';

// Replace with your Public API Key.
builder.init("a3d0d381e56c45e8881e0794fc804b1a");

export async function getStaticProps() {
  const prodacts =  await builder.getAll('prodact')
  return {
    props: {
      prodacts: prodacts || null,
    },
    revalidate: 5,
  };
  
}

export default function Reviews({ prodacts }) {
  return (
    <>

        <Header/>
        <ProdactsLopp prodacts={prodacts}/>
      {/* Put the rest of your page here. */}
     
    </>
  );
}