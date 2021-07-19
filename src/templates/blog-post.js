import React from 'react'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
import LayoutPost from '../components/layout-post'
import SEO from '../components/seo'
import { scale } from '../utils/typography'
import Tag from '../components/tag'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const toc = data.markdownRemark.tableOfContents

  return (
    <LayoutPost location={location} title={siteTitle} toc={toc}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <div className="postpublished">
            投稿日 {post.frontmatter.published}
          </div>
          <h1 itemProp="headline" className="posttitle">
            {post.frontmatter.title}
          </h1>
          <Tag tags={post.frontmatter.tags} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          style={{
            ...scale(-1 / 5),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
            fontSize: 14,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </LayoutPost>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        published(formatString: "YYYY/MM/DD")
        tags
      }
    }
  }
`
