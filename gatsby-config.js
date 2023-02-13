module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hezjgku5we4o`,
        accessToken: `-Fh6RLTAFvmFZsijqBn0jLf0xdBNZbUo8mkuVyJFJVg`,
        // host: `preview.contentful.com`,
      },
    },
  ],

}
