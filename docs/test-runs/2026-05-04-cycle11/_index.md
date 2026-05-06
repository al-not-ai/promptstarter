# Arsenal Stress Test — 2026-05-04-cycle11

**Run:** 2026-05-06T10:48:50.176Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 176,140 in / 35,702 out  
**Input breakdown:** 176,140 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.2837  
**Cost per case (avg):** $0.0045  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 19,453 / 4,802 | $0.0348 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 25,083 / 4,254 | $0.0371 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 27,400 / 5,766 | $0.0450 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 24,711 / 3,794 | $0.0349 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 26,701 / 5,494 | $0.0433 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 28,272 / 6,935 | $0.0504 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 24,520 / 4,657 | $0.0382 | [open](./cfo-pitch.md) |
| **Total** | **63** | **176,140 / 35,702** | **$0.2837** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 96,393 / 19,242 | $0.1541 |
| Northwind XR-Series Combi Oven | 14 | 39,876 / 8,041 | $0.0641 |
| Aldermark 12-Week Operations Reset | 14 | 39,871 / 8,419 | $0.0656 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **63/63**

