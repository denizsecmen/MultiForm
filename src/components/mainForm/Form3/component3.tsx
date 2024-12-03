import context from '@/context/context';
import styles from './style/style.module.css';
import { useContext, useReducer, useState } from 'react';

type State = [boolean, boolean, boolean];
type Action = { type: number };
interface Component3Props {
  sendDataToParent: (data: number | string) => void;
}

export const component3: React.FC<Component3Props> = function ({
  sendDataToParent,
}) {
  function changer(stat: State, action: Action): State {
    switch (action.type) {
      case 1:
        return [!stat[0], stat[1], stat[2]];
      case 2:
        return [stat[0], !stat[1], stat[2]];
      case 3:
        return [stat[0], stat[1], !stat[2]];
      default:
        return stat;
    }
  }
  let [state, dispatch] = useReducer(changer, [false, false, false]);
  let [progress, chprogress] = useContext(context);
  let [ccost, chhcost] = useState(0);
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}>Pick add-ons</div>
        <div className={styles.subtitle}>
          Add-ons help enhance your gaming experience.
        </div>
      </div>
      <div className={styles.checks}>
        <div
          className={styles.check}
          onClick={() => {
            dispatch({ type: 1 });
            chhcost(ccost + 1);
          }}
        >
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
        <div
          className={styles.check}
          onClick={() => {
            dispatch({ type: 2 });
            chhcost(ccost + 2);
          }}
        >
          <div className={styles.f}>
            <input
              type="checkbox"
              checked={state[1]}
              className={styles.checkbox}
            />
            <div className={styles.info}>
              <div className={styles.ctitle}>Larger storage</div>
              <div className={styles.csubtitle}>Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className={styles.price}>+$2/mo</div>
        </div>
        <div
          className={styles.check}
          onClick={() => {
            dispatch({ type: 3 });
            chhcost(ccost + 2);
          }}
        >
          <div className={styles.f}>
            <input
              type="checkbox"
              checked={state[2]}
              className={styles.checkbox}
            />
            <div className={styles.info}>
              <div className={styles.ctitle}>Customizable Profile</div>
              <div className={styles.csubtitle}>
                Custom theme on your profile
              </div>
            </div>
          </div>
          <div className={styles.price}>+$2/mo</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.back}
          onClick={() => {
            sendDataToParent('*');
            chprogress('2');
          }}
        >
          Go Back
        </button>
        <button
          className={styles.next}
          onClick={() => {
            chprogress('4');
            sendDataToParent(ccost);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
