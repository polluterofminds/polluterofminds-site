---
slug: "/why-i-built-my-own-static-site-generator-in-go"
title: "Why I Built My Own Static Site Generator In Go"
date: "2023-12-24T14:48:59.226Z"
summary: "I could have rebuilt my site using an off-the-shelf static site generator, but I didn't. I chose to write it in Go."
draft: false
cover: "https://images.unsplash.com/photo-1610337673044-720471f83677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDkwMjh8MHwxfHNlYXJjaHw0fHxTdGF0aWN8ZW58MHx8fHwxNzAzNDMxMzM5fDA&ixlib=rb-4.0.3&q=80&w=1080"
tags: ["dev","personal", "blog" ]
---
![](https://images.unsplash.com/photo-1610337673044-720471f83677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDkwMjh8MHwxfHNlYXJjaHw0fHxTdGF0aWN8ZW58MHx8fHwxNzAzNDMxMzM5fDA&ixlib=rb-4.0.3&q=80&w=1080)If you're a developer and you write blog posts, you have almost certainly fallen into one of two traps (or both):

1.  Constantly rebuilding your personal site
    
2.  Building your own bespoke static site generator
    

If you have the skills to build things, you are often not satisfied with what exists, even–and maybe especially–if you were the one who built the thing that exists. In the case of your personal site, this means a constant re-evaluation of the design and layout and capabilities. In the case of your CMS (content management system), you are likely using something that allows you to write and build your site locally as opposed to using a hosted CMS. These setups are called static site generators, and the great procrastination tactic that builders will leverage is to write or rewrite a custom generator.

I have fallen victim to this procrastination technique even though I love writing. I got my graduate degree in creative writing. Yet, the creative process of building something in code often outweighs the creative process of writing prose. So, as I evaluated my personal site, I realized I wanted to rewrite it, and I, of course, couldn't just rewrite the site. I had to rewrite the static site generator from scratch.

My site was setup like this:

*   Next.js app router
    
*   ContentLayer for generating content files
    
*   MDX for all the markdown
    

It loaded pretty fast and it hit 100 across the board for Lighthouse, but I wanted something more portable. Next.js is great, but when you build your site, you do not end up with well-formed HTML files. Instead, the site is generated server side and delivered to the client at request time. This means only the markdown files were portable for my site.

The portability of markdown is a great thing, but I wanted to be able to take my raw HTML files and host them somewhere else, preserve them locally, preserve them on Github, etc. I realized, I didn't want my personal site to be a single-page app at all. I wanted to go back in time to the days of HTML and CSS, back to the days when routing took place with an anchor element and a full page refresh.

Knowing the outcome I wanted, I got to work designing how I would build and generate my content. Because I _obviously_ had to create a static site generator from scratch for this as no off-the-shelf options could possibly satisfy my needs\*, I began thinking about how I'd write this generator. Initially, I reached for Node.js which I know like the back of my hand. However, I learned Go a couple of years ago and hadn't used it much. I had been wanting to get more proficient with Go, and this felt like a good opportunity. The generator would be written in go.

_\*Literally dozens of off-the-shelf solutions would have worked for this. I'm especially fond of Eleventy._

I began writing my generator at about 10,000 feet in the air, climbing to a nice coding altitude of 30,000 feet before I hit my groove. I was traveling for work, and a nice in-flight coding session felt like a good time to get started on my custom generator.

I began by over-complicating things.

I figured if I was writing the generator in Go, maybe I should write the development file server in Go. This was not a difficult thing to do as Go has built-in handling for file servers. However, I couldn't stop there. I also wanted hot-reloading. That was considerably more difficult. Turns out that hot-reloading a local website with a Go server is not nearly as straightforward as it is with the Node.js ecosystem. I had to add a script to each page of my site that would listen for Server-Sent Events. Then, I had to configure my Go server to use a watcher to watch for changes on the files I expected to change frequently. This kind of worked, but I had to keep tweaking it, and eventually, I realized I was building a server and not building my static site generator.

I scrapped the file server idea and fell back to using [lite-server](https://github.com/johnpapa/lite-server), a simple file server with hot-reloading built-in written in JavaScript.

Ok, back to the generator. No more distractions!

Over the next couple of weeks, as I had time, I worked on my generator while rebuilding my site. I found the built-in [Go text and html templates](https://pkg.go.dev/text/template) to be incredibly helpful. It felt like using Gatsby or Eleventy or any other JavaScript-based generator, but using Go.

After three weeks of working off and on, I had not only rebuilt my personal site, but I had built a custom static site generator in Go. Why did I do that instead of taking one day to write it using any number of generators on the market?

Because I'm a maniac.

And because I'm a builder.

And because I'm a procrastinator.

If you're reading my blog, you're probably a lot like me, and you might be interested in the code for this custom monstrosity that I built. It's not perfect, but it works, and I have a better grip on Go than I did before. [You can see the repo here](https://github.com/polluterofminds/polluterofminds-site).

This blog post is proof that I can, indeed, write blog posts instead of constantly rewriting my site and my static site generator. And if I can do it, so can you.