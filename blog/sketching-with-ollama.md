---
title: Sketching With Ollama
date: 2025-04-10T00:59:44.000Z
tags:
  - product
  - blog
draft: false
image: /assets/images/ollama.png
---
When I was first learning how to code, I naturally started with what I thought was the most accessible and visible part of coding—frontend. What a wake-up call that was to discover that frontend development wasn't just some HTML and CSS. But, I'm glad that's the path I took, even if it was difficult. 

Part of that path meant designing my own websites and apps, then designing apps for others, then eventually designing apps for companies I founded. Thing was (and still is), I'm no designer. I tried to create some crude designs in—no joke—Apple Keynote. I eventually broke down and tried Illustrator and Gimp. The learning curve for these technologies was steep, but that ultimately wasn't the problem. I couldn't visualize a thing until I started making it. Designing ahead of building didn't work for me. 

Luckily, I stumbled upon this book. Sketching With CSS effectively threw the notion of designing in the traditional sense out the window. Instead, Sean Fioritto, the author, suggested that developers do their designing by using CSS and designing on the fly. This resonated with me because the feedback loop was so fast. I could make some tweaks to CSS and see my design live on a web page. I could test breakpoints and various devices. It changed my entire workflow. 

This works well for small projects. Solo projects and prototypes especially benefit from this approach. Established products probably still need traditional design (maybe more so now than ever before), but for me building my own things and in the very early stages of building things I hoped would get big, designing on the fly in code made sense. 

I have the same feeling when working with AI models today. The form factor is completely different, but the frustration is similar. When building an AI-powered application, many developers are trying to craft the perfect prompts ahead of time, pick the perfect model ahead of time, and effectively build their application on paper before testing it in the real world. To make matters worse, testing in the real world costs real money and likely leads to developers not creating the best experience possible. If you've spent $10 tweaking a prompt and you feel like it's 80% of the way there, are you going to spend another $10 for the additional 20%?

Fortunately, AI model development has been happening largely in the open. There are still closed models from some of the big companies, but many capable and comparable models are open source and available for you to run locally. The hardware requirements of these models vary, so ymmv. However, you have the tools to do for AI development what sketching with CSS did for frontend development for me. 

I call this sketching with Ollama. 

![ollama logo](https://ivory-able-albatross-931.mypinata.cloud/ipfs/bafkreic4kuufatbqpu2k6ucphg6e44ah2l3pghxabwvwthgjcwcndl4kzi)

[Ollama](https://ollama.com) is optional. You can use any tool you want that allows you to run local AI models and access them via an API, but I like Ollama for its simplicity and built-in compatibility with the OpenAI SDK. 

But how, exactly, is using a local AI model similar to sketching with CSS? It's simple, actually. Instead of having to create something basically perfect ahead of time, you can iterate live. You can do it without fear of spending too much money. You can do it with the same freedom developers have when making live CSS tweaks to edit frontend designs. That 80% you were able to get to while paying for a hosted model can now get to 100% through constant iteration. And here's an interesting knock-on effect: 

If you can get a less capable model to do what your app needs, when you go to production and use a higher-powered hosted model, it's going to outperform yout local tests. So in a sense, sketching with Ollama is actually better than sketching with CSS. 