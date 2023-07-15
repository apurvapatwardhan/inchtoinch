import React from 'react'
import styles from "@/components/Header/Header.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.head}>
        <div>
            Animation
        </div>
        <div className={styles.headerTitle}>
            <h1>Inch to Inch</h1>
        </div>
        <div className={styles.logoContainer}>
            <Link href={"/"}><Image src="/logo.png" alt='logo' width={100} height={100} /></Link>
        </div>
        <div></div>
    </header>
  )
}

export default Header
