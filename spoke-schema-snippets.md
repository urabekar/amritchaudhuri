# Cross-site identity schema — paste-ready snippets

These connect your three company sites back to your hub (amritchaudhuri.com) so Google
treats all four domains as ONE entity centered on you. Each one declares the company,
names you as `founder` using the SAME canonical id used on your hub
(`https://www.amritchaudhuri.com/#amrit`), and links back to the hub via `sameAs`.

How to add each: paste the snippet into that site's page <head> (Squarespace: Settings →
Advanced → Code Injection → Header; Wix: Settings → Custom Code → Add to <head>, all pages).
Paste it verbatim, including the <script> tags.

---

## 1. APC Science  (apc.science)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.apc.science/#organization",
  "name": "APC Science",
  "url": "https://www.apc.science",
  "founder": {
    "@type": "Person",
    "@id": "https://www.amritchaudhuri.com/#amrit",
    "name": "Amrit Chaudhuri",
    "sameAs": "https://www.amritchaudhuri.com"
  },
  "sameAs": [
    "https://www.amritchaudhuri.com",
    "https://www.linkedin.com/in/amrit-chaudhuri"
  ]
}
</script>
```

---

## 2. Kaliper  (kaliperco.com)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.kaliperco.com/#organization",
  "name": "Kaliper",
  "url": "https://www.kaliperco.com",
  "founder": {
    "@type": "Person",
    "@id": "https://www.amritchaudhuri.com/#amrit",
    "name": "Amrit Chaudhuri",
    "sameAs": "https://www.amritchaudhuri.com"
  },
  "sameAs": [
    "https://www.amritchaudhuri.com",
    "https://www.linkedin.com/in/amrit-chaudhuri"
  ]
}
</script>
```

(If your title at Kaliper is Managing Partner rather than founder, change
`"founder"` to `"employee"` and keep the rest the same.)

---

## Off-page reciprocity (not schema, but part of establishing identity)

Schema declares the relationships; these confirm them from the outside. Do these too:

- LinkedIn → add `amritchaudhuri.com` to your profile's Website/Contact and Featured links.
- Crunchbase → set your personal profile's website to `amritchaudhuri.com`.
- Each company's LinkedIn Page → list you as founder and link the company site.
- Create a **Wikidata** item for yourself (biggest single lever for a Google Knowledge
  Panel) and an **ORCID** record (you hold a patent / research history). Once they exist,
  add both URLs to the `sameAs` list on the hub and I'll wire them in.
- After the site is live, claim your **Google Knowledge Panel** ("Claim this knowledge
  panel") and submit `sitemap.xml` in Google Search Console.
