import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { graphql } from "gatsby"

export default function index({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">        
        <Hero />
        <Posts edges={edges} sectionHeading="From The Blog" />
        <Footer />
      </div>
    </Fragment>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            slug
            title
            tags
          }
        }
      }
    }
  }
`
