import { useContext, useState } from 'react';
import context from '@/context/context';
import styles from './style/style.module.css';
import Image from 'next/image';
import arcade from '../../../images/icon-arcade.svg';
import advanced from '../../../images/icon-advanced.svg';
import pro from '../../../images/icon-pro.svg';
import { Stack, Switch, Typography } from '@mui/material';
export default function component2() {
  let [progress, chprogress] = useContext(context);
  let [a, cha] = useState(0);
  let [b, chb] = useState(0);
  let [c, chc] = useState(0);
  return (
    <div className={styles.component}>
      <div className={styles.headers}>
        <div className={styles.title}> Online service</div>
        <div className={styles.subtitle}>
          Add-ons help enhance your gaming experience.
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
            } else {
              cha(1);
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
            } else {
              chb(1);
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
            } else {
              chc(1);
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
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
