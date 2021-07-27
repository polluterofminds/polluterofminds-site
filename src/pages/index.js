import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { graphql } from "gatsby"
import Head from "../components/Head";

export default function index({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Fragment>
      <Head title={"polluterofminds"} description="The home of Justin Hunter—writer, engineer, product person" image="https://i.imgur.com/6kXe1BP.png" />
      <Navbar />
      <div className="z-30 min-h-screen flex flex-col justify-between">        
        <Hero />
        <Posts edges={edges} sectionHeading="From The Blog" />
        <Footer />
      </div>
    </Fragment>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { title: { ne: "" } } }) {
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
