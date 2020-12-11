module.exports = {
  environment: process.env.ELEVENTY_ENV,
  relativeUrl: function (url) {
    // if (url.startsWith('http')) return url
    // if (this.environment === 'production') {
    //   return '/upgrade-hub-web'.concat(url)
    // }
    return url
  },
  version: process.env.npm_package_version,
  timestamp: new Date()
}
