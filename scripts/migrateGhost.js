const fs = require("fs");
const showdown = require("showdown");
const jsdom = require('jsdom');
const axios = require('axios');
const stream = require('stream');
const { promisify } = require('util');

const finished = promisify(stream.finished);

(async () => {
  try {
    const jsonFileString = fs.readFileSync(
      "../../Downloads/polluterofminds.ghost.2021-07-20-14-17-41.json"
    );
    const json = JSON.parse(jsonFileString.toString());
    
    if(json.db && json.db[0].data) {
      const converter = new showdown.Converter();
      const posts = json.db[0].data.posts.filter((p) => p.type === 'post');
      const publishedPosts = posts.filter(p => p.status === "published");
      const draftPosts = posts.filter(p => p.status === "draft");  
      for(const post of publishedPosts) {
        const { title, slug, status, published_at, custom_excerpt, html } = post;
        const dom = new jsdom.JSDOM();
        const md = converter.makeMarkdown(html, dom.window.document);
      
        const docString = `---
slug: "/${slug}"
date: "${published_at}"
title: "${title}"
excerpt: "${custom_excerpt}"
status: "${status}"
---
  ${md}
  `
        fs.writeFileSync(`./src/markdown-pages/${slug}.md`, docString);   
      }  
      
      for(const draft of draftPosts) {
        const { title, slug, status, published_at, custom_excerpt } = draft;
      const dom = new jsdom.JSDOM();
      const md = converter.makeMarkdown(draft.html, dom.window.document);
    
      const docString = `---
slug: "/${slug}"
date: "${published_at}"
title: "${title}"
excerpt: "${custom_excerpt}"
status: "${status}"
---
${md}
`
      fs.writeFileSync(`./src/draft-markdown-pages/${slug}.md`, docString);   
      }
    }
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
