import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Head = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://scripts.simpleanalyticscdn.com/latest.js"
    document.head.appendChild(script);
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src = "https://queue.simpleanalyticscdn.com/noscript.gif";
    img.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    noscript.appendChild(img)
    document.head.appendChild(noscript);
  }, [])
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
