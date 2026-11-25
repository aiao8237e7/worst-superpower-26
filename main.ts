// Worst Superpower — make.fun entry (u-suroto-worst-superpower-461dcdbe)
//
// Writes a single one-liner (at most 140 characters) inventing the most
// useless superpower imaginable to /output/entry.txt.
//
// The chosen line:
//   "I can make my phone battery last forever — but only while it's plugged in."
//
// Why this line: the power adds literally nothing — a phone plugged in
// already charges. It is specific (phone battery, plugged in), instantly
// clear, and pictures a hero proudly announcing a power that changes
// nothing at all.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I can make my phone battery last forever — but only while it's plugged in.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
