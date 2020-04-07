module.exports = {
  siteMetadata: {
    title: `Arthaus Visual Communicatons Ltd`,
    description: `Multimedia design agency specialising in brand development, creative communications and digital solutions`,
    author: `@ArtHaus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepageAssets`,
        path: `${__dirname}/static/assets/homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arthaus Visual Communications Ltd`,
        short_name: `Arthaus`,
        start_url: `/`,
        background_color: `#f28b00`,
        theme_color: `#f28b00`,
        display: `minimal-ui`,
        icon: `src/images/Arthaus-Logo-Badge.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
