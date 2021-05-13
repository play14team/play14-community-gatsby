require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Community`,
    titleTemplate: "%s · #play14",
    description: `#play14 - We belive in playfulness`,
    url: `https://play14.org`,
    image: `logo.png`,
    author: `Cédric Pontet`,
    email: `team@play14.org`,
    twitterUsername: `play14team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `#play14 community website`,
        short_name: `play14`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
        defaults: {
          formats: [`AUTO`, `WEBP`, `AVIF`],
          placeholder: `BLURRED`
        }
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `event`, 
          `player`,
          `game`,
          `blog`
        ],
        //If using single types place them in this array.
        singleTypes: [
          `contact`,
          `history`,
          `manifesto`,
          `code-of-conduct`
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
