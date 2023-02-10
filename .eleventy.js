const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["png", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addWatchTarget("style");
  eleventyConfig.addWatchTarget("images");
  eleventyConfig.addWatchTarget("fonts");
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  // New in RSS 1.2.0
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
};