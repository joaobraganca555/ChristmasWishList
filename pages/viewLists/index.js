import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/CreateList.module.css";

export default function CreateList({ allLists }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch("/api/lists");
      const resultsJson = await results.json();
      console.log(resultsJson);
      setLists(resultsJson.data[0]);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.divTitle}>
        <Link className={styles.arrowBack} href="/">
          &larr;
        </Link>
        <h1 className={styles.title}>Listas</h1>
      </div>

      <div className={styles.grid}>
        <a className={styles.card}>
          <ul>
            {lists?.items?.map((i) => (
              <li key={`item+${i}`}>{i}</li>
            ))}
          </ul>
        </a>
      </div>
    </main>
  );
}
