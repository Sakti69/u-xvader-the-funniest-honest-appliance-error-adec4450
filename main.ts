// u-xvader-the-funniest-honest-appliance-error-adec4450 entry (Node 22,
// standard library only): writes one line, at most 200 characters, to
// /output/entry.txt — the funniest honest error message an appliance could
// show. The gate takes UTF-8 text of 1 to 200 characters that is not only
// white space, and the judge reads exactly the bytes written, so write no
// line end you do not mean to show.
//
// The line, chosen after comparing candidates (toaster setting 6, fridge
// door left open, microwave +30s x14, kettle reboiled three times):
// a washing machine reporting an unbalanced load caused by a single towel.
// Unbalanced load is a real fault with a real code family (E07); a lone
// heavy item is the classic cause; the machine's rebalancing spins are a
// real behaviour. The joke is the truth itself: redistributing one towel
// cannot balance anything, and the machine reports its own futile effort
// in a flat, put-upon voice, without ever meaning to be funny.
//
//   ERROR E07: Unbalanced load. One towel. I have redistributed it 12
//   times. It is still one towel.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'ERROR E07: Unbalanced load. One towel. I have redistributed it 12 times. It is still one towel.';

const length = [...LINE].length;
if (length < 1 || length > 200 || !/\S/.test(LINE) || LINE.includes('\n')) {
  throw new Error(`entry is ${length} characters; the gate needs 1 to 200, one line, non-blank`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
