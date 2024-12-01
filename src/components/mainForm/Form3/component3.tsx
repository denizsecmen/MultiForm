import context from '@/context/context';
import styles from './style/style.module.css';
import { useContext, useReducer } from 'react';
export default function component3() {
  function changer(
    stat: [boolean, boolean, boolean],
    action: { type: String }
  ) {
    if (action.type == '1') {
      stat[0] = !stat[0];
    } else if (action.type == '2') {
      stat[1] = !stat[1];
    } else {
      stat[0] = !stat[2];
    }
    return stat;
  }
  let [state, dispatch] = useReducer(changer, [false, false, false]);
  let [progress, chprogress] = useContext(context);
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
          <div className={styles.f}>
            <input
              type="checkbox"
              checked={state[0]}
              className={styles.checkbox}
            />
            <div className={styles.info}>
              <div className={styles.ctitle}>Online service</div>
              <div className={styles.csubtitle}>
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className={styles.price}>+$1/mo</div>
        </div>
        <div className={styles.check}>
          <div
            className={styles.f}
            onClick={() => {
              dispatch({ type: '1' });
            }}
          >
            <input
              type="checkbox"
              checked={state[1]}
              className={styles.checkbox}
            />
            <div className={styles.info}>
              <div className={styles.ctitle}> Larger storage</div>
              <div className={styles.csubtitle}> Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className={styles.price}> +$2/mo</div>
        </div>
        <div className={styles.check}>
          <div className={styles.f}>
            <input
              type="checkbox"
              checked={state[2]}
              className={styles.checkbox}
            />
            <div className={styles.info}>
              <div className={styles.ctitle}> Customizable Profile</div>
              <div className={styles.csubtitle}>
                Custom theme on your profile
              </div>
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
