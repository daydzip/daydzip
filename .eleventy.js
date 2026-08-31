module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("dateReadable", function (dateObj) {
    const d = new Date(dateObj);
    return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  });
  eleventyConfig.addFilter("dateShort", function (dateObj) {
    const d = new Date(dateObj);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  });
  eleventyConfig.addFilter("initial", function (str) {
    return (str || "").trim().charAt(0).toUpperCase();
  });
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
