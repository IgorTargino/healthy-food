import React from "react";
import Header from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

const HealthyFood = () => {
  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <Header />
        <div>
          <h2>
            Ready for
            <br />
            Trying a new
            <br />
            recipe?
          </h2>
          <form action="submit">
            <input type="text" placeholder="Search healthy recipes" />
            <button type="button">
              <AiOutlineSearch size={20} color="#fff" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HealthyFood;
