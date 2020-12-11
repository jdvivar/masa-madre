const htmlmin = require('html-minifier')
const project = require('./src/_data/project.js')
const CleanCSS = require('clean-css')
const Terser = require('terser')
const svgContents = require('eleventy-plugin-svg-contents')
const util = require('util')
const addWebComponentDefinitions = require('eleventy-plugin-add-web-component-definitions')

module.exports = function(eleventyConfig) {
  // Watch
  eleventyConfig.addWatchTarget('src/js')
  eleventyConfig.addWatchTarget('src/css')

  // Copy
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('web_modules')
  eleventyConfig.addPassthroughCopy('src/videos')
  eleventyConfig.addPassthroughCopy('src/images')
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

  eleventyConfig.addPlugin(addWebComponentDefinitions, {
    // path: tag => project.environment === 'production'
    //     ? `/upgrade-hub-web/js/components/${tag}/${tag}.js`
    //     : `/js/components/${tag}/${tag}.js`
    // }
    path: tag => `/js/components/${tag}/${tag}.js`
    }
  )

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

  // Adding filter add a slot attribute with a name
  eleventyConfig.addFilter('addSlot', (content, name) => content.replace(/^<\w*/gi, match => `${match} slot="${name}"`))

  function cursosOrdered(collectionApi) {
    return collectionApi.getFilteredByTag('cursos').sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  }

  // Adding custom sort for cursos
  eleventyConfig.addCollection('cursosOrdered', cursosOrdered);

  eleventyConfig.addFilter('dump', function(obj) {
    return util.inspect(obj, { depth: 10 })
  });

  eleventyConfig.addCollection('formOptions', function(collectionApi) {
    const cursos = cursosOrdered(collectionApi)
    const array = cursos.map(curso => {
      return {
        title: curso.data.title,
        options: curso.data.options.map(option => { return { date: option.date, title: option.title } })
      }
    })
    return JSON.stringify(array)
  })
  
  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
