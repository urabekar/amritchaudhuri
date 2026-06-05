# amritchaudhuri.com

Personal website for Amrit Chaudhuri. Hand-coded static HTML/CSS/JS with
JSON-LD Person/Organization/Article schema, an OG/Twitter share image,
a chronological Insights & Press feed (essays + press), and an RSS feed.

## Structure

```
index.html                Hub: hero, stats, profile, what I build, now,
                          statement, career, about, recognition,
                          insights & press, contact
styles.css                Shared stylesheet
sitemap.xml               Sitemap for Google Search Console
robots.txt                Crawl directives
rss.xml                   RSS 2.0 feed of essays
CNAME                     www.amritchaudhuri.com (GitHub Pages custom domain)
insights/                 Standalone essay pages (one per essay; real,
                          indexable, with their own Article schema)
images/                   Site images (the 4 used: amrit-headshot,
                          amrit-speaking, lab-space, amrit-about)
spoke-schema-snippets.md  JSON-LD to paste into APC/Kaliper/Exycute sites
wikidata-starter-kit.md   Wikidata reference notes
```

No build step. The files in this repo are the live site.

## Deploy (GitHub Pages)

1. Push to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin git@github.com:<YOUR-USER>/amritchaudhuri.com.git
   git push -u origin main
   ```
2. On GitHub: Settings → Pages → Build and deployment.
   Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`.
   The `CNAME` file already sets the custom domain to `www.amritchaudhuri.com`.
3. DNS at your registrar:
   - `www` → CNAME `<YOUR-USER>.github.io`
   - Apex `amritchaudhuri.com` → either ALIAS/ANAME `<YOUR-USER>.github.io`,
     or A records to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Back in Settings → Pages, enable "Enforce HTTPS" once the cert provisions
   (usually a few minutes).

## Adding a new essay (current manual process)

1. Create `insights/<slug>.html` by copying an existing essay page (e.g.
   `insights/keratin-repair-patent.html`) and editing the title,
   description, date, body, references, and the JSON-LD `Article` block.
2. Add a matching post object to the `posts` array in `index.html`
   (same `id`, `iso`, `t`, `tags`, `sub`, `body`, `refs`).
3. Append the new essay URL to `sitemap.xml`.
4. Regenerate `rss.xml` (Node script below).

### Regenerate rss.xml

```bash
node -e '
const fs=require("fs");
let s=fs.readFileSync("index.html","utf8");
let i=s.indexOf("const posts = [");let j=s.indexOf("\n];",i);
let posts=eval(s.slice(i+"const posts = ".length,j+2));
let essays=posts.filter(p=>p.type==="essay").sort((a,b)=>b.iso<a.iso?-1:1);
const SITE="https://www.amritchaudhuri.com";
const esc=x=>(x||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const rfc=iso=>new Date(iso+"T09:00:00Z").toUTCString();
const items=essays.map(p=>{const u=SITE+"/insights/"+p.id+".html";return `  <item>\n    <title>${esc(p.t)}</title>\n    <link>${u}</link>\n    <guid isPermaLink="true">${u}</guid>\n    <pubDate>${rfc(p.iso)}</pubDate>\n    <description>${esc(p.sub||"")}</description>\n  </item>`;}).join("\n");
const rss=`<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n  <title>Amrit Chaudhuri</title>\n  <link>${SITE}/#insights</link>\n  <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>\n  <description>Essays by Amrit Chaudhuri.</description>\n  <language>en-us</language>\n  <lastBuildDate>${rfc(essays[0].iso)}</lastBuildDate>\n${items}\n</channel>\n</rss>\n`;
fs.writeFileSync("rss.xml",rss); console.log("rss.xml updated, "+essays.length+" essays");'
```

## Future: convert to a static-site generator

When publishing gets frequent, port to Astro or Eleventy: each essay becomes
a Markdown file with frontmatter (title, date, tags, description), and
the generator builds the HTML, the RSS feed, and the sitemap automatically.
The schema and OG tags carry over via templates.

## Notes

- The `images/` folder contains the original photo uploads as well as the
  four used on the site. They're harmless but inflate the repo size;
  remove the unused ones later if you want a leaner clone.
- The hero, share image, and schema all reference `images/amrit-headshot.jpg`.
  Reusing this same file on LinkedIn, Crunchbase, and Wikidata strengthens
  entity consolidation.
- Wikidata items: person `Q139913228`, SmartLabs `Q139913384`.
