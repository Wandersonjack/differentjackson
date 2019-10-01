import React, { Component } from "react"
import CardVerse from "../components/card/cardverse"
import Card from "../components/card/card"
import { Display2 } from "../components/typography/typography"

export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <Display2 text="Work" children="display2" />
          <Card
            imgncolor="app_img verde"
            apptitle="BitOfProperty"
            border="border-green"
            apptext="Is an international real estate invesment company, that enables users to invest starting with a little as €50."
            button="btn-base color-green"
          />
          <CardVerse
            imgncolor="app_img laranja"
            apptitle="BitOfProperty"
            border="border-orange"
            apptext="Is an international real estate invesment company, that enables users to invest starting with a little as €50."
            button="btn-base color-orange"
          />
          <Card
            imgncolor="app_img azul"
            apptitle="BitOfProperty"
            border="border-blue"
            apptext="Is an international real estate invesment company, that enables users to invest starting with a little as €50."
            button="btn-base color-blue"
          />
        </section>
      </div>
    )
  }
}
