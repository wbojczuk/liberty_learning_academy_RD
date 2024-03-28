"use client"
import styles from "./ourmission.module.css"
import Link from "next/link"

export default function OurMission() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/mission-bg.png" width={360} height={600} alt="Image of teacher with kids" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">Our Mission</span></h2>

            <p>Empower children through nurturing care and education to foster independence, creativity, and a love for learning, enabling them to thrive and contribute meaningfully in a diverse and ever-changing world.
            </p>
            
            <Link href={"/contact"} className="main-link">Contact Us</Link>
        </div>
    </section>
  )
}
