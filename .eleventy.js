module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("filterByTag", function(items, tag) {
    return items.filter(item => item.tags && item.tags.includes(tag));
  });

  eleventyConfig.addFilter("formatAuthors", function(authors) {
    return authors.map(name =>
      name === "T. Jesper Jacobsson" ? `<strong>${name}</strong>` : name
    ).join(", ");
  });
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch targets
  eleventyConfig.addWatchTarget("src/css");

  // Return configuration
  return {
    pathPrefix: "/GroupWebpage/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
