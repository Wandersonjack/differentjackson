import React, { Component } from 'react'
import './styles/typography.css'

export default class Display1 extends Component {
  render() {
    return (
      <h1 className="display1">{this.props.text}</h1>
    )
  }
}

export class Display2 extends Component {
    render(){
        return(
            <h2 className="display2">{this.props.text}</h2>
        )
    }
}
export class Display3 extends Component {
  render(){
      return(
          <h3 className="display3">{this.props.text}</h3>
      )
  }
}

export class Heading1 extends Component {
  render(){
      return(
          <h1 className="heading1">{this.props.text}</h1>
      )
  }
}
export class Heading2 extends Component {
  render(){
      return(
          <h2 className={this.props.children}>{this.props.text}</h2>
      )
  }
}
export class Heading3 extends Component {
  render(){
      return(
          <h3 className="heading3">{this.props.text}</h3>
      )
  }
}
export class Heading4 extends Component {
  render(){
      return(
          <h4 className="heading4">{this.props.text}</h4>
      )
  }
}
export class Heading5 extends Component {
  render(){
      return(
          <h5 className="heading5">{this.props.text}</h5>
      )
  }
}

export class Body1 extends Component {
  render(){
      return(
          <p className="paragraph">{this.props.text}</p>
      )
  }
}
