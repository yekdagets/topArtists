import SingleAlbum from "../components/SingleAlbum";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SingleAlbum',
  component: SingleAlbum,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SingleAlbum {...args} />;

export const Default = Template.bind({});
Default.args = {
    "name": "Can't Feel My Face",
    "playcount": "6790163",
    "listeners": "756677",
    "url": "https://www.last.fm/music/The+Weeknd/_/Can%27t+Feel+My+Face",
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
        "rank": "3"
    }
}