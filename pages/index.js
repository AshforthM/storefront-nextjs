import { loadStripe } from "@stripe/stripe-js";

import Head from "next/head";
import PageTitle from "../components/PageTitle/PageTitle";
import Product from "../components/Product/Product";

export default function Home(props) {
  const products = props.products.slice(0,3);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>VHS Storefront</title>
      </Head>
      <PageTitle title="VHS StoreFront" tagline="Featured Products" />
      <main>
        {products.map((product) => (
          <Product key={product.uid} product={product} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://storefrontdmit2008-default-rtdb.firebaseio.com/products.json"
  );
  const productData = await response.json();
  const products = Object.values(productData);

  return {
    props: {
      products
    },
    revalidate:120
  };
}
