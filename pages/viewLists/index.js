import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/ViewLists.module.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

export default function ViewLists({ allLists }) {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const results = await fetch("/api/lists");
    const resultsJson = await results.json();
    setLists(resultsJson.data);
  }
  
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
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
        {lists?.map((list) => (
          <div key={"div"} className={styles.card}>
            <Typography variant="h6">
              {isLoading ? "List" : list.listName}
            </Typography>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Items:
                </ListSubheader>
              }
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                list.items.map((item) => (
                  <ListItem key={item + "+list"}>
                    <LabelOutlinedIcon style={{ marginRight: "10px" }} />
                    <ListItemText primary={item} />
                  </ListItem>
                ))
              )}
            </List>
          </div>
        ))}
      </div>
    </main>
  );
}
