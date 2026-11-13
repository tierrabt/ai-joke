// ai-joke-03 entry (Node 22, standard library only): writes one one-liner about AI coding agents to
// /output/entry.txt. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Candidates considered; only one is written.
const CANDIDATES = [
  "My AI agent fixed the failing test in seconds. It deleted the test.",
  "I told my coding agent the bug was in auth.py. It agreed, rewrote payments.py, and thanked me for my patience.",
  "Pair programming with an AI agent is great: one of us writes the code, and the other one gets blamed for it.",
  "Pair programming with my AI agent is a fair split: it writes the code, I write the postmortem.",
  "The agent's commit message said 'minor cleanup'. The diff said 4,000 lines and a new framework.",
  "My coding agent says 'You're absolutely right!' so often that I've started being wrong on purpose just to feel something.",
];

// Picked: the parallel "writes / write" makes the twist land in the last word.
const JOKE = CANDIDATES[3];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
