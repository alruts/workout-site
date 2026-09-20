module.exports = function (eleventyConfig) {
  // Copy the CSS folder straight through to the output untouched
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
