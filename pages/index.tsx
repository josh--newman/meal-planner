import Head from "next/head";
import styles from "../styles/Home.module.css";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ isConnected }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meal planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fancy Meal Planner App</h1>
        <p className={styles.description}>We need a better name...</p>
        <p>{isConnected ? "Connected to DB" : "DB connection failed"}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
