---
date: '2020-07-08T12:28:22.000Z'
title: Running a Filecoin Lotus Testnet Node on a Macbook Pro
tags:
  - dev
  - blog
summary: ''
draft: false
---
In my recent work, it became necessary to experiment with the [Filecoin](https://filecoin.io/) network. Filecoin is a decentralized protocol for incentivized storage of content. It is a compliment to [IPFS](<https://ipfs.io/>) and provides the incentive layer to those who store content and ensure its availability. At the end of the day, Filecoin, combined with IPFS, seeks to allow for 100% uptime websites and applications. It also seeks to preserve content and fight back against censorship.

Filecoin has not yet released its mainnet, but it has a very active community participating in its testnet. My work requires application interface capabilities with the eventual Filecoin network, so I needed to get a testnet node up and running. This post is not going to be instructional on how to get a node running on your machine since Filecoin's docs are pretty good at that already. Instead, I want to focus on what's missing from the docs—system and hardware requirements.

The only system requirements [listed](https://docs.lotu.sh/en+hardware) for installing, syncing, and running the Lotus client of the Filecoin testnet is a single requirement:

> Lotus can build and run on most [Linux](https://ubuntu.com/) and [MacOS](https://www.apple.com/macos) systems with at least 8GiB of RAM.

I read that and thought, "Cool, my Macbook has that much RAM and then some, but what about the storage requirements, what about the cooling requirements, what about what about what about..."

As a quick preface, here's a snapshot of my Macbook Pro (a 2015 model):

- MacBook Pro (Retina, 15-inch, Mid 2015)
- Processor 2.5 GHz Quad-Core Intel Core i7
- Memory 16 GB 1600 MHz DDR3
- Storage 500GB SSD

After I cloned the Lotus client repository and built it from source, I was ready to run the client and sync the testnet chain. The syncing process is what would take the most time. Per the Lotus client documentation, it could take between a few hours and a couple of days. I can tell you now, it took my machine nearly 17 hours to sync the whole chain.

Here was my experience:

The syncing process started off smoothly. It wasn't until about 5 minutes in that my Macbook's fan even kicked on. When it did, I checked the CPU strain via Activity Monitor. The Lotus client using up between 400% and 700% of the CPU resources. And my machine started to sound like it might take flight.

But I pressed on.

Keep in mind, I'm running this on my primary machine, so I had other work to do, Chrome tabs to open, Electron apps to run. For a while, my computer handled this fine, but after about an hour, it started slowing down. I once again checked Activity Monitor. Memory consumption seemed fine, but the CPU resources were still spiking. This time, I also checked the Disk tab on Activity Monitor and had a miniature heart attack. The Lotus client seemed to have written over 30GB of data to my machine and I was only about 10% of the way through the chain sync.

I quickly killed the syncing process even though I wasn't sure if that meant I would have to start from the beginning again. I Googled the expected size of a full node for the Filecoin testnet and came away with nothing. Fortunately, the folks at [Textile](<https://textile.io>) are always knowledgeable and helpful. In their slack, they suggested that a full node would probably sit at about 30GB. That meant that the disk writes I had seen were surely writes followed by immediate deletes.

With that in mind, I fired up the node and started the sync process again. Fortunately, the syncing quickly caught back up to where I left off and I settled in for the rest of my day.

About an hour or so later, with possibly 900 Chrome tabs open because I'm a masochist and at least 5 separate Electron-based desktop apps running, my mouse stopped moving. I tried to use the keyboard to navigate between windows, but it also didn't respond. In fact, my entire machine had locked up.

Knowing I had this node syncing in the background, I didn't want to do anything. Normally, I'd do a hard reboot, but in this case, I just sat there staring into the void that was my frozen monitor screen. I sat and sat until...

My computer restarted itself.

Shit. Now, I would surely have to start the entire syncing process over again for the Filecoin testnet node. If it's not clear by now, I'm not sure how the sync process is tracked locally. I figured any temporary caching of data that helped the sync process pick up where it left off the last time was erased and I'd be starting from the beginning. But to my surprise, that was not the case.

With the node syncing once again, I closed any unnecessary programs on my desktop and reduced my Chrome tabs to the bare minimum needed. That helped a ton and I was able to finish out my day of work. When I finished, I just left my computer on, ensured it wouldn't go to sleep and lose WiFi connection, and hoped for the best.

This morning, I came into my office to find that everything had synced up successfully. My CPU resources were back to normal, my computer fan had stopped buzzing like a bandsaw, and I had a fully operational Lotus client for the Filecoin testnet.

I took a look in the hidden `.lotus` folder on my computer to see how much data had actually been written, and to Textile's credit, it was right at 30GB. So, the moral of this story is that you will probably have problems, and it may lock up your machine, but running a Filecoin testnet on a Macbook Pro is totally doable while multi-tasking. Ideally, you'd run the instance on a dedicated machine to avoid these problems, but that's not always going to be an option for people.

My recommendation for system requirements:

- At least 8GB RAM
- i7 Quad Core or better
- At least 100GB of free space on your hard drive
- Patience


  
