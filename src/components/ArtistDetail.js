import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Grid, Typography, Divider, Stack } from "@mui/material";
import styles from "./ArtistDetail.module.css";
import SingleAlbum from "./SingleAlbum";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function ArtistDetail() {
  const [searchParams] = useSearchParams();
  const artist = searchParams.get("artist");
  const { height, width } = useWindowDimensions();

  const [topAlbums, setTopAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    fetchTopAlbums();
    fetchTopTracks();
  }, []);

  useEffect(() => {
    if (width < 800) {
      setProfileImg(topAlbums[0].image[0]["#text"]);
    } else if (width < 1200 && width > 801) {
      setProfileImg(topAlbums[0].image[1]["#text"]);
    } else if (width > 1600) {
      setProfileImg(topAlbums[0].image[2]["#text"]);
    }
  }, [height, width]);

  async function fetchTopAlbums() {
    try {
      const result = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=77d1244d5b15491cb9a08dd4b2940599&format=json`
      );
      setTopAlbums(result.data.topalbums.album.slice(0, 4));
      setProfileImg(result.data.topalbums.album.slice(0, 4)[0].image[1]["#text"]);
      if (!result.data) {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchTopTracks() {
    try {
      const result = await axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=77d1244d5b15491cb9a08dd4b2940599&format=json`
      );
      setTopTracks(result.data.toptracks.track.slice(0, 4));
      if (!result.data) {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid
        item
        xs={8}
        className={styles.artistBox}
        display={"flex"}
        flexDirection={"row"}
      >
        <Grid item xs={2} >
          <img className={styles.img} src={profileImg} alt="Logo" />
        </Grid> 
        <Grid item xs={6}>
          <Typography className={styles.artistName}>{artist}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row">
          <Grid item xs={6}>
            <Typography style={{marginTop:'2vh'}}>Top Albums</Typography>
            <Divider style={{ marginBottom: "15px" }} />
            {topAlbums.map((album) => (
              <SingleAlbum album={album} />
            ))}
          </Grid>
          <Grid item xs={6} className={styles.topTracks}>
            <Typography style={{marginTop:'2vh'}}>Top Tracks</Typography>
            <Divider style={{ marginBottom: "15px" }} />
            {topTracks.map((track) => (
              <SingleAlbum album={track} />
            ))}
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
