import React from "react";
import { Link } from "gatsby";
import { prettyDate } from "../utils";

const PostLink = ({ post }) => {
  return (
    <div key={post.frontmatter.title} className="mt-8">
      <Link to={post.frontmatter.slug} className="mt-2 block">
        <p className="text-xl font-semibold text-white hover:bg-orange hover:text-black">
          <u>{post.frontmatter.title}</u>
        </p>
        <p className="text-sm text-white">
          <time dateTime={post.frontmatter.date}>
            {prettyDate(post.frontmatter.date)}
          </time>
        </p>
        {post.frontmatter.tags &&
          post.frontmatter.tags.map((p) => {
            return (
              <Link to={`/tags/${p}`} className="inline-block">
                <span
                  className="mr-2 mt-2 bg-orange inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium text-black"                  
                >
                  {p}
                </span>
              </Link>
            );
          })}
      </Link>
    </div>
  );
};

export default PostLink;
