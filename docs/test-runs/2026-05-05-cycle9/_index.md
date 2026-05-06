# Arsenal Stress Test — 2026-05-05-cycle9

**Run:** 2026-05-06T03:28:49.055Z  
**Endpoint:** http://localhost:3000/api/generate  
**Cases:** 63/63 OK  
**Tokens:** 178,624 in / 36,609 out  
**Input breakdown:** 178,624 uncached / 0 cache-read / 0 cache-write  
**Cache hit ratio (read / total input):** 0.0%  
**Engine cost:** $0.2893  
**Cost per case (avg):** $0.0046  

*Pricing: claude-haiku-4-5-20251001 — $0.8/1M uncached, $0.08/1M cache-read, $1/1M cache-write, $4/1M out*

---

## Per-tool breakdown

| Tool | Cases | Tokens (in/out) | Cost | File |
|---|---|---|---|---|
| pre-call-recon | 9 | 19,453 / 4,682 | $0.0343 | [open](./pre-call-recon.md) |
| objection-defuser | 9 | 25,083 / 4,024 | $0.0362 | [open](./objection-defuser.md) |
| competitor-battlecard | 9 | 27,400 / 5,596 | $0.0443 | [open](./competitor-battlecard.md) |
| cold-hook | 9 | 24,711 / 3,679 | $0.0345 | [open](./cold-hook.md) |
| follow-up-forward | 9 | 26,701 / 6,133 | $0.0459 | [open](./follow-up-forward.md) |
| deal-reviver | 9 | 28,272 / 7,136 | $0.0512 | [open](./deal-reviver.md) |
| cfo-pitch | 9 | 27,004 / 5,359 | $0.0430 | [open](./cfo-pitch.md) |
| **Total** | **63** | **178,624 / 36,609** | **$0.2893** |  |

## Per-profile breakdown

| Profile | Cases | Tokens (in/out) | Cost |
|---|---|---|---|
| Velara Revenue OS | 35 | 97,773 / 19,955 | $0.1580 |
| Northwind XR-Series Combi Oven | 14 | 40,428 / 8,526 | $0.0664 |
| Aldermark 12-Week Operations Reset | 14 | 40,423 / 8,128 | $0.0649 |

## Compliance scoreboard

- DRILL-DOWN OFFER present: **63/63**
- GROUNDING present: **63/63**
- Profile name surfaced in output: **62/63**

