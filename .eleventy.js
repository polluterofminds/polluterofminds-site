const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addWatchTarget("images");
  eleventyConfig.addWatchTarget("fonts");
  eleventyConfig.addWatchTarget("fonts");
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  // New in RSS 1.2.0
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
};