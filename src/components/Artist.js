import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography, Divider, Button } from "@mui/material";
import styles from "./Artist.module.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Artist(artistInfo) {
    console.log('Artistinfo',artistInfo)
    const { height, width } = useWindowDimensions();
    const [image, setImage] = useState(
        artistInfo.artistInfo.image[1]["#text"] ? artistInfo.artistInfo.image[1]["#text"] : " "
      );
    
      useEffect(() => {
        if (width < 800) {
          setImage(artistInfo.artistInfo.image[0]["#text"]);
        } else if (width < 1200 && width > 801) {
          setImage(artistInfo.artistInfo.image[1]["#text"]);
        } else if (width > 1600) {
          setImage(artistInfo.artistInfo.image[2]["#text"]);
        }
      }, [height, width]);
 

  return (
    <Grid container>
      <Grid item xs={2} className={styles.imageDiv}>
        <img src={image} alt="Logo" />
      </Grid>
      <Grid item xs={4}>
        <Stack direction="column">
          <Typography className={styles.artistText}>Artist</Typography>
          <Divider className={styles.divider} />
          <Typography className={styles.artistName}>
            {artistInfo.artistInfo.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="column" alignItems="center">
          <Typography className={styles.listeners}>
            Listeners: {artistInfo.artistInfo.listeners}
          </Typography>
          <Typography className={styles.listeners}>
            Play Count: {artistInfo.artistInfo.playcount}
          </Typography>
          <div className={styles.detailButton}>
            <Link to={`/artistDetail?artist=${artistInfo.artistInfo.name}`}>
              <Button>
                <Typography className={styles.detailText}>Detail</Typography>
              </Button>
            </Link>
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
}
