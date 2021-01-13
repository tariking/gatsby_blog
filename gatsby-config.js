module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    title: `gg-box Blog`,
    titleAlt: 'gg-box Blog', // JSONLDのためのタイトル
    shortName: 'gg-box Blog', // サイトの略称、12文字以下
    author: {
      name: `tariking`,
      summary: `フリーランスのフロントエンジニア`,
    },
    logo: 'content/assets/gg-box.png',
    banner: 'content/assets/gg-box.png',
    favicon: 'content/assets/gg-box.png', // ファビコン
    description: `Webフロントエンジニアが技術的に困ったことを解決するブログ`,
    siteUrl: 'http://gg-box.com/',
    siteLanguage: 'ja', // HTMLの言語（ここでは日本語）
    themeColor: '#ff6588',
    backgroundColor: '#ffffff',
    social: {
      twitter: `@gg-box10`,
      github: 'tariking',
    },
    repo: 'https://github.com/tariking/gatsby_blog/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'CONTENTS',
              tight: false,
              fromHeading: 1,
              toHeading: 4,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs-title`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.published,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: {order: DESC, fields: [frontmatter___published]},
    //             filter: {frontmatter: {draft: {eq: false}}}
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 fields {
    //                   slug
    //                 }
    //                 frontmatter {
    //                   title
    //                   published
    //                 }
    //               }
    //             }
    //           }
    //         }
    //         `,
    //         output: `rss.xml`,
    //         title: 'gg-box.com RSS Feed',
    //       },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gg-box Blog`,
        short_name: `gg-box`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6588`,
        display: `minimal-ui`,
        icon: `content/assets/gg-box.png`,
        icons: [
          {
            src: `/favicons/gg-box180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-dark-mode',
  ],
}
