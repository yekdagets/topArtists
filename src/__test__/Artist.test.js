import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import Artist from "../components/Artist";
import { BrowserRouter } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail";

const MockArtist = ({ artistInfo }) => {
  return (
    <BrowserRouter>
      <Artist artistInfo={artistInfo} />
    </BrowserRouter>
  );
};

const MockArtistDetail = ({}) => {
  return (
    <BrowserRouter>
      <ArtistDetail />
    </BrowserRouter>
  );
};

it("should render artist component ", async () => {
  render(
    <MockArtist
      artistInfo={{
        name: "The Weeknd",
        playcount: "245110219",
        listeners: "2381073",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      }}
    />
  );
  const artistText = screen.getByText(/The Weeknd/i);
  expect(artistText).toBeInTheDocument();
});


it("should go artist detail ", async () => {
  const { getByText } = render(
    <MockArtist
      artistInfo={{
        name: "The Weeknd",
        playcount: "245110219",
        listeners: "2381073",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      }}
    />
  );
  const node = getByText("Detail");
  fireEvent.click(node);
});
