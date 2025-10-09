---
slug: an-idea-for-two-withered-technologies
title: An Idea For Two Withered Technologies
date: 2025-10-09T00:29:11.153Z
draft: false
tags:
  - personal
  - blog
summary: "RSS feed readers don't have to be standalone applications."
---

I've been exploring RSS a lot lately as I try to remove (or at least distance) myself from social media. There are many good options on the market, including self-hosted options, native mobile apps, and web apps. The problem I am facing is that I don't want yet another app.

As I've been playing around with the Rust programming language more and more, I started building an RSS feed reader just to advance my skills with Rust. But in the process, I had an idea.

What if I didn't need a new app to receive RSS feeds and read them? What if I could combine two [withered technologies](https://medium.com/@adamagb/nintendo-s-little-known-product-philosophy-lateral-thinking-with-withered-technology-bac7257d8f4) (RSS + Email) to create exactly what I wanted? To see how it felt, I mocked up a simple service that fetched my own RSS feed for this blog, filtered only for new updates, and then I used the `lettre` crate to spin up a simple SMTP server to send emails from a domain I already own with the content of the new feed item.

This worked relatively well. There are improvements I can make for sure. See the image below for an example of the simple test:

![Example email showing what an emailed RSS feed item might look like](https://i.imgur.com/IYTBwNa.png)

Things I like about this idea:

- No new application to download or sign into (it's just email)
- Replicates the power of newsletters by delivering the new feed items directly into my inbox
- Can be run by anyone

But is it all that interesting overall? I don't know. I think I'll build this out a bit more and run it for a few weeks to see how it feels. I think automatically labeling and moving these emails into folders in my email client would enhance the experience. We'll see!
