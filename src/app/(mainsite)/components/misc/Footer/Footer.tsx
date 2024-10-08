"use client"

import styles from "./footer.module.css"
import Link from "next/link"
import { InlineIcon } from "@iconify/react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <img src="/img/logo.png" width={512} height={512} className={styles.logo} alt="Main Logo"/>

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>

                <span className={styles.listItem}>Childcare, TX</span>
                <span className={styles.listItem}>Learning</span>
                <span className={styles.listItem}>Academy</span>
              
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={`${styles.list} ${styles.contactList}`}>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:phone"} width="50px" height="50px" />
                  <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE_NUM} target="_blank">{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
                </aside>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:phone"} width="50px" height="50px" />
                  <a href={"tel:" + process.env.NEXT_PUBLIC_MOBILE_NUM} target="_blank">MOBILE: {process.env.NEXT_PUBLIC_MOBILE_NUM_FORMATTED}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:email"} width="50px" height="50px" />
                  <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS} target="_blank">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:map-marker"} width="50px" height="50px" />
                  <a href="https://maps.app.goo.gl/awybAZpjwNDrCFDDA" target="_blank">{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a>
                </aside>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"material-symbols:map"} width="50px" height="50px" />
                  <a href="https://maps.app.goo.gl/awybAZpjwNDrCFDDA" target="_blank">We are located at the intersection of Westmoreland Road</a>
                </aside>

              </ul>
            </aside>
          </div>

      </div>

      <div className={styles.copyright}>© Copyright 2024 to Present - <a href="https://www.romesites.co" target="_blank">Rome Sites</a></div>
        
       
    </footer>
  )
}
