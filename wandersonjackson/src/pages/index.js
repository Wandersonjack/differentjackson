import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Footer from "../components/footer/footer"
import React, { Component } from "react"

import Card from "../components/card/card"
import { Display2 } from "../components/typography/typography"
import "../pages/styles/page.css"

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <section className="container">
          <Display2 text="Work" children="display2" />
          <Card
            imgncolor="app_img verde"
            apptitle="BitOfProperty"
            border="border-green"
            apptext="Is an international real estate invesment company, that enables users to invest starting with a little as €50."
            button="btn-base color-green"
          />
          
        </section>
        <Footer />
        <SEO title="Jackson" />
      </div>
    )
  }
}
