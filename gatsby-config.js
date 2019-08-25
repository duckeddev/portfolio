const path = require("path")

module.exports = {
  siteMetadata: {
    title: "ReactiveDEV",
    author: "Vladislav Ivanov",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:400,500,600`,
          `playfair display\:400, 700, 900`,
          `exo 2\:300,400,500,600,700`,
        ],
      },
    },
    `gatsby-transformer-remark`
  ],
}
