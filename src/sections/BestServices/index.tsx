import React from "react";
import styles from "./styles.module.scss";

const BestServices = () => {
  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.content}>
          <h3>
            The Best services ready <br /> To serve you
          </h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
            <br />
            <br />
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
            <br />
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
          <button type="button">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
