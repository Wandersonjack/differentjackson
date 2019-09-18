import React, { Component } from 'react'
import './styles/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <header>
            <div className="menu">
                <div>
                    <a href="#">
                       XO
                    </a>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <li> <a href="#" className="active">Home</a></li>
                        <li> <a href="#">Work</a></li>
                        <li> <a href="#">About me</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    )
  }
}
