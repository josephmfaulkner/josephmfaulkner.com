import * as React from "react"
import Nav from 'react-bootstrap/Nav';

const SocialMediaLinksMobileButton = (props) => {
  return (
        <Nav 
            className="d-md-none SocialMediaLinksMobileButton"
        >
            <Nav.Item key={0}>
                <Nav.Link href="/#links" >
                    <i title="Links" className="fas fa-link"></i>
                </Nav.Link>
            </Nav.Item>
        </Nav>
  )
}

export default SocialMediaLinksMobileButton