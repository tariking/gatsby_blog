import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tag from '../components/tag'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header style={{ paddingBottom: 0 }}>
              <h4
                style={{
                  ...scale(0.3),
                  marginBottom: rhythm(1 / 18),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h4>
              <small>
                {node.frontmatter.published}
                <Tag tags={node.frontmatter.tags} index={true} />
              </small>
            </header>

            <section>
              {/* <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              /> */}
              <p
                style={{
                  ...scale(-1 / 5),
                }}
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___published], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            published(formatString: "YYYY/MM/DD")
            title
            tags
          }
        }
      }
    }
  }
`
