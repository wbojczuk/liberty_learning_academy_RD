import styles from './likehome.module.css';

export default function LikeHome(){
return (
 <div className={styles.likeHome}>

    <h2>Just Like Home!</h2>

    <p>We provide quality care for families and their children in an environment that allows them to learn and thrive! A childcare experience in a comfortable, familiar, home-like setting. </p>
 
    <img src='/img/like-home-bg.png' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(255, 255, 255, .9)"}} className='shader'></div>
 </div>
)};