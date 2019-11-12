var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Follow Me Into The Night | Unique Photography by Twilightscapes',
    siteUrl: `https://twilightscapes.netlify.com`,
    description:
      'Twilightscapes brings new definitions to the genre of night photography. Experience some of the most remote, desolate locations photographed in the dead of night by world renown night photographer Todd Lambert.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
   
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img/gallery1`,
        name: 'gallery',
      },
    },
    
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },


    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_self",
          rel: "nofollow"
        }
      }
        ],
      },
    },
    
    
    
    
    
    
    
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    
    
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Twilightscapes`,
        short_name: `Twilightscapes`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/img/tw-logo-white.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        TrackingId: 'UA-49869143-1',
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
