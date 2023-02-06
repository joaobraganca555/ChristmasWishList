import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/ViewLists.module.css";
import {
  Box,
  CircularProgress,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

export default function ViewLists() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const results = await fetch("/api/lists");
    setIsLoading(false);
    const resultsJson = results.json();
    setLists(resultsJson.data);
  }

  useEffect(() => {
    fetchData();
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          lists?.map((list) => (
            <div key={"div"} className={styles.card}>
              <Typography variant="h6">{list.listName}</Typography>
              <Divider />
              <List
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Items:
                  </ListSubheader>
                }
              >
                {list.items.map((item) => (
                  <ListItem key={item + "+list"}>
                    <LabelOutlinedIcon style={{ marginRight: "10px" }} />
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
