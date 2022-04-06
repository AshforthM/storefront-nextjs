import React from "react";

import Button from "../Button/Button";
import Image from "next/image";

import styles from "./styles.module.scss";

function Product({ product, ...props }) {
  const { imageUrl, productName, productPrice, productDescription } = {
    ...product,
  };

  return (
    <aside className={styles.product}>
      <header>
        <Image src={imageUrl} alt={productName} width={409} height={240}/>
      </header>
      <p className={styles.name}>{productName}</p>
      <p className={styles.price}>{productPrice}</p>
      <p className={styles.description}>{productDescription}</p>
      <footer>
        <form action="#" method="POST">
          <input type="hidden" name="uid" value="uid" />
          <button type="submit">Buy Now</button>
        </form>
      </footer>
    </aside>
  );
}

export default Product;
