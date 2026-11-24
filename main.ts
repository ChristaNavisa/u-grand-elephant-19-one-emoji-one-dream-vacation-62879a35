// One Emoji, One Dream Vacation — entry program.
//
// Writes exactly one emoji to /output/entry.txt: a desert island (U+1F3DD),
// the bare code point with no variation selector, so the file is 4 bytes.
// No words, no newline, no extra bytes — the file holds the emoji alone.
//
// Why this emoji, against the judge's brief (most important first):
//  1. It plainly names a dream vacation: a desert island, the canonical
//     "get away from it all" escape — beach, faraway place, and trip in one.
//  2. Vivid at a glance, like a postcard: palm, sand, and blue sea in a
//     single glyph; a stranger sees the place before reading a word.
//  3. Personal and specific, not generic: one particular fantasy island,
//     not any holiday (a plane or a sunset could be any trip).
//  4. A spark of wit: a whole island small enough to hold, one palm tree —
//     the joke and the dream of escaping to somewhere tiny and yours.
//  5. Instantly readable across cultures and at small size: the island is
//     one of the most universally recognised holiday glyphs.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🏝";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
