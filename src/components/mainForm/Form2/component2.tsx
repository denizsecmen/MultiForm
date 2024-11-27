import styles from './style/style.module.css';
export default function component2() {
  return (
    <div className={styles.component}>
      <div className={styles.title}> Online service</div>
      <div className={styles.subtitle}>
        Add-ons help enhance your gaming experience.
      </div>
      <div className={styles.selections}>
        <div className={styles.selection}>
          Online service Access to multiplayer games +$1/mo
        </div>
        <div className={styles.selection2}>
          Larger storage Extra 1TB of cloud save +$2/mo
        </div>
        <div className={styles.selection3}>
          Customizable Profile Custom theme on your profile +$2/mo
        </div>
        <div className={styles.switch}></div>
        <div className={styles.buttons}></div>
      </div>
    </div>
  );
}
