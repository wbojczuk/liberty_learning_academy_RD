"use client"
import styles from './likehome.module.css';
import Link from 'next/link';

export default function LikeHome(){
return (
 <div className={styles.likeHome}>

    <div className={styles.content}>
    <h2>Welcome to Liberty Learning Academy</h2>

      <p>An exceptional early learning environment that exceeds the standard childcare experience.</p>

     <div className="center">
      <Link href="/contact" className='main-link'>Schedule a Tour</Link>
     </div>
    </div>
 
    <img src='/img/like-home-bg.png' alt='Image of ' className='bg-img' />

 </div>
)};