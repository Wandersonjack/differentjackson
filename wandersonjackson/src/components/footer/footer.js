import React, { Component } from "react"
import dribbble from "../../images/dribbble.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import youtube from "../../images/youtube.svg"
import "./styles/footer.css"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <a>
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a>
              <img src={dribbble} />
            </a>
          </li>
          <li>
            <a>
              <img src={youtube} />
            </a>
          </li>
          <li>
            <a>
              <img src={instagram} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
