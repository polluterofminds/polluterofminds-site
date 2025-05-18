---
date: '2020-05-12T19:36:45.000Z'
title: I Wrote a Puppeteer Script That Ran For Two Days
tags:
  - dev
  - blog
summary: ''
draft: false
---
I have experienced first-hand why open data is so important. Imagine a scenario where you've paid for software. This can be something you've done personally or something you've done for the organization you work for. Now, you are ready to move on to another vendor, another piece of software. All of the data you've stored is vital to your work (personal or professional). That data needs to be moved to the new software. This shouldn't be a problem because it's your data.

But is it really?

If you can't easily port the data from one service to another, it becomes less owned by you and more owned by the company providing the software. If there's no way at all to get the data out, it becomes wholly owned by the company managing the software you're using. This is called vendor lock-in. It can be intentional and strategic or it can be a poor product design. In any case, if you're in the latter situation, you're out of luck.

Unless…

I found myself in a situation where the software vendor had complete control of the data. Data that did not belong to them and should have been easily accessible. There were no APIs to query to get the data. Everything was rendered server-side and returned to the client. So sifting through network requests didn't help. There was only one solution left to try: Puppeteer.

From the [Puppeteer Github](https://github.com/puppeteer/puppeteer) repository:

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

Generally speaking, Puppeteer is used for automated client-side testing. It allows you to run a headless browser that can crawl a page, look for elements, enter text, click buttons, and more.

Turns out, it's also great for scraping data. And by "great", I mean tedious as hell but gets the job done. In my case, I not only had to use Puppeteer to scrape certain pieces of data from a software vendor that had locked the data in their own silo, but I had to also wrestle with legacy web technology.

Remember [framesets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset) and frames? Not `iframes` but `frames`. This pre-HTML5 technology was still in use by the vendor in question, so I got to dig deep into my JavaScript toolbox to properly scrape the necessary data from the pages I accessed.

There were four main things I had to do with my Puppeteer code:

1.  Get the raw text data from each page
2.  Navigate to the links to other pages referenced on the original page and grab text data from each of those pages
3.  Download all files linked on each page
4.  Screenshot each page (in case anything was missed in this scraping process, at least the screenshot would provide reference data)

All of the above had to be applied to _7,000 pages_ of data. Wow.

If you've ever used Puppeteer (or really, if you've ever used the web), you know that network requests can take varying amounts of time to resolve. For an application that is rendered server-side, this means you have to wait for the network request to finish before you can do any scraping. So, each page could take anywhere between one and five seconds to load. Assuming the average load time was 2.5 seconds, we are already at 17,500 seconds of scraping time just for loading those pages.

But remember, I also had to grab the links to referenced pages within the original pages and grab the sub-data from those pages. We'll play it conservative and say there was just one additional page referenced on each original page. And if we apply the same 2.5 second average load time, that's an additional 17,500 seconds of scraping time.

**Gets out calculator**

For just the first two steps above, we have a script that will need to run for _9.72 hours_. What about for the next two steps in the four-step process?

Each original page had various files attached that needed to be downloaded. These files could be PDFs, email messages, images, documents, and more. The sizes of the files ranged. A conservative estimate here would put an average of four files on each of the original pages. Each file download probably averaged about a second.

**More math**

The file downloads would take upwards of 28,000 seconds, or an additional 7.77 hours. But we're not done, because we also have to take a screenshot and save that screenshot for each of the original pages. Puppeteer is pretty quick with this, so each screenshot, even using the synchronous code necessary to make sure everything executed properly, likely took about 1.5 seconds. That means…getting that calculator again…an additional 10,500 seconds, or 2.91 hours.

That all adds up to 20.33 hours, give or take. And of course, this is just an estimate after the fact, but it checks out. Because, you see, this isn't just a hypothetical. I ran this script, got the data I needed, and it took from the end of one day to the middle of the next day.

A script that spanned across two days just to get data I should have easily had access to? That's vendor lock-in for you. Thank goodness for Puppeteer, a little JavaScript, and a whole lot of patience.
