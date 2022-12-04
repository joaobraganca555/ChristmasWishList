import Link from "next/link";
import styles from "../../styles/CreateList.module.css";

export async function getServerSideProps(context) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allLists = await res.json();

  return {
    props: { allLists },
  };
}

export default function CreateList({ allLists }) {
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
            {console.log(process.env)}
            {/* {allLists.data[0].items.map((i) => (
              <li key={`item+${i}`}>{i}</li>
            ))} */}
          </ul>
        </a>
      </div>
    </main>
  );
}
