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
            <li><Link to="/page-2" activeClassName="active" activeStyle={{color : "white" }}>
              <span>{"HOME"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"NEWS"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"EDITORIAL"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"ENTERTAINMENT"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"ARTICLES"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"CLASSIFIED ADS"}</span>
            </Link></li>
            <li><Link to="/page-2" activeClassName="active">
              <span>{"PAGES"}</span>
            </Link></li>
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
