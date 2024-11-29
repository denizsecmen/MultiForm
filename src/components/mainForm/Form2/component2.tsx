import { useContext } from 'react';
import context from '@/context/context';
import styles from './style/style.module.css';
import Image from 'next/image';
import arcade from '../../../images/icon-arcade.svg';
import advanced from '../../../images/icon-advanced.svg';
import pro from '../../../images/icon-pro.svg';
export default function component2() {
  let [progress, chprogress] = useContext(context);
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Online service</div>
        <div className={styles.subtitle}>
          Add-ons help enhance your gaming experience.
        </div>
      </div>
      <div className={styles.selections}>
        <div className={styles.selection}>
          <Image src={arcade} className={styles.image} alt={''} />
          <div className={styles.packet}>Arcade</div>
          <div className={styles.price}> $9/mo</div>
        </div>
        <div className={styles.selection}>
          <Image src={advanced} className={styles.image} alt={''} />
          <div className={styles.packet}>Advanced</div>
          <div className={styles.price}>$12/mo</div>
        </div>
        <div className={styles.selection}>
          <Image src={pro} className={styles.image} alt={''} />
          <div className={styles.packet}> Pro</div>
          <div className={styles.price}>$15/mo</div>
        </div>
      </div>
      <div className={styles.switch}></div>
      <div className={styles.buttons}>
        <button
          className={styles.back}
          onClick={() => {
            chprogress('1');
          }}
        >
          Go Back
        </button>
        <button
          className={styles.next}
          onClick={() => {
            chprogress('3');
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
