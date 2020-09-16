import React from "react";
import { graphql } from "gatsby";

import LayoutPage from "../components/layout-page";
import SEO from "../components/seo";
//import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <LayoutPage location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>About</h1>
        <div>ゆるい</div>
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
  }
`;