import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/CreateList.module.css";

export default function CreateList() {
  return (
    <main className={styles.main}>
      <div className={styles.divTitle}>
        <Link className={styles.arrowBack} href="/">
          &larr;
        </Link>
        <h1 className={styles.title}>Criação de lista</h1>
      </div>

      {/* <p className={styles.description}>
        Crie a sua própria lista para que os outros a possam ver :)
      </p> */}

      <div className={styles.grid}>
        <a className={styles.card}>
          <h2>Preencha</h2>
          <form action="/send-data-here" method="post">
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              color="primary"
            />

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>

            <Button variant="outlined">Submeter</Button>
          </form>
        </a>
      </div>
    </main>
  );
}
