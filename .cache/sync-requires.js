const { hot } = require('react-hot-loader/root')

// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  'component---cache-dev-404-page-js': hot(
    preferDefault(require('/workspace/blog3/.cache/dev-404-page.js'))
  ),
  'component---src-pages-blog-js': hot(
    preferDefault(require('/workspace/blog3/src/pages/blog.js'))
  ),
  'component---src-pages-index-js': hot(
    preferDefault(require('/workspace/blog3/src/pages/index.js'))
  ),
  'component---src-pages-nature-js': hot(
    preferDefault(require('/workspace/blog3/src/pages/nature.js'))
  ),
}
