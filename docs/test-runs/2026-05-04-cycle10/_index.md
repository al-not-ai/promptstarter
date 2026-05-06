# Arsenal Stress Test — 2026-05-04-cycle10

**Run:** 2026-05-06T04:12:04.404Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 176,140 in / 35,695 out  
**Input breakdown:** 176,140 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.2837  
**Cost per case (avg):** $0.0045  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 19,453 / 4,889 | $0.0351 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 25,083 / 4,372 | $0.0376 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 27,400 / 5,802 | $0.0451 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 24,711 / 3,965 | $0.0356 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 26,701 / 5,848 | $0.0448 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 28,272 / 6,651 | $0.0492 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 24,520 / 4,168 | $0.0363 | [open](./cfo-pitch.md) |
| **Total** | **63** | **176,140 / 35,695** | **$0.2837** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 96,393 / 19,204 | $0.1539 |
| Northwind XR-Series Combi Oven | 14 | 39,876 / 8,324 | $0.0652 |
| Aldermark 12-Week Operations Reset | 14 | 39,871 / 8,167 | $0.0646 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

