import React from "react";
import Header from "../../components/Header";

import styles from "./styles.module.scss";

const HealthyFood = () => {
  return (
    <section className={styles.container}>
      <Header />
      <h1>Ready for a Trying a new recipe?</h1>
    </section>
  );
};

export default HealthyFood;
