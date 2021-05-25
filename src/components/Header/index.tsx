import React from 'react'
import Link from "next/link"

import styles from "./styles.module.scss"

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Healthy Food</h1>
      <nav>
        <ul>
          <li><Link href="/heathy-recipes">HEALTHY RECIPES</Link></li>
          <li><Link href="/blog">BLOG</Link></li>
          <li><Link href="/join">JOIN</Link></li>
          <li><Link href="/"><button type="button">REGISTER</button></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
