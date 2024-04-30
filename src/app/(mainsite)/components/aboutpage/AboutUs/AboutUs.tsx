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

            <p>In our inviting and dynamic setting, children engage in exploration, play, and learning in unison. Our priority is ensuring they experience joy, security, and affection as they embark on daily discoveries. <br /><br />
Our educators serve as nurturing mentors, facilitating children's understanding of numbers, letters, colors, and a myriad of fascinating subjects. Yet, above all, we foster their curiosity, kindness, and self-assurance as budding adventurers.
<br /><br />
At Liberty Learning Academy, we champion the freedom to learn and evolve. With our guidance, children develop resilience, courage, and the determination to contribute positively to the world around them.
            </p>
            
            <Link href={"/contact"} className="main-link">Contact Us</Link>
        </div>
    </section>
  )
}
