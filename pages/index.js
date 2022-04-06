import { useState, useEffect } from "react";

import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";
import Product from "../components/Product/Product";

export default function Home(props) {
  // const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState([]);
  
  // useEffect(() => {
  //   async function loadData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await res.json();
  //     setUserData(data);
  //   }
  //   loadData();
  // },[]);

  const products = props.products;

  return (
    <>
      <PageTitle title="VHS StoreFront" tagline="Featured Products" />
      <main>
        {products.map(product => <Product key={product.uid} product={product}/>)}
      </main>

      {/* <div style={{ textAlign: "center" }}>
        <Button
          style={{ margin: "2rem 0 0" }}
          onClick={() => setIsLoading(!isLoading)}
        >
          Get Products
        </Button>
        {isLoading && <p style={{ padding: "1rem" }}>This Is My Output</p>}
      </div>
      <main>
        {
          userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username} />)
        }
      </main> */}
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
