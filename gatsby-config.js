require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ayyes`,
    description: `Aramayis's personal website`,
    author: `@aramayyes`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ayyes`,
        icon: `src/images/favicon.svg`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#275b29',
        showSpinner: false
      }
    }
  ]
}
