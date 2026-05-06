# Arsenal Stress Test — cycle-7

**Run:** 2026-05-06T02:43:22.304Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 205,057 in / 35,318 out  
**Input breakdown:** 205,057 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.3053  
**Cost per case (avg):** $0.0048  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 21,154 / 4,413 | $0.0346 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 29,205 / 4,259 | $0.0404 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 31,522 / 5,717 | $0.0481 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 28,833 / 3,636 | $0.0376 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 30,823 / 5,665 | $0.0473 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 32,394 / 6,350 | $0.0513 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 31,126 / 5,278 | $0.0460 | [open](./cfo-pitch.md) |
| **Total** | **63** | **205,057 / 35,318** | **$0.3053** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 112,458 / 18,776 | $0.1651 |
| Northwind XR-Series Combi Oven | 14 | 46,302 / 8,252 | $0.0700 |
| Aldermark 12-Week Operations Reset | 14 | 46,297 / 8,290 | $0.0702 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

