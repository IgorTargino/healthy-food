import React from "react";
import Carousel from "../../components/Carousel";
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
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <PostWidget
          img={"./bloco_image_1.svg"}
          title={"Quick-start guide to nuts and seeds"}
          author={"Kevin Ibrahim"}
        />
      </div>
    </section>
  );
};

export default ReadOurBlog;
