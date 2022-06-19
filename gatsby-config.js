module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    
    { 
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      } 
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ym7w25mipkl4`,
        accessToken: `6yNzgQ1g_9dNF8h-UJIQ38V-IYYi-HK6zHfpozT0_j8`,
        forceFullSync: true,
      }
    },
    
    
  ],}
