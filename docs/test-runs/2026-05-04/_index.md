# Arsenal Stress Test — 2026-05-04

**Run:** 2026-05-06T02:58:05.421Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 205,057 in / 36,510 out  
**Input breakdown:** 205,057 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.3101  
**Cost per case (avg):** $0.0049  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 21,154 / 4,635 | $0.0355 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 29,205 / 4,319 | $0.0406 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 31,522 / 5,560 | $0.0475 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 28,833 / 3,851 | $0.0385 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 30,823 / 5,504 | $0.0467 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 32,394 / 6,781 | $0.0530 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 31,126 / 5,860 | $0.0483 | [open](./cfo-pitch.md) |
| **Total** | **63** | **205,057 / 36,510** | **$0.3101** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 112,458 / 19,853 | $0.1694 |
| Northwind XR-Series Combi Oven | 14 | 46,302 / 8,268 | $0.0701 |
| Aldermark 12-Week Operations Reset | 14 | 46,297 / 8,389 | $0.0706 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

