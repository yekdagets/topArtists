import React, { useEffect,useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import styles from "./TopArtists.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function SingleAlbum(album) {
  const { height, width } = useWindowDimensions();
  const [image, setImage] = useState(
    album.album.image[1]["#text"] ? album.album.image[1]["#text"] : " "
  );

  useEffect(() => {
    if (width < 800) {
      setImage(album.album.image[0]["#text"]);
    } else if (width < 1200 && width > 801) {
      setImage(album.album.image[1]["#text"]);
    } else if (width > 1600) {
      setImage(album.album.image[2]["#text"]);
    }
  }, [height, width]);

  return (
    <Grid container className={styles.albumBox}>
      <Grid item xs={2} className={styles.singleAlbumImg}>  
        <img src={image} alt="Logo" />
      </Grid>
      <Grid item xs={8} sx={{ ml: "4vw" }}>
        <Stack direction="column" sx={{ mt: "1vw" }}>
          <Typography className={styles.singleArtist}>
            {album.album.artist.name}
          </Typography>

          <Typography className={styles.singleAlbum}>
            {album.album.name}
            <div className={styles.showmeonhover}>
              <Typography> &nbsp; --&gt; </Typography>
              {album.album.playcount}
              <Typography> &nbsp; plays</Typography>
            </div>
          </Typography>
        </Stack>
      </Grid>
      {/* <Grid item xs={2}>
        <Stack direction="row"></Stack>
      </Grid> */}
    </Grid>
  );
}
