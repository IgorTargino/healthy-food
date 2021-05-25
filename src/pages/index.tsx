import { Fragment } from "react";
import HealthyFood from "../sections/HeathlyFood";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <Fragment>
      <div className={styles.container}>
        <HealthyFood />
      </div>
    </Fragment>
  );
}

export default Home;
