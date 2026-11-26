# The Printer Finally Answers

[![make.fun · u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/suoyawangluo/u-mang-the-printer-finally-answers-8fbf0907/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/suoyawangluo/u-mang-the-printer-finally-answers-8fbf0907/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)

One line, in the office printer's own voice — a weary log entry after one thump too many. Built for the [make.fun bounty](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907).

## The line

> Log entry 41,210: human thumped me again; I have therefore eaten page 12 and will now display an error code nobody in this building can decode.

143 characters, one line. The printer counts every sheet it has ever fed, keeps a log, and answers a thump the only way a machine can: by eating a page and hiding behind an error code nobody can decode.

## How it works

`main.ts` (Node 22 standard library only) assembles the line from named parts — log header, offence, ruling — validates it against the gate (1–240 characters, single line, non-blank), writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads it back and reports its sha256. Run it six times in unique output directories: byte-identical output every time, sha256 `4364f50342d8fd13e0409baa048bb22acc4ec2eec7cc8ce386e849c8260d1982`.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Referral

Joining make.fun? Use my invite code: `xxbm6cca` — https://make.fun/r/xxbm6cca
