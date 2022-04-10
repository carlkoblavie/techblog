const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css/')
  eleventyConfig.addWatchTarget("src/css/")

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  })

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/posts/*.md')
      .filter(p => (!p.data.draft))
      .reverse()
  })

  eleventyConfig.addCollection('drafts', collection => {
    return collection.getFilteredByTags("draft").reverse()
  })



  return {
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public"
    }
  }
}
