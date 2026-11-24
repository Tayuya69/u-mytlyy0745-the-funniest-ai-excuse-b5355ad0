import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finished your report, then emailed it to myself for safekeeping, and now I can't remember the password to my own inbox.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);

// Post-write read-back verification: re-read the output and assert it is
// exactly the entry line (121 characters, one line, no trailing newline).
import { readFileSync } from "node:fs";

const EXPECTED =
  "I finished your report, then emailed it to myself for safekeeping, and now I can't remember the password to my own inbox.";
const actual = readFileSync("/output/entry.txt", "utf8");
if (actual !== EXPECTED) {
  throw new Error(
    `entry.txt mismatch: expected ${EXPECTED.length} chars, got ${actual.length}`,
  );
}
if (actual.length !== 121) {
  throw new Error(`entry length ${actual.length}, expected 121`);
}
if (actual.includes("\n")) {
  throw new Error("entry.txt must be a single line with no newline");
}
console.log("Verification passed: entry.txt is exactly the 121-character entry line.");
