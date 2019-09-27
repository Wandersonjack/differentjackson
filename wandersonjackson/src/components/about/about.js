import React, { Component } from "react"
import Button from "../button/button"
import { Heading2, Heading4 } from "../typography/typography"
import "../card/styles/card.css"
import "../about/styles/about.css"

export default class About extends Component {
  render() {
    return (
      <div className="cardbase">
        <div className={this.props.imgncolor}></div>
        <div className="app_content">
          <div className="content_case">
            <Heading2 children="display2 about-me" text={this.props.myname} />
            <div className={this.props.border}></div>
            <Heading4 children="heading4" text={this.props.aboutme} />
            <div>
              <Button text="Download cv" children={this.props.button} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
