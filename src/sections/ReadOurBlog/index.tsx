import React from "react";
import PostWidget from "../../components/PostWidget";

import styles from "./styles.module.scss";

const ReadOurBlog = () => {
  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.title}>
          <h2>Our Best Recipes</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br /> Vakalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadOurBlog;
