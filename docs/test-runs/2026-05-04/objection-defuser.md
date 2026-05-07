# objection-defuser — stress test results

**Run:** 2026-05-04  
**Cases:** 9 (0 OK)  
**Tokens:** 0 in / 0 out  
**Engine cost (this tool):** $0.0000  

---

## [V] Objection — too expensive / build in-house / Empathize & Probe / Buy Time

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "You're too expensive — we can build this in-house",
    "yourEdge": "3-week implementation vs. 9-month build cycle"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** ERROR | **Time:** 243ms

**Error:** TypeError: terminated

---

## [V] Objection — bad timing post-reorg / Stick to ROI / Two Alternatives

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Now is not a good time — we just went through a reorg",
    "yourEdge": "Cuts rep ramp time by 40%, works faster during transitions"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** ERROR | **Time:** 314ms

**Error:** TypeError: terminated

---

## [V] Objection — committee approval / Push Back / Firm Commitment

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "I need to take this to the committee before we can move",
    "yourEdge": "We offer a 30-day pilot with a single signature"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 3
  }
}
```

**Status:** ERROR | **Time:** 239ms

**Error:** TypeError: terminated

---

## [V] Objection — SPARSE — "not now" / Empathize & Probe / Soft Agreement

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Not now",
    "yourEdge": "saves time"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** ERROR | **Time:** 228ms

**Error:** TypeError: terminated

---

## [V] Objection — HOSTILE — "don't trust your numbers" / Stick to ROI / Soft Agreement

**Profile:** Velara Revenue OS  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "I don't trust your numbers. Show me independent proof or this conversation is over.",
    "yourEdge": "Forecast accuracy SLA backed by contract — auditable claims"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 1
  }
}
```

**Status:** ERROR | **Time:** 421ms

**Error:** TypeError: terminated

---

## [N] Objection — competitor cheaper + longer warranty / Stick to ROI / Two Alternatives

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "Your unit costs almost double Convotherm's and they're offering a longer warranty",
    "yourEdge": "30% lower energy bill plus 10-year sealed steam generator warranty pays back the price gap in under 18 months"
  },
  "sliderValues": {
    "response-posture": 1,
    "next-step-aggression": 2
  }
}
```

**Status:** ERROR | **Time:** 224ms

**Error:** TypeError: terminated

---

## [N] Objection — "already bought 12 Rationals 2yr ago, kitchen is full" / Empathize & Probe / Buy Time

**Profile:** Northwind XR-Series Combi Oven  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We bought 12 Rationals two years ago. The kitchens are full — there's no room and no budget to replace working equipment.",
    "yourEdge": "XR-Series replaces 4 pieces of equipment per unit — frees floor space without replacing the Rationals"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 0
  }
}
```

**Status:** ERROR | **Time:** 207ms

**Error:** TypeError: terminated

---

## [A] Objection — "tried McKinsey, got a deck" / Push Back / Firm Commitment

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We tried McKinsey's ops practice last year and got a 90-page deck. Why is this different?",
    "yourEdge": "Working fixes shipped by week 12, not recommendations — 50% fee held back until margin recovery is signed off"
  },
  "sliderValues": {
    "response-posture": 2,
    "next-step-aggression": 3
  }
}
```

**Status:** ERROR | **Time:** 335ms

**Error:** TypeError: terminated

---

## [A] Objection — "don't have leadership time to give" / Empathize & Probe / Soft Agreement

**Profile:** Aldermark 12-Week Operations Reset  
**Inputs:**

```json
{
  "toolId": "objection-defuser",
  "variableValues": {
    "statedObjection": "We don't have 12 weeks of leadership time to give you. Everyone here is already underwater.",
    "yourEdge": "We embed alongside the leadership team, not on top of them — we do the legwork and only pull leadership in for specific decisions"
  },
  "sliderValues": {
    "response-posture": 0,
    "next-step-aggression": 1
  }
}
```

**Status:** ERROR | **Time:** 280ms

**Error:** TypeError: terminated

---

