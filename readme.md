# bgoonz.dev

The code for my personal blog3. I use it to write about physics, machine learning, sustainability and web development.

The site is fully responsive, built with [Gatsby](https://gatsbyjs.org), has [fluid typography](https://css-tricks.com/snippets/css/fluid-typography), relies heavily on [React Hooks](https://reactjs.org/docs/hooks-intro) for stateful function components and CSS grid for layout. It uses the following libraries:

- [**MDX**](https://mdxjs.com) for interactive content
- [**styled-components**](https://styled-components.com) for appearance
- [**KaTeX**](https://katex.org) for typesetting math
- [**gatsby-remark-vscode**](https://gatsbyjs.org/packages/gatsby-remark-vscode) for syntax highlighting
- [**Disqus**](https://disqus.com) for blog3 post comments
- [**Algolia**](https://algolia.com) for custom search
- [**react-spring**](https://react-spring.io) for animations

Feel free to reuse the whole or any part of this repo to create your own Gatsby site.

## Installation

To get this site running locally, you need to have installed [`git`](https://git-scm.com), [`gatsby-cli`](https://gatsbyjs.org/docs/gatsby-cli) and [`yarn`](https://yarnpkg.com) (or [`npm`](https://npmjs.com)). Then follow these steps:

1. Clone the repo to your machine and change into its directory.

   ```sh
   git clone https://github.com/bgoonz/blog3 \
   && cd blog3
   ```

2. Optionally setup `git` hooks (recommended if you intend to open a PR).

   ```sh
   git config core.hooksPath src/utils/gitHooks \
   && chmod -R u+x src/utils/gitHooks
   ```

3. Install dependencies.

   ```sh
   yarn
   ```

4. Start the dev server. This may take a while on initial compilation since the site uses quite a lot of images which Gatsby creates thumbnails of and then caches.

   ```sh
   gatsby develop
   ```

## Deployment

The easiest way to get this site published is as follows:

1. Create an account with [netlify](https://netlify.com).

2. Install the [`netlify-cli`](https://netlify.com/docs/cli).

3. Login to your account.

   ```sh
   netlify login
   ```

4. Connect your GitHub repo with your netlify account for [continuous deployment](https://docs.netlify.com/cli/get-started/#usage-data-collection).

   ```sh
   netlify init
   ```

5. Finally deploy the site with

   ```sh
   netlify deploy
   ```

## rename this file to .env and supply the values listed below

## also make sure they are available to the build tool (e.g. netlify)

## warning: variables prexifed with GATSBY_ will be made available to client-side code

## be careful not to expose sensitive data

GATSBY_ALGOLIA_APP_ID=insertValue
GATSBY_ALGOLIA_SEARCH_KEY=insertValue
ALGOLIA_ADMIN_KEY=insertValue

GOOGLE_ANALYTICS_ID=insertValue
GATSBY_GOOGLE_MAPS_API_KEY=insertValue

## enables Disqus comments below blog3 posts

GATSBY_DISQUS_NAME=insertValue
