// Scans source files for stray non-Latin characters and machine-corrupted text.
// Run: node scripts/check-text.mjs
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const ALLOWED = new Set([
  0x00a9, // (c)
  0x00b7, // middle dot
  0x00a0, // nbsp
  0x2013, 0x2014, // en/em dash
  0x2018, 0x2019, // curly quotes
  0x201c, 0x201d,
  0x2026, // ellipsis
]);

const EXTS = new Set(['.ts', '.tsx', '.css', '.mjs', '.json', '.md']);
const ROOTS = ['src', 'scripts'];
const SELF = 'scripts/check-text.mjs';

// CJK, kana, hangul ranges built from escapes so this file stays clean.
const CJK = /[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\uf900-\ufaff]/;
// A lowercase/uppercase Latin fragment welded onto the end of an Indonesian word.
const WELDED = /\b[a-z]{3,}(?:ID|IDC|YC|ASD|ASR|WK|Locale|Grammar|Nucleus)\b/;
// Word starting with digits then a capital.
const DIGIT_GLUE = /\b\d{2,}[A-Z][a-z]{3,}/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (EXTS.has(extname(p)) && p !== SELF) out.push(p);
  }
  return out;
}

const files = ROOTS.filter((r) => {
  try { return statSync(r).isDirectory(); } catch { return false; }
}).flatMap((r) => walk(r));

let bad = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  const issues = [];

  const chars = new Set();
  for (const ch of src) {
    const c = ch.codePointAt(0);
    if (c > 127 && !ALLOWED.has(c)) chars.add(`${ch} U+${c.toString(16).toUpperCase()}`);
  }
  if (chars.size) issues.push(`stray characters: ${[...chars].join(' ')}`);

  src.split('\n').forEach((line, i) => {
    if (CJK.test(line)) issues.push(`line ${i + 1}: CJK/kana/hangul`);
    const w = line.match(WELDED);
    if (w) issues.push(`line ${i + 1}: welded fragment "${w[0]}"`);
    const d = line.match(DIGIT_GLUE);
    if (d) issues.push(`line ${i + 1}: digit-glued word "${d[0]}"`);
  });

  if (issues.length) {
    bad++;
    console.log(`\n${f}`);
    for (const i of issues) console.log(`  - ${i}`);
  }
}

console.log(`\nscanned ${files.length} files, ${bad} with issues`);
process.exit(bad ? 1 : 0);
