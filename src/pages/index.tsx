import BestRecipes from "../sections/BestRecipes";
import BestServices from "../sections/BestServices";
import HealthyFood from "../sections/HeathlyFood";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <main className={styles.container}>
      <HealthyFood />
      <BestRecipes />
      <BestServices />
    </main>
  );
}

export default Home;
