import * as React from "react"
import { Link } from "gatsby"

import MainTemplate from "../components/_mainTemplate"

// markup
const NotFoundPage = () => {
  return (
    <MainTemplate>
      <Link to="/">Go home</Link>
    </MainTemplate>
  )
}

export default NotFoundPage
