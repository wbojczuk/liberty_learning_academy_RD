"use client"
import Link from 'next/link';
import styles from './programscontent.module.css';

export default function ProgramsContent(){
return (
 <div className={styles.programsContent}>

    {/* <div className="center">
        <h2>Early Learning Academy</h2>
    </div> */}

   <div className={styles.content}>
        <div className={styles.programs}>
            <div className={styles.program}>
                <h5>Infants</h5>
                <span>6 weeks - 12 months</span>
            </div>
            <div className={styles.program}>
                <h5>Toddlers</h5>
                <span>12 - 24 months</span>
            </div>
            <div className={styles.program}>
                <h5>Twos</h5>
                <span>2-year olds</span>
            </div>
            <div className={styles.program}>
                <h5>Preschool</h5>
                <span>3-year olds</span>
            </div>
            <div className={styles.program}>
                <h5>Pre-K</h5>
                <span>4-year olds</span>
            </div>
            <div className={styles.program}>
                <h5>Before & After</h5>
                <span>5-12 years</span>
            </div>
            <div className={styles.program}>
                <h5>Summer Camp & Breaks</h5>
                <span>5-12 years</span>
            </div>
        </div>

        <div className={`center ${styles.buttonWrapper}`}>
            <Link className='main-link' href={"/contact"}>Contact Us</Link>
        </div>
        
   </div>
 
    <img src='/img/programs-bg.png' alt='Image of teacher with kids' className='bg-img' />
    <div style={{backgroundColor:"rgba(255,255,255,0.8)"}} className='shader'></div>
 </div>
)};