---
title: The Open Data Nostalgia of Farcaster
date: 2022-11-05T14:07:53.000Z
tags:
  - personal
  - dev
  - blog
summary: ''
draft: false
---

I've been meaning to dive into the [Farcaster](https://farcaster.xyz) protocol for a while now. This past week, I finally took the plunge. While I waited for my invite-only access to generate a username and access the "official" iOS client, I created some Node.js scripts to play around with the protocol. I read the documentation on the [protocol](https://github.com/farcasterxyz/protocol) and the [hubs](https://github.com/farcasterxyz/hub). And I played with apps already built atop the Farcaster protocol—apps like [Discove](https://discove.xyz) which I found really inspiring.

As I explored the protocol, nostalgia began creeping back into my mind. I've been working in "blockchain" since 2015, but I didn't start building in the space until 2017. Back then, I started work on an app called Graphite—an open, but encrypted alternative to Google Docs. It was built atop promises made by [Blockstack](https://www.stacks.co/) (now called Hiro). Blockstack offered data portability, name registration, open networks, and driving competition down to client-level UX instead of data walls. I was especially taken by concept of [Gaia Hubs](https://docs.stacks.co/docs/gaia/) on Blockstack. These hubs were portable storage locations that could be run by services or by individuals. They were designed to build open networks as an alternative to the way apps had been built throughout the entire cloud-era of creation.  Hubs were controlled by namespaces. Names were registered on the Bitcoin blockchain (and later the Stacks blockchain). 

If this all sounds familiar, it sounded familiar to me too. This is what attracted me to Farcaster. The protocol is laid out in a similar fashion, but it is Ethereum based. Names are registered as NFTs on the Ethereum blockchain. Names, I think, point to hubs? This part is a little fuzzy to me, but in any event, hubs can theoretically be run by anyone. These hubs have peer connections, and the owners of the hubs control the method in which data is persisted beyond disk storage. 

The practical applications of an open data model like this are already exhibited in the proof of concept apps built atop Farcaster now. While Farcaster is still on Ethereum's testnet and not "production ready", people are building. And that's a great sign. 

However, I still have the scars from the failed promises of the Blockstack ecosystem. Almost no one ran Gaia Hubs. This meant that all data was entirely controlled by Blockstack. On its face, I actually don't mind this. The data was available openly, and anyone could index it or run their own hub. The real problem was scale. Blockstack never reached critical mass. Devs are still using the platform (Hiro), but it still has not reached a scale to which the open data model matters. This is where I'm encouraged by Farcaster's thoughtful approach. 

Decentralization maximalists might scoff at the idea of a manually curated registry of names and access, but this is exactly what Farcaster needs to do in order to reach critical mass. Couple the curation mechanism with a genuinely useful and pleasant application, and adoption should follow. When the app and therefore the protocol have reached critical mass (1 million users according to [Dan Romero](https://twitter.com/dwr)), the benefits of the open data model become significantly stronger. Strong enough to power businesses built atop the protocol. 

I'm cautiously optimistic about the future of Farcaster because it puts product first. It puts experience first. And it is driven by the possibilities of new models being built atop it. 

But then again, I had these feelings before and I was let down. 
