import React from "react";
import { render, screen } from "@testing-library/react";
import TopArtists from "../components/TopArtists";
import userEvent from "@testing-library/user-event";

// describe("TopArtists Component", function () {
//   it("should have top artist", function () {
//     let { getByText } = render(<TopArtists />);
//     expect(getByText("TOP ARTISTS")).toMatchInlineSnapshot(`
//       <h1>
//         TOP ARTISTS
//       </h1>
//     `);
//   });
// });

it("render top artist header", async () => {
  render(<TopArtists />);
  const headerText = screen.getByText(/top artists/i);
  expect(headerText).toBeInTheDocument();
});

it("should display role:header", async () => {
  render(<TopArtists />);
  const headerText = screen.getByRole("heading", { name: "TOP ARTISTS" });
  expect(headerText).toBeInTheDocument();
});

it("should display title:subtext", async () => {
  render(<TopArtists />);
  const subText = screen.getByTitle("subtext");
  expect(subText).toBeInTheDocument();
});

it("should load artist", async () => {
  render(<TopArtists />);
  const artist = screen.getByTestId("artist");
  expect(artist).toBeInTheDocument();
});

it("render top artist header", async () => {
  render(<TopArtists />);
  const headerText = await screen.findByText(/top artists/i);
  expect(headerText).toBeInTheDocument();
});

it("render top artist header", async () => {
  render(<TopArtists />);
  const headerText =  screen.queryByText(/data not found/i);
  expect(headerText).not.toBeInTheDocument();
});

// it('should display role:header',async()=>{
//     render(<TopArtists/>);
//     const headerText  = screen.getByRole("img");
//     expect(headerText).toBeInTheDocument();
// });

// test('clicking "detail" go to artist page', async () => {
//   render(<TopArtists />)

//   userEvent.click(screen.getByRole('button', {name: /Detail/i}))

//   expect(await screen.findByText(/success/i)).toBeInTheDocument()
// })
