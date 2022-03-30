import React from "react";

import styles from "./styles.module.css";

function PageTitle({ children, title, tagline, ...props }) {
  return (
    <header>
      <h1>{title || "uiTitle"}</h1>
      <p>{tagline || "uiTagline"}</p>
    </header>
  );
}

export default PageTitle;