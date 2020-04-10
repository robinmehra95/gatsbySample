import React from "react"
import LeftNavigation from "../components/leftNavigation"
import Header from "../components/header"
import RightNavigation from "../components/rightNavigation"
import Content from "../components/content"
import containerStyles from './index.module.css'

export default () =>
  <div>
    <Header />
    <div className={containerStyles.pageWrapper}>
      <LeftNavigation />
      <Content />
      <RightNavigation />
    </div>
  </div>

