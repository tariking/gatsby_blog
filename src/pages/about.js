import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image"

import LayoutPage from "../components/layout-page";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;

  return (
    <div>
      <LayoutPage location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1
          itemProp="headline"
          className="pagetitle"
        >
          About
        </h1>
        <Image
        fixed={data.about.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 300,
        }}
      />
        <div
          style={{
            ...scale(-1 / 5),
          }}
        >
          Webフロント業界一年生。ゆるゆる。<br /><br />
        </div>
      </LayoutPage>
    </div>
  );
};

export default Aboutpage;

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
    about: file(absolutePath: { regex: "/about.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;