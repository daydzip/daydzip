module.exports = {
  eleventyComputed: {
    permalink: (data) => (data.draft ? false : data.permalink),
  },
};
