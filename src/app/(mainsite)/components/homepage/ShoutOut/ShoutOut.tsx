"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function ShoutOut(){
return (
 <div className={styles.find}>


    <h3 style={{color: "white"}}>Shoutout to the incredible owners of Liberty Learning Academy, Denetta (Class of 1995) and Greg Corbin ( Class of 2000) for stepping up and providing a delicious meal for the L. G. Pinkston’s football team after the game! 🏈🍽 Your support for these young athletes goes beyond the classroom and shows the true heart of our community. We appreciate everything you do! #CommunitySupport #TeamSpirit #LibertyLearningAcademy #Grateful
    </h3>
 
    <img src='/img/shoutout.png' alt='Image of students' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};