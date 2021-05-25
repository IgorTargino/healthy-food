import React from 'react'
import styles from './styles.module.scss';

interface Props {
  img: string;
  title: string;
}

const RecipeWidget = ({img, title}: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <button type="button"> See Recipe</button>
      </div>
    </div>
  )
}

export default RecipeWidget;
