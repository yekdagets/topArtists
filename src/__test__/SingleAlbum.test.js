import React from "react";
import { render, screen } from "@testing-library/react";
import SingleAlbum from "../components/SingleAlbum";

it("should render play count when hover", async () => {
    render(<SingleAlbum album={{
        "name": "The Hills",
        "playcount": "7718489",
        "listeners": "778111",
        "url": "https://www.last.fm/music/The+Weeknd/_/The+Hills",
        "streamable": "0",
        "artist": {
            "name": "The Weeknd",
            "mbid": "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
            "url": "https://www.last.fm/music/The+Weeknd"
        },
        "image": [
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "extralarge"
            }
        ],
        "@attr": {
            "rank": "2"
        }
    }} />);
    const plays = screen.getByText(/7718489/i);
    expect(plays).toBeVisible();
  });