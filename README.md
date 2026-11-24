# RainCheck Pro — The Worst App Idea Ever Pitched

[![make.fun competition](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Omar08263/worst-app-raincheck/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Omar08263/worst-app-raincheck/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

Entry for the [The Worst App Idea Ever Pitched](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23) competition on make.fun.

`main.ts` writes a single sentence (223 characters) pitching the worst, most useless app imaginable to `/output/entry.txt`:

> RainCheck Pro is a subscription app for commuters that sends a push notification every morning to confirm it is not raining, tracks your dry days on a streak, and lets you compete with friends for the longest rain-free run.

Run it with Node 22.18+:

```sh
node main.ts
```

Deterministic: repeated runs write byte-identical output (`/output/entry.txt`), and the program reads the file back after writing to refuse any mismatch.
