import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"

import Container from 'react-bootstrap/Container';
import NavBar from "./navBar";
import Footer from "./footer";

// markup
const MainTemplate = (props) => {

  const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`);

  return (
    <Container fluid style={{"padding" : 0}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="icon" type="image/png" href="/favicon.png"/>
        </Helmet>
        <NavBar />
        <div className="navbar-offset"></div>
        {props.children}
        <Footer id="links"/>
    </Container>
  )
};

export default MainTemplate;
