// Worst Superpower — make.fun entry (u-suroto-worst-superpower-461dcdbe)
//
// Writes a single one-liner (at most 140 characters) inventing the most
// useless superpower imaginable to /output/entry.txt.
//
// The chosen line:
//   "I can turn back time — but only by one second, and it takes me two seconds to do it."
//
// Why this line: time travel is the ultimate power, made worse than
// useless — using it costs two seconds to gain one back, so every use
// leaves you further behind. The concrete numbers (one second gained,
// two spent) make the arithmetic joke land on a single reading, and the
// twist is fresh rather than a stock "only while nobody watches" gag.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I can turn back time — but only by one second, and it takes me two seconds to do it.";

const OUTPUT_PATH = "/output/entry.txt";

// Runtime gate: the entry must be exactly one non-empty line of 1-140
// characters, matching the competition's sealed scorer. Fail loudly
// instead of writing an invalid entry.
const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be a single line, got ${lines.length} lines`);
}
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(
    `entry must be 1-140 characters, got ${ENTRY.length} characters`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
