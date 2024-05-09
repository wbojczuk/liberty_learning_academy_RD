
import FreeEstimateForm from '../FreeEstimateForm/FreeEstimateForm';
import styles from './contactinfo.module.css';

export default function ContactInfo(){
return (
   <>
   <h2 className={styles.loc}>We are located at the intersection of Westmoreland Road</h2>
   
 <div className={styles.contactInfo}>
    <FreeEstimateForm />
 </div>

 </>
)};