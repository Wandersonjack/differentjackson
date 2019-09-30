
import SEO from "../components/seo"
import Hero from '../components/hero/hero'
import Footer from '../components/footer/footer'
import React, { Component } from "react"


export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Hero />
        
        <Footer />
        <SEO title="Home" />
      </div>
    )
  }
}
