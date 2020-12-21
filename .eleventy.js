const htmlmin = require('html-minifier')
const project = require('./src/_data/project.js')
const CleanCSS = require('clean-css')
const Terser = require('terser')
const svgContents = require('eleventy-plugin-svg-contents')
const util = require('util')

module.exports = function(eleventyConfig) {
  // Watch
  eleventyConfig.addWatchTarget('src/js')
  eleventyConfig.addWatchTarget('src/css')

  // Copy
  eleventyConfig.addPassthroughCopy('src/robots.txt')

  // Embed SVGs
  eleventyConfig.addPlugin(svgContents)

  // Transform to minify HTML
  eleventyConfig.addTransform('html-min', function(content, outputPath) {
    if( outputPath.endsWith('.html') && project.environment === 'production') {
      let minifiedHtml = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minifiedHtml
    }
    return content
  })

  // Adding filter to minify CSS
  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  // Adding filter to minify JS
  eleventyConfig.addFilter('jsmin', function(code) {
    let minified = Terser.minify(code)
    if( minified.error ) {
        console.log("Terser error: ", minified.error)
        return code
    }
    return minified.code
  })

  eleventyConfig.addFilter('dump', function(obj) {
    return util.inspect(obj, { depth: 10 })
  });
  
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
