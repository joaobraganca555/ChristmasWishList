import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christmas Wish List</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Bem vindo à lista de prendas!</h1>
          <Image
            src="/../public/gift.png"
            alt="Gift"
            width={100}
            height={100}
          />
        </div>

        <p className={styles.description}>
          Crie a sua própria lista para que os outros a possam ver :)
        </p>

        <div className={styles.grid}>
          <Link href="/createList" className={styles.card}>
            <h2>Criar lista &rarr;</h2>
            <p>Crie a sua lista de prendas!</p>
          </Link>

          <a href="/viewLists" className={styles.card}>
            <h2>Ver listas &rarr;</h2>
            <p>Veja todas as outras listas!</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
