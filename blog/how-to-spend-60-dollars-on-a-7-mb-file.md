---
slug: "/how-to-spend-60-dollars-on-a-7-mb-file"
date: "2020-11-18T15:33:55.000Z"
title: "How to Spend $60 to Store a 7mb File - Or Why You Should Write Unit Tests"
excerpt: "I'm not the best at writing automated tests. Sometimes I write them as I go, sometimes I write them before checking my code in, and sometimes I don't write them at all."
status: "published"
layout: post
tags: posts
---
I'm not the best at writing automated tests. Sometimes I write them as I go, sometimes I write them before checking my code in, and sometimes I don't write them at all. This is bad practice, and I acknowledge it's an area where I need to improve. And today, I'll walk you through exactly why you shouldn't be like me.

A little background first:

I'm working on a project for my company, [Pinata](<https://pinata.cloud/>), where we interact with the [Filecoin](<https://filecoin.io/>) blockchain. Filecoin works as an open-market, long-term storage solution for content. Unlike using a service like Amazon S3 Glacier, you can search for a storage provider (called miners) with rates you like and choose that provider to store your content for an agreed amount period of time. At the time of this writing, the minimum amount of time a storage deal can be made for is about six months.

As part of the process for finding storage providers and proposing a "contract" to store the content, it is important (to us at least) to convert the cost of storage to USD. However, the conversion is not exactly straight forward.

Storage providers provide quotes for storage in a format called AttoFil. This is the smallest denomination of the Filecoin currency called FIL. One AttoFil is 10^-18 FIL. The quoted price is also for a single epoch of time (approximately 30 seconds) and is per GB. So for example, if someone quoted `500000000`, the calculation for cost in FIL for 30 seconds of storage would be:

```
(500000000 * Math.pow(10, -18)
```

That's pretty straight forward so far. But there are three additional variables missing in order to achieve our goal. We are storing content for about six months (In Epochs), we are not storing exactly one GB each time, and we need to know that we are not overpaying in USD.

The first step was to calculate the current cost of FIL in USD. That's pretty easy. As of right now, the price of one FIL is $28.48. Next, we need to figure out what the cost of one AttoFil is in USD. To do that, we take `28.48 * Math.pow(10, -18)`. Next, we need to figure out the size of our file to store in bytes and convert that to GB. There are many ways to do this, but for simplicity, the calculation is essentially this:

```
const sizeInKb = FileSize/1024;
const sizeInMb = sizeInKb/1024;
const sizeInGb = sizeInMb/1024;
```

Now, we need to calculate how many epochs (30 second periods of time) there are in six months. I'll save you the math and tell you it's about 518400 epochs.

With all of this information, the trick is calculating the right price to propose to the storage provider. There's no going back if they accept the proposal...even if you mess up and overpay. And that's exactly what happened to me.

I did not have a unit test in place to verify the price we would be paying did not exceed the price in USD we were comfortable with for six months of storage for any given file size. Because of this, I happened to query a storage provider who quoted a verify high price and a bug in my code missed the verification calculation. So, we ended up paying $60 to store a file that was about 7MB for six months.

The moral of this story is test, test, test.


  