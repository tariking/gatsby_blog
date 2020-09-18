import React from 'react'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'
import LayoutPage from '../components/layout-page'

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author.name
  const group = data.allMarkdownRemark.group

  return (
    <div>
      <Helmet title={siteTitle} />
      <LayoutPage location={location} title={siteTitle} author={author}>
        <SEO title="TagList" />
        <h1 itemProp="headline" className="pagetitle">
          all tag list
        </h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </LayoutPage>
    </div>
  )
}

export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
