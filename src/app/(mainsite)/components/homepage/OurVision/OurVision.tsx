"use client"
import styles from "./ourvision.module.css"
import Link from "next/link"

export default function OurVision() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/vision-bg.png" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">Our Vision</span></h2>

            <p>To create a nurturing and inclusive environment where children are encouraged to explore, learn, and grow freely, cultivating their unique talents and strengths to become confident, compassionate individuals capable of shaping a brighter future for themselves and their communities.
            </p>
            
            <Link href={"/contact"} className="main-link">Contact Us</Link>
        </div>
    </section>
  )
}
