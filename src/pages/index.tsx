import BestRecipes from "../sections/BestRecipes";
import BestServices from "../sections/BestServices";
import HealthyFood from "../sections/HeathlyFood";
import ReadOurBlog from "../sections/ReadOurBlog";
import Membership from "../sections/Membership";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <>
      <HealthyFood />
      <BestRecipes />
      <BestServices />
      <ReadOurBlog />
      <Membership />
      <Footer />
    </>
  );
}

export default Home;
