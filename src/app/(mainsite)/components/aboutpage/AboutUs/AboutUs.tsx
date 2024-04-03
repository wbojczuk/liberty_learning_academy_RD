"use client"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/aboutus-bg.png" width={360} height={600} alt="Image of teacher with kids" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">About Us</span></h2>

            <p>At Liberty Learning Academy, our goal is to make sure every child feels loved, supported, and free to be themselves. We believe in creating a place where children can explore, learn, and grow in their own unique way. Our teachers are here to guide and encourage them every step of the way.
            </p>
            
            <Link href={"/contact"} className="main-link">Contact Us</Link>
        </div>
    </section>
  )
}
