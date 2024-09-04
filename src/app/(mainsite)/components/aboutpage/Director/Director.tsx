"use client"
import styles from "./director.module.css"
import Link from "next/link"

export default function Director() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/director.jpg" width={360} height={600} alt="Image of teacher with kids" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">The Director</span></h2>

            <p>Denetta Corbin is the owner and director of Liberty Learning Academy in West Dallas. With over 15 years of experience in education, she has previously served as an Assistant Principal, Campus Instructional Coach, and mathematics teacher within the Dallas Independent School District. As a teacher, she was recognized as Teacher of the Year (2012-2013) and honored as both a Master Teacher and Distinguished Teacher (Exemplary II).  She was also recognized as a Distinguished Assistant Principal.
<br /><br />
Ms. Corbin earned her bachelor’s degree in Interdisciplinary Studies with a minor in Mathematics from Dallas Baptist University (DBU) and holds a master’s degree in Educational Administration from DBU. She also completed an Educational Specialist Degree (Ed.S.) from Walden University. Throughout her career, she has held various leadership roles.
<br /><br />
A dedicated wife and mother of five, Ms. Corbin enjoys shopping in her spare time. Guided by her favorite quote, "Great leaders don't set out to be a leader. They set out to make a difference. It is never about the role—always about the goal," she is committed to empowering underprivileged and underserved communities through education, believing deeply that education is the key to freedom.
            </p>
            
            <Link href={"/contact"} className="main-link">Contact Us</Link>
        </div>
    </section>
  )
}
