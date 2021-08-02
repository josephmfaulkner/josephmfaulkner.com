module.exports = {
  siteMetadata: {
    name: "Joseph Faulkner",
    jobtitle: "Fullstack Developer",
    location: "Sacramento, CA",
    description: "My personal webpage",
    favicon: "none"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-data`,
        path: `${__dirname}/src/site-data/`,
      },
    }
  ],
};