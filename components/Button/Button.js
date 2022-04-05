import React from "react";

import styles from "./styles.module.scss";

function Button ({ children, label, onClick, ...props }) {
  return (
    <button className={styles.button} onClick={onClick}>
        {label}
        {children}
    </button>
  );
}

export default Button;