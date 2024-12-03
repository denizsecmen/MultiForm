import context from '@/context/context';
import styles from './style/style.module.css';
import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
} from 'react';
interface Component4Props {
  cost: number;
}
export const component4: React.FC<Component4Props> = function component4({
  cost,
}) {
  let [progress, chprogress] = useContext(context);

  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Finishing up</div>
        <div className={styles.subtitle}>
          Double-check everything looks OK before confirming.
        </div>
      </div>
      <div className={styles.totalcost}>{cost}</div>
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
  );
};
