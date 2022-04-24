/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: {name: {eq: "logo-icon"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const logoimage = getImage(data.allFile.edges[0].node)
  console.log(logoimage);
  return (
    <>
      <Header logo={getImage(data.allFile.edges[0].node)} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          backgroundColor: `white`,
          backgroundImage: `white`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
