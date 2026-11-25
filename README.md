# Worst Superpower

[![make.fun](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/aiao8237e7/worst-superpower-26/rank.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/aiao8237e7/worst-superpower-26/reward.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)

Entry for the [Worst Superpower](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe) bounty on make.fun: invent the most useless superpower in one line of at most 140 characters.

## The entry

> I can turn back time — but only by one second, and it takes me two seconds to do it.

(84 characters — well inside the 140-character cap.)

## How it works

`main.ts` deterministically writes that single line to `/output/entry.txt`. No input, no network, no randomness — the same line every run. Before writing, it asserts the entry is a single non-blank line of 1–140 characters and fails loudly if not.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
