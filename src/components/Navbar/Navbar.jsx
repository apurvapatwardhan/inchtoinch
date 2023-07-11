'use client'
import React, { useState } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState('')
  console.log(showNavList)
  return (
    <nav>
      <ul className={styles.navLinkContainer}>
        {Object.keys(navLinks).map((navigation) => {
          const list = navLinks[navigation].list
          return (
            <l1 key={navLinks[navigation]['id']} className={styles.navLink}>
              <span
                onClick={() => {
                  setShowNavList(`${navigation}`)
                }}
              >
                {navigation}
              </span>
              {showNavList.length > 0 && showNavList == navigation ? (
                <ul className={styles.navLinkDropdown}>
                  {list.map((listItem) => {
                    return (
                      <li key={listItem.id}>
                        <Link href={listItem.value}>
                          <span
                            onClick={(e) => {
                              setShowNavList('none')
                              
                            }}
                          >
                            {listItem.label}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </l1>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
