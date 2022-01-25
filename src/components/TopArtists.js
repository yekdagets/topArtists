import React, { useEffect, useState } from "react";
import axios from "axios";
import Artist from "./Artist";
import { Grid, Stack, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './TopArtists.module.css'



export default function TopArtists() {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    fetchTopArtists();
  }, []);

  async function fetchTopArtists() {
    try {
      const result = await axios.get(
        "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=77d1244d5b15491cb9a08dd4b2940599&format=json"
      );
      setTopArtists(result.data.artists.artist);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8}>
        <h1 className={styles.topartistText}>TOP ARTISTS</h1>
        <InfiniteScroll
          dataLength={topArtists.length}
          loader={<h4>Loading...</h4>}
          height={700}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b title="subtext">Top {topArtists.length} Artist has been shown!</b>
            </p>
          }
        >
          {topArtists.map((i, index) => (
            <div  className={styles.artistBox} key={index}>
              <Typography  className={styles.indexNo}>#{index+1}</Typography>
              <Artist data-testid="artist" artistInfo={topArtists[index]} />
            </div>
          ))}
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
}
