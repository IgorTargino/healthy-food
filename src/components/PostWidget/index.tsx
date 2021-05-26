import React from 'react'
import styles from './styles.module.scss'

interface Props {
  img: string;
  title: string;
  name: string;
}

const PostWidget = ({img, title, name}: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.profile}>
          <img src="./Photo.png" />
          <p>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default PostWidget;
