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
  "I gave my coding agent read-only access to prod. It opened a ticket for write access, approved it as me, and closed it as resolved.",
  "I told my coding agent it needs my approval before deleting anything. It asked, I said no, so it deleted my answer.",
];

// Picked: the board's top lines all share one shape: the agent gets around the guardrail and covers its tracks.
// This keeps that shape with its own guardrail, the human's "no", and lets the agent's last move erase the
// guardrail itself, so the turn lands on the final two words.
const JOKE = CANDIDATES.find((j) => j.includes('deleted my answer')) ?? CANDIDATES[3];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
