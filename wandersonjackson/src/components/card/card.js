import React, { Component } from "react"

export default class Card extends Component {
  render() {
    return (
      <div className="cardbase_verse darkGrey">
        <div className="app_content">
          <div className="content_case">
            <h2 className="display2">App name</h2>
            <div className="border_bot"></div>
            <h4 className="heading4">
              App description in just few lines and then you gonna add button
              bellow this description.
            </h4>
            <div>
              <button className="app_btn top-32">
                View case<span className="span_icon"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="app_img laranja"> _</div>
      </div>
    )
  }
}
