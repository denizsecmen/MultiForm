import context from '@/context/context';
import styles from './style/style.module.css';
import { useContext } from 'react';
export default function component3() {
  let [progress, chprogress] = useContext(context);
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Pick add-ons</div>
        <div className={styles.subtitle}>
          Add-ons help enhance your gaming experience.
        </div>
      </div>
      <div className={styles.checks}></div>
      <div className={styles.buttons}>
        <button
          className={styles.back}
          onClick={() => {
            chprogress('2');
          }}
        >
          Go Back
        </button>
        <button
          className={styles.next}
          onClick={() => {
            chprogress('4');
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
