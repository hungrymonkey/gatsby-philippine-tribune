import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./header.css"
//<!-- https://codepen.io/anon/pen/GJWOBV -->
const Header = ({ logo, siteTitle }) => (
  <header
    style={{
      background: `#E60B0F`,
      marginBottom: `1.50 rem`,
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div class="navigation-container">
          <div id="navigation-logo">
            <Link to="/" >
              <StaticImage
                src="../images/logo-icon.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt={siteTitle}
                style={{ margin: 0 }}
              />
            </Link>
          </div>
          <ul class="navigation-bar">
            <li>
              <div class="navigation-bar-dropdown">
              <Link to="/page-2" activeClassName="active" activeStyle={{color : "white" }}>
              <span class="dropbtn">{"HOME"}</span>
              </Link>
            </div></li>
            <li><Link to="/page-2" activeClassName="active">
              <span class="dropbtn">{"NEWS"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span class="dropbtn">{"EDITORIAL"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span class="dropbtn">{"ENTERTAINMENT"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span class="dropbtn">{"ARTICLES"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span class="dropbtn">{"CLASSIFIED ADS"}</span>
            </Link></li>
            <li>
              <div class="navigation-bar-dropdown">
              <a><span class="dropbtn">{"PAGES"}</span></a>
              <div class="navigation-bar-dropdown-content">
                <Link to="/page-2" activeClassName="active">Page 1</Link>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              </div>
            </li>
        </ul>
        
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
