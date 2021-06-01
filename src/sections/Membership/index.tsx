import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

const Membership = () => {
  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.content}>
          <h3>
            Join our membership
            <br />
            to get special offer
          </h3>
          <form action="submit">
            <input type="text" placeholder="Enter your email address" />
            <button type="button">Join</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Membership;
