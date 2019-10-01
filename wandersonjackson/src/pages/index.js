import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Footer from "../components/footer/footer"
import React, { Component } from "react"

import { Display2 } from "../components/typography/typography"
import "../pages/styles/page.css"
import Card from "../components/card/card"
import Work from "./worksection"
import CardVerse from "../components/card/cardverse"

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Work />
        <Footer />
        <SEO title="Jackson" />
      </div>
    )
  }
}
