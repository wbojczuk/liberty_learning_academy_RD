import styles from './reasons.module.css';

export default function Reasons(){
return (
    <div className={styles.reasons}>
        <h2>4 Reasons <span className="underline highlight">Why!</span></h2>
        <div className={styles.reasonsWrapper}>
            <div className={styles.reasonsItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path></svg>
                <span>High Quality<br />Childcare</span>
            </div>
            <div className={styles.reasonsItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7"></path></svg>
                <span>Friendly<br />Staff</span>
            </div>
            <div className={styles.reasonsItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.016h-5v-.013a1.984 1.984 0 0 0-1.978-1.978h-.035l3.857-10.393l-1.732-.643l-4.095 11.036h-.039A1.984 1.984 0 0 0 9 15.003v.013H4v2h16Zm0 3.002H4L2 22h20z"></path></svg>
                <span>Safe and<br />Clean Rooms</span>
            </div>
            <div className={styles.reasonsItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7c1.5 0 2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></path></svg>
                <span>Play-Based<br />Learning</span>
            </div>
        </div>
    </div>
)};