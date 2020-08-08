import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Container from "./container"

const ListLink = ({ to, children }) => (
  <Link style={{ padding: "0 1rem" }} to={to}>
    {children}
  </Link>
)

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Container>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          to="/"
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            display: `inline-block`,
          }}
        >
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about-css-modules">About</ListLink>
        </ul>
      </header>
      {children}
    </Container>
  )
}
