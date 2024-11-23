import Head from 'next/head';
import styles from '@/styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.form}>
          <div className={styles.progress}></div>
          <div className={styles.form}></div>
        </div>
      </div>
    </>
  );
}
