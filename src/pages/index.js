import * as React from "react"

import MainTemplate from "../components/_mainTemplate";
import HeaderSection from "./_headerSection";
import AboutSection from "./_aboutSection";
import ProjectSection from "./_projectSection";


// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <HeaderSection />
      <AboutSection />
      <ProjectSection />

    </MainTemplate>
  )
}

export default IndexPage
