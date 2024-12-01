import context from '@/context/context';
import styles from './style/style.module.css';
import { useContext } from 'react';
export default function component3() {
  let [progress, chprogress] = useContext(context);
  /*  Online service
  Access to multiplayer games
  +$1/mo

  Larger storage
  Extra 1TB of cloud save
  +$2/mo

  Customizable Profile
  Custom theme on your profile
  +$2/mo
*/
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Pick add-ons</div>
        <div className={styles.subtitle}>
          Add-ons help enhance your gaming experience.
        </div>
      </div>
      <div className={styles.checks}>
        <div className={styles.check}>
          <input type="checkbox" />
          <div className={styles.info}>
            <div className={styles.ctitle}>Online service</div>
            <div className={styles.csubtitle}>Access to multiplayer games</div>
          </div>
          <div className={styles.price}>+$1/mo</div>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <div className={styles.info}>
            <div className={styles.ctitle}> Larger storage</div>
            <div className={styles.csubtitle}> Extra 1TB of cloud save</div>
          </div>
          <div className={styles.price}> +$2/mo</div>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <div className={styles.info}>
            <div className={styles.ctitle}> Customizable Profile</div>
            <div className={styles.csubtitle}>
              {' '}
              Custom theme on your profile
            </div>
          </div>
          <div className={styles.price}> +$2/mo</div>
        </div>
      </div>
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
