import React from "react";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

function Product({ product, ...props }) {
  const { imageUrl, productName, productPrice, productDescription } = {
    ...product,
  };

  return (
    <aside className={styles.product}>
      <header>
        <img src={imageUrl} alt="" />
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
