import React from "react";
import { graphql } from 'gatsby';
import Posts from "../../components/Posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

const Tags = ({data: { allMarkdownRemark: { edges } }, location }) => {
  const tag = location.pathname.split("tags/")[1];
  return (
    <div>
      <Head title={`polluterofminds | ${tag}`} description={"Tags page"} image="https://i.imgur.com/6kXe1BP.png" />
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <Posts sectionHeading={tag} edges={edges.filter(e => e.node.frontmatter.tags?.includes(tag))}/>
        <Footer />
      </div>      
    </div>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {         
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
`;
