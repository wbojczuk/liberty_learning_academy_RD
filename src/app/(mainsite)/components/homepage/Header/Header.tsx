"use client"
import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
<header className={styles.header}>

    <div className={styles.content}>
        <div className={styles.journey}>
            <h1>A life-long journey starts here!</h1>
            <h3>We're Enrolling!</h3>
            <Link href="/contact" className="main-link main-link-outline">Contact Us</Link>
        </div>
    </div>

    <div className={styles.content}>
        <div className={styles.times}>
            <div>Monday - Friday</div>
            <div>6:00AM - 6:30PM</div>
        </div>
    </div>

    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
</header>
)};