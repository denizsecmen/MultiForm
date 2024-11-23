import styles from './style/style.module.css';
export default function Progress() {
  return (
    <div className={styles.progressSign}>
      <div className={styles.circle}>
        <div className={styles.pnumber}>1</div>
      </div>
      <div className={styles.circle}>
        <div className={styles.pnumber}>2</div>
      </div>
      <div className={styles.circle}>
        <div className={styles.pnumber}>3</div>
      </div>
      <div className={styles.circle}>
        <div className={styles.pnumber}>4</div>
      </div>
    </div>
  );
}
