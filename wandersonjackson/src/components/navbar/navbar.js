import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="menu">
                <div>
                    <a href="#">
                        Hello
                    </a>
                </div>
                <nav>
                    <ul>
                        <li> <a>Hello</a></li>
                        <li> <a>Hello</a></li>
                        <li> <a>Hello</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    )
  }
}
