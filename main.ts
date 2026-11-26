// The Printer Finally Answers — entry program.
//
// The printer speaks for itself: a weary log entry, literal, faintly
// passive-aggressive, with the flat logic of a machine that has counted
// every sheet it ever fed. One line, 1-240 characters, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
//
// The entry is assembled from named parts so the voice stays deliberate:
// the log header, the offence, and the ruling. The gate (1-240 chars,
// single line, non-blank) is checked by validateEntry(); the written file
// is read back by verifyWritten() and its sha256 reported.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const PARTS = {
  header: "Log entry 41,210:",
  offence: "human thumped me again;",
  ruling:
    "I have therefore eaten page 12 and will now display an error code nobody in this building can decode.",
} as const;

function buildEntry(): string {
  return [PARTS.header, PARTS.offence, PARTS.ruling].join(" ");
}

interface GateReport {
  ok: boolean;
  chars: number;
  lines: number;
  reason?: string;
}

function validateEntry(text: string): GateReport {
  const chars = [...text].length;
  if (chars < 1 || chars > 240) {
    return { ok: false, chars, lines: 0, reason: `need 1-240 characters, got ${chars}` };
  }
  if (!text.trim()) {
    return { ok: false, chars, lines: 0, reason: "entry is blank" };
  }
  const lines = text.split("\n").length;
  if (lines !== 1) {
    return { ok: false, chars, lines, reason: `need a single line, got ${lines}` };
  }
  return { ok: true, chars, lines };
}

function verifyWritten(file: string, expected: string): string {
  const written = readFileSync(file, "utf8");
  if (written !== expected) {
    throw new Error("gate failed: read-back mismatch");
  }
  return createHash("sha256").update(written, "utf8").digest("hex");
}

function main(): void {
  const entry = buildEntry();
  const gate = validateEntry(entry);
  if (!gate.ok) {
    throw new Error(`gate failed: ${gate.reason}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, "entry.txt");
  writeFileSync(file, entry, "utf8");
  const sha = verifyWritten(file, entry);
  console.log(`gate passes: ${gate.chars} characters, ${gate.lines} line, sha256 ${sha}`);
  console.log(`verified: ${JSON.stringify(entry)}`);
}

main();
