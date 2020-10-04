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
    url: 'http://gg-box.com', // スラッシュなしのサイトURL
    siteURL: 'http://gg-box.com/', // スラッシュありのサイトURL
    siteLanguage: 'ja', // HTMLの言語（ここでは日本語）
    themeColor: '#ff6588',
    backgroundColor: '#ffffff',
    social: {
      twitter: `@gg-box10`,
    },
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: {order: DESC, fields: [frontmatter___date]},
                filter: {frontmatter: {draft: {eq: false}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: `rss.xml`,
          },
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
    `gatsby-plugin-offline`,
  ],
}
