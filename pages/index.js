import { useState, useEffect } from "react";

import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";
import Product from "../components/Product/Product";

export default function Home(props) {

  const products = props.products;

  return (
    <>
      <PageTitle title="VHS StoreFront" tagline="Featured Products" />
      <main>
        {products.map(product => <Product key={product.uid} product={product}/>)}
      </main>
    </>
  );
}

export async function getStaticProps(){
  const response = await fetch('https://storefrontdmit2008-default-rtdb.firebaseio.com/products.json');
  const productData = await response.json();
  const products = Object.values(productData);
  
  return {
    props:{
      products,
      fallback:false
    }
  }
}
