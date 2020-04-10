import React from "react"
import {Link} from "gatsby"

import Styles from "./header.module.css"

export default () =>
  <div className={Styles.wrapper}>
    <Link to="/about">About</Link>
  </div>
