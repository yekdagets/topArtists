import Artist from '../components/Artist'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Artist',
  component: Artist,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Artist {...args} />;

export const Default = Template.bind({});
Default.args = {
    "name": "Radiohead",
    "playcount": "599086535",
    "listeners": "5340024",
    "mbid": "a74b1b7f-71a5-4011-9441-d0b5e4122711",
    "url": "https://www.last.fm/music/Radiohead",
    "streamable": "0",
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
        },
        {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "mega"
        }
    ]
}
