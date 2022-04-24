import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap';

import "./header.css"
//<!-- https://codepen.io/anon/pen/GJWOBV -->
const Header = ({ logo, siteTitle }) => (
  <header
    style={{
      marginBottom: `1.50 rem`,
    }}
  >
  <nav className="navbar navbar-expand-lg navbar-custom navbar-light" role="navigation" id="navigation-container">
  <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <StaticImage
          src="../images/logo-icon.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt={siteTitle}
          style={{ margin: 0 }}
        />
        Bootstrap
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarNavDropdown" >
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link navigation-item active" aria-current="page" to="/page-2" >
                {"HOME"}
              </Link>
          </li>
          <li className=" nav-item">
              <Link className="nav-link navigation-item" to="/page-2">
                {"NEWS"}
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link navigation-item" to="/page-2">
                {"EDITORIAL"}
              </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link navigation-item" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>   
        </div>     
    </div>
  </nav>
      
        
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
