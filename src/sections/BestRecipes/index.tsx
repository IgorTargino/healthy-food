import React from "react";
import RecipeWidget from "../../components/RecipeWidget";
import styles from "./styles.module.scss";

const BestRecipes = () => {
  return (
    <section className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.title}>
          <h3>Our Best Recipes</h3>
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br /> Vakalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className={styles.recipes}>
          <RecipeWidget img={"comida_1.svg"} title={"Broccoli Salad with Bacon"}/>
          <RecipeWidget img={"comida_2.svg"} title={"Classic Beef Burgers"}/>
          <RecipeWidget img={"comida_3.svg"} title={"Classic Potato Salad"}/>
          <RecipeWidget img={"comida_4.svg"} title={"Cherry Cobbler on the Grill"}/>
        </div>
      </div>
    </section>
  );
};

export default BestRecipes;
