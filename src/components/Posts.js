import React, { useState } from "react";
import PostLink from "./PostLink";

const Posts = ({ edges, sectionHeading }) => {
  const [ogPosts] = useState(edges);
  const [postsToShow, setPostsToShow] = useState(edges);
  const [postsLimit, setPostLimit] = useState(10);

  const loadMore = () => {
    const newLimit = postsLimit + 10;
    setPostLimit(newLimit);
    const newPostsToShow = ogPosts
      .filter((edge) => !!edge.node.frontmatter.date)
      .splice(0, newLimit);
    setPostsToShow(newPostsToShow);
  };
  return (
    <div className="max-w-md m-auto">
      <h1 className="text-white text-4xl font-rock-salt">
        <u>{sectionHeading}</u>
      </h1>
      {postsToShow.map((p) => {
        return <PostLink key={p.node.id} post={p.node} />;
      })}
      {ogPosts.length > postsToShow.length && (
        <button className="mt-8 text-white" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Posts;
