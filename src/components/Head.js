import React from "react";
import { Helmet } from "react-helmet";

const Head = (props) => {
  return (
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="image" content={props.image} />
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.image} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content={props.image} />
      <title>{props.title}</title>      
    </Helmet>
  );
};

export default Head;
