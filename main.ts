// The Worst App Idea Ever Pitched
// Writes one sentence (1-240 chars) pitching the worst, most useless app
// imaginable, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "RainCheck Pro is a subscription app for commuters that sends a push notification every morning to confirm it is not raining, tracks your dry days on a streak, and lets you compete with friends for the longest rain-free run.";

// The sealed gate accepts 1–240 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Verify what was actually written: read it back and refuse a mismatch,
// so a partial or corrupted write can never pass as an entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the sealed line");
}
