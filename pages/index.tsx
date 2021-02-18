import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meal planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fancy Meal Planner App</h1>
        <p className={styles.description}>We need a better name...</p>
      </main>
    </div>
  );
}
