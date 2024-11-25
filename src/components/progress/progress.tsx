import styles from './style/style.module.css';
import { useContext } from 'react';
import context from '@/context/context';
export default function Progress() {
  let [val, t] = useContext(context);
  return (
    <div className={styles.progressSign}>
      <div className={styles.stepbox}>
        <div
          className={`${styles.circle} ${
            val === '1' ? styles.circleColored : ''
          }`}
        >
          <div className={styles.pnumber}>1</div>
        </div>
        <div className={styles.info}>
          <div className={styles.step}>STEP 1</div>
          <div className={styles.infos}>Your info</div>
        </div>
      </div>
      <div className={styles.stepbox}>
        <div
          className={`${styles.circle} ${
            val === '2' ? styles.circleColored : ''
          }`}
        >
          <div className={styles.pnumber}>2</div>
        </div>
        <div className={styles.info}>
          <div className={styles.step}>STEP 2</div>
          <div className={styles.infos}>Select plan</div>
        </div>
      </div>
      <div className={styles.stepbox}>
        <div
          className={`${styles.circle} ${
            val === '3' ? styles.circleColored : ''
          }`}
        >
          <div className={styles.pnumber}>3</div>
        </div>
        <div className={styles.info}>
          <div className={styles.step}>STEP 3</div>
          <div className={styles.infos}>Add-ons</div>
        </div>
      </div>
      <div className={styles.stepbox}>
        <div
          className={`${styles.circle} ${
            val === '4' ? styles.circleColored : ''
          }`}
        >
          <div className={styles.pnumber}>4</div>
        </div>
        <div className={styles.info}>
          <div className={styles.step}>STEP 4</div>
          <div className={styles.infos}>Summary</div>
        </div>
      </div>
    </div>
  );
}
