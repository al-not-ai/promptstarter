# Arsenal Stress Test — 2026-05-05-cycle6

**Run:** 2026-05-06T02:23:20.454Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 205,057 in / 36,572 out  
**Input breakdown:** 205,057 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.3103  
**Cost per case (avg):** $0.0049  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 21,154 / 4,558 | $0.0352 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 29,205 / 4,126 | $0.0399 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 31,522 / 5,811 | $0.0485 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 28,833 / 3,607 | $0.0375 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 30,823 / 5,709 | $0.0475 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 32,394 / 6,941 | $0.0537 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 31,126 / 5,820 | $0.0482 | [open](./cfo-pitch.md) |
| **Total** | **63** | **205,057 / 36,572** | **$0.3103** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 112,458 / 20,028 | $0.1701 |
| Northwind XR-Series Combi Oven | 14 | 46,302 / 8,360 | $0.0705 |
| Aldermark 12-Week Operations Reset | 14 | 46,297 / 8,184 | $0.0698 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **61/63**

