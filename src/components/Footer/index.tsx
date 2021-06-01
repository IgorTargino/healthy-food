import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.content}>
          <small className={styles.copy}>
            &copy; Copyrights 2019 Stack. All Rights Reserved.
          </small>
          <small className={styles.links}>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
