import React from 'react'
import styles from './styles.module.scss'

interface Props {
  img: string;
  title: string;
  author: string;
}

const PostWidget = ({img, title, author}: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.profile}>
          <img src="./author.png" />
          <p>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default PostWidget;
