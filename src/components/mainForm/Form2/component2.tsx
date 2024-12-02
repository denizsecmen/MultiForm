import { useContext, useState } from 'react';
import context from '@/context/context';
import styles from './style/style.module.css';
import Image from 'next/image';
import arcade from '../../../images/icon-arcade.svg';
import advanced from '../../../images/icon-advanced.svg';
import pro from '../../../images/icon-pro.svg';
import { Stack, Switch, Typography } from '@mui/material';
interface Component2Props {
  sendDataToParent: (data: number) => void; // Expecting a number to be sent to the parent
}

export const component2: React.FC<Component2Props> = function ({
  sendDataToParent,
}) {
  let [progress, chprogress] = useContext(context);
  let [curtotal, chtotal] = useState(0);
  let [a, cha] = useState(0);
  let [b, chb] = useState(0);
  let [c, chc] = useState(0);
  function az() {
    sendDataToParent(curtotal);
  }
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Online service</div>
        <div className={styles.subtitle}>
          You have the option of monthly or yearly billing.
        </div>
      </div>
      <div className={styles.selections}>
        <div
          className={`${styles.selection} ${
            a == 1 ? styles.selectionActive : ''
          }`}
          onClick={() => {
            if (a == 1) {
              cha(0);
              chtotal(curtotal - 9);
            } else {
              cha(1);
              chtotal(curtotal + 9);
            }
          }}
          tabIndex={1}
        >
          <Image src={arcade} className={styles.image} alt={''} />
          <div className={styles.packet}>Arcade</div>
          <div className={styles.price}> $9/mo</div>
        </div>
        <div
          onClick={() => {
            if (b == 1) {
              chb(0);
              chtotal(curtotal - 12);
            } else {
              chb(1);
              chtotal(curtotal + 12);
            }
          }}
          tabIndex={2}
          className={`${styles.selection} ${
            b == 1 ? styles.selectionActive : ''
          }`}
        >
          <Image src={advanced} className={styles.image} alt={''} />
          <div className={styles.packet}>Advanced</div>
          <div className={styles.price}>$12/mo</div>
        </div>
        <div
          onClick={() => {
            if (c == 1) {
              chc(0);
              chtotal(curtotal - 15);
            } else {
              chc(1);
              chtotal(curtotal + 15);
            }
          }}
          className={`${styles.selection} ${
            c == 1 ? styles.selectionActive : ''
          }`}
          tabIndex={3}
        >
          <Image src={pro} className={styles.image} alt={''} />
          <div className={styles.packet}> Pro</div>
          <div className={styles.price}>$15/mo</div>
        </div>
      </div>
      <div className={styles.switch}>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Typography>Monthly</Typography>
          <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Yearly</Typography>
        </Stack>
      </div>
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
            az();
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
