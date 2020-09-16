import React from "react";

//import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

// Components
import { Link, graphql } from "gatsby";
import LayoutPage from "../components/layout-page";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `[${tag}]タグの記事一覧（全${totalCount}件）`;

  return (
    <LayoutPage>

        <h4>{tagHeader}</h4>
        {edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.frontmatter.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      <Link to="/tags">All tags</Link>
      <br />
      <br />
    </LayoutPage>
  );
};

export default Tags;

export const pageQuery = graphql`
query($tag: String) {
  allMarkdownRemark(
    limit: 1000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    totalCount
    edges {
      node {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
}
`;