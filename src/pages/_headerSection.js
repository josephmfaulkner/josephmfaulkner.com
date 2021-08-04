import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// markup
const HeaderSection = () => {

    const data = useStaticQuery(graphql`
        query SiteHeaderQuery {
            site {
                siteMetadata {
                  name
                  jobtitle
                  location
                }
              }
        }
    `);

    const siteMetadata = data.site.siteMetadata;  


  return (
    <div className="SiteHeader">
      <div className="home-page-title position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="mx-auto my-5">
          <h1 className="display-4 fw-normal">{siteMetadata.name}</h1>
          <p className="lead fw-normal">{siteMetadata.jobtitle}</p>
          <p className="lead fw-normal">{siteMetadata.location}</p>
        </div>
      </div>
    </div>
  )
}
export default HeaderSection;
