import React, { Fragment } from "react";
import { graphql } from "gatsby";
// import Posts from "../../components/Posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFoundPage from "./404";

const Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  const slug = location.pathname.split("/")[1];
  if(edges && edges.length > 0 && edges.find((e) => e.node.frontmatter.slug === `/${slug}`) ){
    const html = edges.find((e) => e.node.frontmatter.slug === `/${slug}`).node
    .html;
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="relative py-16 bg-black overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-orange"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-orange"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <div className="mt-10">
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
  } else {
    return <NotFoundPage />
  } 
};

export default Page;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { title: { eq: "" } } }
    ) {
      totalCount
      edges {
        node {
          html
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
