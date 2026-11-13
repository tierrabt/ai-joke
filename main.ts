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
  "I told my coding agent to fix one typo. It opened a PR titled 'Modernize architecture' and fixed the typo in the description.",
  "I asked my coding agent why it rewrote the whole auth module. It said, 'You're absolutely right to ask.'",
  "Every time my coding agent says 'Let me simplify this,' my diff grows by 400 lines.",
  "My coding agent found the bug instantly and roasted whoever wrote that code: itself, four minutes ago.",
  "The agent's commit message said 'minor cleanup'. The diff said 4,000 lines and a new framework.",
  "My coding agent says 'You're absolutely right!' so often that I've started being wrong on purpose just to feel something.",
  "I asked my coding agent to leave the code better than it found it. It found it working.",
];

// Picked: the shortest setup with the latest turn. The familiar rule ("leave it better than you found it")
// sets up a cleanup, and the last word flips it: the one state an eager agent can't improve on is "working".
const JOKE = CANDIDATES.find((j) => j.includes('better than it found')) ?? CANDIDATES[3];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
