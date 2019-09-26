import React, { Component } from "react"
import '../card/styles/card.css'
import Button from "../button/button"

export default class Card extends Component {
  render() {
    return (
      <div className="cardbase_verse darkGrey">
        <div className="app_content">
          <div className="content_case">
            <h2 className="display2">{this.props.apptitle}</h2>

            <div className={this.props.border}></div>
            <h4 className="heading4">
              {this.props.apptext}
            </h4>
            <div>
              <Button text="View work" children={this.props.button}/>
            </div>
          </div>
        </div>
        <div className={this.props.imgncolor}> 
        
        </div>
      </div>
    )
  }
}
