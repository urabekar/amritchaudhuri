# Wikidata starter kit — Amrit Chaudhuri

Goal: create one well-sourced Wikidata item so Google can anchor and disambiguate your
identity (the single biggest lever for a Knowledge Panel). Wikidata is factual statements,
not prose, so keep everything below strictly factual and cited. Promotional or unsourced
claims are what get items flagged or deleted.

---

## Step-by-step (about 10 minutes)

1. Create a free account at https://www.wikidata.org (top-right "Create account").
2. Click "Create a new Item" (left menu, or go to https://www.wikidata.org/wiki/Special:NewItem).
3. Set **Label**, **Description**, and **Aliases** (below).
4. Add each **statement** below: click "add statement," type the property name, pick the value.
5. For each statement, click "add reference" and paste one of the **reference URLs** (use
   property `reference URL` / P854). This is what protects the item from deletion.
6. Save. Copy the item's **Q-ID** (the URL will look like wikidata.org/wiki/Q123456789).
7. Send me that Q-ID/URL and I'll add it to your site's `sameAs` so the entity links up.

---

## Label / Description / Aliases

- **Label (English):** Amrit Chaudhuri
- **Description (English):** American biopharma and life sciences infrastructure executive; co-founder of SmartLabs
- **Also known as (aliases):** (leave blank, or add a nickname if you use one)

---

## Statements to add (property → value)

| Property (code) | Value | Notes |
|---|---|---|
| instance of (P31) | human (Q5) | required |
| sex or gender (P21) | male (Q6581097) | [confirm] |
| date of birth (P569) | 1985 | year only; add full date if you want |
| place of birth (P19) | New Delhi (Q987) | |
| country of citizenship (P27) | United States of America (Q30) | [confirm — add India (Q668) if dual] |
| occupation (P106) | entrepreneur (Q131524) | |
| occupation (P106) | business executive (Q1162163) | second occupation value |
| educated at (P69) | Boston University (Q49110) | attended; degree not required for this property |
| field of work (P101) | biotechnology (Q7108) | |
| official website (P856) | https://www.amritchaudhuri.com | |
| LinkedIn personal profile ID (P6634) | amrit-chaudhuri | the slug only |
| Crunchbase person ID (P2087) | amrit-chaudhuri | the slug only |
| ORCID iD (P496) | (add once you create an ORCID) | optional, strong |
| X/Twitter username (P2002) | (your handle, if any) | optional |

If you want to record the companies, you can add **employer (P108)** statements, but only
if those companies have their own Wikidata items. SmartLabs / Kaliper / Exycute may not yet;
skip rather than invent. (Creating company items later is a separate, optional step.)

---

## Reference URLs (use these to source the statements above)

Attach at least one to the key statements (occupation, date/place of birth, official website):

- STAT News profile: https://www.statnews.com/2017/07/07/amrit-chaudhuri-science-companise/
- The Boston Globe: https://www.bostonglobe.com/business/2016/02/23/troubleshooter-works-remove-pain-points-for-kendall-square-biotechs/vAHZeJwezOQKh9RW9KlGTL/story.html
- Inc. — 20 Inspiring Entrepreneurs: https://www.inc.com/drew-hendricks/20-inspiring-entrepreneurs-improving-health-for-all.html
- Fortune (Brainstorm Health): https://fortune.com/2016/11/02/drug-development-testing-success-approval/
- Crunchbase (person): https://www.crunchbase.com/person/amrit-chaudhuri
- Your site: https://www.amritchaudhuri.com

---

## Notability note (so it survives review)

Wikidata's bar is lower than Wikipedia's: an item is acceptable if it refers to a clearly
identifiable entity described in at least one reliable, public source. Your coverage in STAT,
the Boston Globe, Fortune, and Inc., plus a granted US patent and named-founder records, comfortably
clears that. Keep statements factual and cited; do not add subjective or promotional values.

---

## What I need from you to finalize the on-site link
1. Confirm citizenship (US only, or US + India).
2. Full date of birth, or keep year-only (1985)?
3. Any X/Twitter handle to include?
4. The Q-ID once the item is created — then I add it to your hub `sameAs`.
