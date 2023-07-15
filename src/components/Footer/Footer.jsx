
import {
  BiCopyright,
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from 'react-icons/bi'

import React from 'react'
import Link from 'next/link';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Link href={'/'} className={styles.socialMedia}>
          <BiLogoFacebook />
        </Link>
        <Link href={'/'} className={styles.socialMedia}>
          <BiLogoInstagramAlt />
        </Link>
        <Link href={'/'} className={styles.socialMedia}>
          <BiLogoTwitter />
        </Link>
        <Link href={'/'} className={styles.socialMedia}>
          <BiLogoGmail />
        </Link>
      </div>
      <p>
        Copyright{' '}
        <span>
          <BiCopyright />
        </span>{' '}
        2021 <b>Inch to Inch</b>| All rights reserved
      </p>
    </div>
  )
}

export default Footer
