module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addWatchTarget("images");
  eleventyConfig.addWatchTarget("fonts");
  eleventyConfig.addWatchTarget("fonts");
};