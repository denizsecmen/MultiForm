import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Progress from '@/components/progress/progress';
import Component1 from '@/components/mainForm/Form1/component1';
import context from '@/context/context';
import { useState } from 'react';
export default function Home() {
  let [val, chval] = useState('1');
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <context.Provider value={[val, chval]}>
        <div className={styles.body}>
          <div className={styles.form}>
            <div className={styles.progress}>
              <Progress />
            </div>
            <div className={styles.main}></div>
            <Component1 />
          </div>
        </div>
      </context.Provider>
    </>
  );
}
