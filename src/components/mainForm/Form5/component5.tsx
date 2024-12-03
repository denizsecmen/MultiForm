import styles from './style/style.module.css';
import Image from 'next/image';
import thankyou from '../../../images/icon-thank-you.svg';
export default function component5() {
  return (
    <div className={styles.component}>
      <div className={styles.img}>
        <Image src={thankyou} alt={''}></Image>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>Thank you!</div>
        <div className={styles.textside}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </div>
      </div>
    </div>
  );
}
