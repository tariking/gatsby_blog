import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
// import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import LayoutPage from "../components/layout-page";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    {/* <Helmet title={title} /> */}
    <LayoutPage>
      {/* <h1>{title}</h1> */}
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


export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`