---
title: Shrink The Scope Of The Problem
date: '2023-02-06T15:15:04.999Z'
tags:
  - product
  - blog
summary: ''
draft: false
---
Problem-solving is very rarely about the "solving" part. The solution is an output. The input is your understanding and framing of the problem. Yet most many people spend the majority of their time on the solution. We beta test solutions. We A/B test solutions. We sell solutions. In product development, this process can lead to scope creep or larger scope than the organization might have an appetite for.

Scope, in this sense, is inevitably a solution-oriented consideration. What is the scope of the problem? How much more work did we have to do to implement the solution? Can we even implement a solution considering the scope of the proposed solution? This is where I've seen so many product discussions get bogged down. A product manager might come to the table with a problem and a solution, the engineering team scopes the solution, and a timeline is formed. The PM and the business must then decide if they are willing to put that level of effort into the solution. And if they are not?

We cut scope, right?

The solution is hammered down into something the team can achieve in a reasonable amount of time. The business is happy, the PM is happy, the customer is...happy?

Did we hammer scope the solution so much that it is now solving a different problem? Have we stopped to consider that? Did we spend too much time reviewing the solution and not enough time reviewing the problem? This is the trouble with cutting scope of solutions. We do it, and it's necessary at times. But, we should consider cutting scope before we ever arrive at the solution.

We should consider cutting the scope of the problem. Let's create an example to see how this might look in practice.

You're the product manager (yes, there is only one in this imaginary company) working on a streaming music platform. It's recently been discovered that customers who have to click more than three times to find a song abandon the platform at a 60% higher rate than everyone else. You have your quantitative data, but you're a good PM and you know you need some qualitative data.

The low-hanging fruit is support emails. You reach out to the support team, and they pull all of the support requests they've received in the last three months about music discovery and search. As you comb through these emails, you see that people don't like how long it takes to find a song. They search for an artist, then they search for similar artists, and they may even drill down to find artists similar to the original similar artist. But the consensus is that it takes too long.

Time for some phone calls. You schedule five phone calls. Each person had similar struggles and all have all since moved to another streaming platform. They wanted to discover new music, but they felt like it took too long to do so. Each person used the similar-artist-algorithm and recommendations to find new artists. They did not use the Discover page your team spent six months building last year, so that's frustrating. But nevertheless, you have qualitative and quantitative data. The final thing you do is your competitive research.

Each person you spoke to mentioned one or two streaming services they are trying. You test these services out and you discover it only takes two steps to find similar artists and those artists are nested so there are even fewer clicks for the end user. This makes a ton of sense. You don't want to copy the competitor wholesale, but when something works, it works.

The solution is forming. The team needs to re-architect its search functionality to nest artist similarities so a customer can go multiple levels deep with a single search. The engineering team sighs. This is going to be a big one, they say. It's going to take a long time.

How long?

Long. Maybe 3 months.

Uh oh. The organization doesn't have the appetite for that. So you start the scope hammering process. What's the MVP? What will get us close enough to reduce the churn rate? You and the team brainstorm until you arrive at a solution that will only take a month and a half. We can get the number of clicks down to two but we can only show similar artists nested one deep.

That'll work. It's a great start, you think. The team starts building. Things run long. After two months, you ship the new search functionality. The business gives it two months to watch the churn data. Churn goes down slightly, but not enough to have justified two months of development work.

What went wrong? Maybe we hammered the scope too much, you think. Maybe we should have just built the full solution.

Record scratch. Stop the playback.

What would this have looked like if we had focused on the problem a little more and the solution a little less?

Is the problem the number of clicks it takes to discover new artists? Let's review the tape. After review, it's clear that clicks are not the problem. In fact, customers didn't mention the number of clicks. You did. Your quantitative data did. Customers said it took too long to discover new artists.

What's the scope of the problem? Length of time to discover new artists. That's too broad. How can we reduce the scope of the problem before even considering a solution? Well, we investigate the problem further. With this new perspective, you break out your iPhone and fire up the app. You start a stopwatch on your computer and you time how long it takes you to find a new artist using the new solution your team built.

You immediately see it. The results are painfully slow to load. It could be a single click and the results would be too slow. The scope of the problem just shrunk. The solution didn't necessarily need to be a rebuild of the search functionality. It's quite possible that the solution could have been a new index on the database the team uses for searching artists. The solution could have been as simple as a pre-caching of results. It doesn't matter what the actual solution is now because you've reduced the problem to something useful and manageable.

Reducing the scope of the problem makes the solution easier to plan for and more aligned with the customer.

If this sounds a lot like root cause analysis, it's because it is. However, in product development, it's easy to get lost in the solution. We know the product. We want to ship improvements and new functionality. A simple database index is hidden, but the experience can be massive. You have to force yourself to reduce the scope of the problem before even addressing the solution.

If you do that, you'll likely find your team shipping meaningful solutions faster than ever before.
