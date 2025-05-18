const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addLiquidFilter(
    "formatDate",
    function (date, format = "medium", locale = "en-US") {
      if (!date) return "";

      const options = {
        short: {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
        medium: {
          day: "numeric",
          month: "long",
          year: "numeric",
        },
        long: {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        },
      };

      return new Intl.DateTimeFormat(
        locale,
        options[format] || options.medium
      ).format(new Date(date));
    }
  );

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();

    collection.getAll().forEach((item) => {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        // Handle both string and array tag formats
        if (typeof tags === "string") {
          tags = [tags];
        }

        for (const tag of tags) {
          // Skip certain tags if needed (e.g., "posts" or "all")
          if (["posts", "all"].indexOf(tag) === -1) {
            tagSet.add(tag);
          }
        }
      }
    });

    // Convert Set to Array and sort alphabetically
    return [...tagSet].sort();
  });

  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "blog", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "A blog by Justin Hunter to pollutes your mind",
			subtitle: "Come, read, and sink into the bliss that is mind pollution | Writing about tech, product, life, and more",
			base: "https://polluterofminds.com/",
			author: {
				name: "Justin Hunter",
				email: "justin@polluterofminds.com", // Optional
			}
		}
	});
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
};
