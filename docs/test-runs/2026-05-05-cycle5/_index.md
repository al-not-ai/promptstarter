# Arsenal Stress Test — 2026-05-05-cycle5

**Run:** 2026-05-06T02:02:29.329Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 205,057 in / 36,292 out  
**Input breakdown:** 205,057 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.3092  
**Cost per case (avg):** $0.0049  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 21,154 / 4,555 | $0.0351 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 29,205 / 3,972 | $0.0393 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 31,522 / 5,759 | $0.0483 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 28,833 / 3,782 | $0.0382 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 30,823 / 5,739 | $0.0476 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 32,394 / 7,155 | $0.0545 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 31,126 / 5,330 | $0.0462 | [open](./cfo-pitch.md) |
| **Total** | **63** | **205,057 / 36,292** | **$0.3092** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 112,458 / 19,432 | $0.1677 |
| Northwind XR-Series Combi Oven | 14 | 46,302 / 8,501 | $0.0710 |
| Aldermark 12-Week Operations Reset | 14 | 46,297 / 8,359 | $0.0705 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

