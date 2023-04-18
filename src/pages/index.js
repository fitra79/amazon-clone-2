import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Productfeed from "../components/Productfeed";


export default function Home({products}) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Isi halaman home */}
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <Productfeed products={products}/>
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  }
}

// Get - https://fakestoreapi.com/products
