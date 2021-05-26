import BestRecipes from "../sections/BestRecipes";
import BestServices from "../sections/BestServices";
import HealthyFood from "../sections/HeathlyFood";
import ReadOurBlog from "../sections/ReadOurBlog";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <main className={styles.container}>
      <HealthyFood />
      <BestRecipes />
      <BestServices />
      <ReadOurBlog />
    </main>
  );
}

export default Home;
