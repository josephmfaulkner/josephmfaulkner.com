import * as React from "react"

// markup
const HeaderSection = () => {
  return (
    <div>
      <div className="home-page-title position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="mx-auto my-5">
          <h1 className="display-4 fw-normal">Joseph Faulkner</h1>
          <p className="lead fw-normal">Fullstack Developer</p>
          <p className="lead fw-normal">Sacramento, CA</p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  )
}
export default HeaderSection;
