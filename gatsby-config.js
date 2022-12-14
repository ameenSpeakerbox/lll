module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
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
