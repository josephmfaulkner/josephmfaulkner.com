import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useStaticQuery, graphql } from "gatsby";

// 
//className="justify-content-end social-navbar-top"

const SocialMediaLinks = (props) => {

  const data = useStaticQuery(graphql`
  query SocialLinksQuery {
    socialMediaJson {
        links {
          name
          url
          iconClass
        }
      }
  }
`);

  return (
        <Nav 
            className={props.className}
        >
            {
                data.socialMediaJson.links.map((link) => 
                    <Nav.Item>
                        <Nav.Link href={link.url} target="_blank">
                            <i title={link.name} className={link.iconClass}></i>
                        </Nav.Link>
                    </Nav.Item>
                )
            }   
        </Nav>
  )
}

export default SocialMediaLinks;