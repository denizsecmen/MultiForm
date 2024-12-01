import context from '@/context/context';
import styles from './style/style.module.css';
import { useContext } from 'react';
export default function component4() {
  let [progress, chprogress] = useContext(context);
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Finishing up</div>
        <div className={styles.subtitle}>
          Double-check everything looks OK before confirming.
        </div>
        <div className={styles.checks}>
          <div className={styles.check}>
            <input type="checkbox" />
          </div>
          <div className={styles.check}>
            <input type="checkbox" />
          </div>
          <div className={styles.check}>
            <input type="checkbox" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.back}
            onClick={() => {
              chprogress('3');
            }}
          >
            Go Back
          </button>
          <button
            className={styles.next}
            onClick={() => {
              chprogress('5');
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
