import { useContext } from 'react';
import context from '@/context/context';
import styles from './style/style.module.css';
export default function Component1() {
  let [progress, chprogress] = useContext(context);
  return (
    <div className={styles.component}>
      <div className={styles.title}> Personal info</div>
      <div className={styles.info}>
        Please provide your name, email address, and phone number.
      </div>
      <div className={styles.form}>
        <form>
          <div className={styles.nameTitle}>Name</div>
          <input type="text" className={styles.name}></input>
          <div className={styles.emailTitle}>Email Address</div>
          <input type="email" className={styles.email}></input>
          <div className={styles.telephone}>Phone Number</div>
          <input type="tel" className={styles.phone}></input>
          <div className={styles.next}>
            <button className={styles.button}>Next Page</button>
          </div>
        </form>
      </div>
    </div>
  );
}
