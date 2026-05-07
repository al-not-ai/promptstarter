# Arsenal Stress Test — 2026-05-06-cycle12

**Run:** 2026-05-07T03:40:32.331Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 174,007 in / 33,559 out  
**Input breakdown:** 174,007 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.2734  
**Cost per case (avg):** $0.0043  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 19,453 / 4,561 | $0.0338 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 25,083 / 4,275 | $0.0372 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 27,400 / 5,571 | $0.0442 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 24,711 / 4,037 | $0.0359 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 24,568 / 3,854 | $0.0351 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 28,272 / 6,907 | $0.0502 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 24,520 / 4,354 | $0.0370 | [open](./cfo-pitch.md) |
| **Total** | **63** | **174,007 / 33,559** | **$0.2734** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 95,208 / 17,726 | $0.1471 |
| Northwind XR-Series Combi Oven | 14 | 39,402 / 7,924 | $0.0632 |
| Aldermark 12-Week Operations Reset | 14 | 39,397 / 7,909 | $0.0632 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

