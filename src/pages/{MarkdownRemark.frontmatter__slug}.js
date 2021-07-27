import React from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import { prettyDate } from "../utils";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import Head from "../components/Head";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Head title={frontmatter.title} description={frontmatter.excerpt || html.replace(/<[^>]*>/g, "").slice(0, 50)} image="https://i.imgur.com/6kXe1BP.png" />
      <Navbar />
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
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                {frontmatter.title}
              </span>
            </h1>
            <div className="text-center text-white">
              <p>{prettyDate(frontmatter.date)}</p>
            </div>
            <div className="text-center">
              {frontmatter.tags &&
                frontmatter.tags.map((t) => {
                  return (
                    <Link to={`/tags/${t}`} className="inline-block">
                      <span className="mr-2 mt-2 bg-orange inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium text-black">
                        {t}
                      </span>
                    </Link>
                  );
                })}
            </div>
            <div className="mt-10">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="mt-20">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        tags
      }
    }
  }
`;
