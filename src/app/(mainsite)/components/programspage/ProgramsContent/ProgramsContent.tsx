"use client"
import Link from 'next/link';
import styles from './programscontent.module.css';

export default function ProgramsContent(){
return (
 <div className={styles.programsContent}>

    <div className="center">
        <h2>Early Learning Academy</h2>
    </div>

   <div className={styles.content}>
        <p>
        In our cozy and fun-filled environment, children get to explore, play, and learn together. We want them to feel happy, safe, and loved while they discover new things every day.
        </p>
        <p>
        Our teachers are like friendly guides, helping children learn about numbers, letters, colors, and all sorts of exciting things. But most importantly, we encourage them to be curious, kind, and confident little explorers.
        </p>
        <p>
        We believe in freedom to learn and grow in our Liberty Learning Academy. With our support, children can become strong, brave, and ready to make the world a better place for everyone.
        </p>

        <Link className='main-link' href={"/contact"}>Contact Us</Link>
   </div>
 
    <img src='/img/programs-bg.png' alt='Image of teacher with kids' className='bg-img' />
    <div style={{backgroundColor:"rgba(255,255,255,0.8)"}} className='shader'></div>
 </div>
)};