// Record of every essay, talk, interview and press entry on amritchaudhuri.com.
// Not published (see _config.yml). The pages are plain HTML written from this list,
// and the RSS script in README.md reads it. Keep it in step with the pages.
// essays carry full `body` (HTML) + optional `refs`. press/interview/talk carry `summary` + optional source {name,url}.
const posts = [
{id:"keratin-repair-patent", d:"May 24, 2026", iso:"2026-05-24", type:"essay",
 t:"The Molecule That Turns Heads", tags:["Advanced Peptides","Patent","Peptide Engineering","Materials Science"],
 sub:"How a synthetic keratin repair system I designed ended up in a shampoo bottle",
 body:`<p>Most of the science I worked on at Advanced Peptides never left the lab in a form a normal person would recognize. This one did. It ended up in a shampoo bottle.</p>
<p>One of the hardest peptide problems we took on had nothing to do with therapeutics. It was hair. Hair is keratin, a structural protein, and damaged hair is essentially keratin with broken or missing links in its sequence. For thirty years the industry's answer was hydrolyzed keratin: take whole keratin, break it into small fragments, and hope the pieces penetrate and patch the damage. It helped, but it was blunt. You were flooding the hair with generic protein fragments rather than replacing what was actually missing.</p>
<p>I wanted to solve it the way we solved hard problems at Advanced Peptides: precisely. The Human Genome Project had, by then, mapped the structure of human keratin down to the amino acid. That meant you could identify exactly which peptides degrade and where, then engineer a synthetic peptide that replicates the exact amino-acid sequence at the exact site of damage. Instead of patching with fragments, you rebuild the missing links, and the same chemistry can lay down a protective shield around the strand so it resists the next round of damage.</p>
<p>That system became <strong>US Patent 9,505,820B2</strong>, a biologically inspired synthetic keratin repair system. It was licensed and brought to market as the <strong>Bio-Advanced Peptide Complex</strong>, the technology at the center of JOICO's relaunched haircare line, engineered to repair the precise sites of damage and hold a molecular shield through roughly 25 shampoos.</p>
<p>I think about this project often, because it captured the whole thesis of the company in a single molecule: take a problem everyone had settled for solving crudely, do the deeper science, and turn it into something that ships at scale. It is also a useful reminder that peptide engineering is not only about drugs. The same rigor that designs a therapeutic can rebuild a strand of hair. The medium changes. The discipline does not.</p>`,
 refs:[["US Patent 9,505,820B2 (Google Patents)","https://patents.google.com/patent/US9505820B2"]]},

{id:"founder-to-advisor", d:"Jan 27, 2026", iso:"2026-01-27", type:"essay",
 t:"Founder to Advisor", tags:["SmartLabs", "Leadership", "Transition", "Public Service"],
 sub:"On building something meant to outlast you, and knowing when to hand it over",
 body:`<p>There is a moment in the life of a company when the most useful thing a founder can do is step to the side. After a decade of building, raising the capital, and growing the footprint from a single Kendall Square floor to a national network, I reached that moment with SmartLabs. In early 2024 the company announced a new round of funding and a planned leadership transition, and I moved from chief executive into a strategic advisory role.</p>
<p>The transition came alongside a Series C that the company raised to keep advancing its laboratory infrastructure and resourcing solutions. SmartLabs also welcomed a seasoned biopharma operator, Brian Taylor, as the incoming chief executive. Handing the wheel to an experienced leader at the moment a company shifts from building the model to scaling it is not a retreat. It is what you do when you have built something you want to last beyond your own tenure.</p>
<p>Some of the work I am proudest of in the later years had little to do with running the company day to day. I was appointed to a New York City Economic Development Corporation life sciences advisory group, helping a city think through how to grow its research base. And I had the chance to contribute to the federal conversation, submitting testimony to the House Committee on Energy and Commerce on biomedical infrastructure and the role of private sector innovation in keeping American science competitive. Building one company teaches you things that are worth contributing back to the broader system.</p>
<p>People sometimes ask whether it is hard to let go of something you started. It is, and it is not. It is hard because you carry a decade of decisions in your body and you notice every detail. It is not hard because the entire point of building shared, durable infrastructure is that it should not depend on any one person, including the person who started it. If it cannot outlast me, I did not actually build infrastructure. I built a job.</p>
<p>So I think of the transition less as an ending than as a test the company passed. The model is sound, the standards are set, and the team is strong enough to run without its founder in the chair. My work now is to advise, to contribute where the experience is useful, and to keep building at the same intersection of science, infrastructure, and capital that has held my attention for my entire career.</p>
`,
 refs:[["PR Newswire, SmartLabs announces $48M Series C funding (2024)","https://www.prnewswire.com/news-releases/smartlabs-announces-48-million-series-c-funding-to-advance-its-laboratory-infrastructure-and-resourcing-solutions-302037673.html"],["PR Newswire, SmartLabs names Brian Taylor as new chief executive (2024)","https://www.prnewswire.com/news-releases/smartlabs-announces-biopharma-veteran-brian-taylor-as-new-interim-ceo-302032038.html"],["NYCEDC, named to a life sciences advisory group (2022)","https://edc.nyc/press-release/nycedc-names-members-two-key-life-sciences-advisory-groups"],["Congress.gov, House Energy & Commerce testimony (2021)","https://www.congress.gov/117/meeting/house/114289/documents/HHRG-117-IF14-20211208-SD009.pdf"]]},

{id:"idea-without-a-name", d:"Nov 10, 2025", iso:"2025-11-10", type:"essay",
 t:"The Idea Without a Name", tags:["SmartLabs","Category Creation","Lab-as-a-Service"],
 sub:"How Labs-as-a-Service, Co-Working Labs, and Managed Research Centers All Missed What We Were Really Building",
 body:`<p>When we started building what eventually became SmartLabs, we did not have a name for it. We were not trying to invent a new category. We were trying to fix a set of problems that did not fit inside any existing one.</p>
<p>The confusion started with our first name: <strong>Mass Innovation Labs</strong>. People saw "Mass" and assumed a state initiative, not a scaling private company. In 2016 the Boston Globe introduced me as "chief encouragement officer" and described us as "an incubator of tech firms in Kendall Square." That word, incubator, stuck because it was the closest thing people knew. It was not what we were.</p>
<p>Others labeled us an accelerator. By 2020 the Business Wire used the term right in the headline: "Lab as a Service." That captured time and access, start in weeks, not years, but still missed the core idea. We were not a services vendor. We were rearchitecting the infrastructure layer so the space could change as the science changed.</p>
<p>In 2021, our own release named what had emerged: a "Laboratory as a Service (LaaS) leader," alongside a $250 million Series B and version 4.0 of our laboratory operating system. Around the same time, the phrase <strong>managed research center</strong> entered use for our newer sites.</p>
<p>Looking back, the vocabulary tells the story. Incubator. Accelerator. Lab as a service. Managed research center. Each was an attempt to describe the same thing. The throughline was consistent: remove friction, compress time, give teams an enterprise-grade environment they can shape without pausing the science. Sometimes the hardest part is not building it. It is explaining it.</p>`,
 refs:[
 ["The Boston Globe, \"Meet the chief encouragement officer in Kendall Square\" (2016)","https://www.bostonglobe.com/business/2016/02/23/troubleshooter-works-remove-pain-points-for-kendall-square-biotechs/vAHZeJwezOQKh9RW9KlGTL/story.html"],
 ["Business Wire, \"Lab as a Service\" (2020)","https://www.businesswire.com/news/home/20200302005522/en/SmartLabs-a-First-of-Its-Kind-Laboratory-as-a-Service-Expands-Nationally-with-CA-Location"],
 ["Business Wire, $250M Series B & Lab OS (2021)","https://www.businesswire.com/news/home/20210920005187/en/SmartLabs-Announces-%24250-Million-Series-B-and-Update-of-Proprietary-Laboratory-OS"]]},

{id:"the-vivarium-problem", d:"Aug 19, 2025", iso:"2025-08-19", type:"essay",
 t:"The Vivarium Problem", tags:["SmartLabs", "GxP", "Vivarium", "cGMP", "Operations"],
 sub:"The hardest infrastructure to share is the regulated kind, which is exactly why it was worth building",
 body:`<p>Shared office space is easy. Shared wet lab space is harder. Shared regulated space, the kind that houses animal research under GxP standards or manufactures cell and gene therapies under cGMP, is the hardest infrastructure problem I have worked on. It is also where the model mattered most.</p>
<p>The reason is that regulated facilities carry requirements most companies cannot meet alone and cannot afford to build for a single program. A vivarium has its own architecture, air handling, waste streams, monitoring, and staffing, all of it inspected. We expanded our Vivarium Program into Kendall Square because early stage teams needed compliant animal research capacity and had nowhere to get it at their scale. Pooling it was the only way to make it reachable for a company that was not yet large enough to justify its own.</p>
<p>We pushed the same logic further into the most demanding categories. We announced the launch and immediate sell out of GxP compliant animal research and manufacturing facilities, which told us the demand was real and underserved. And we set out to build what we described as the world's largest multi modality, multi product cGMP center for cell and gene therapies, in South San Francisco, on the back of our national expansion that began with our first California location.</p>
<p>What makes this work hard is that none of it tolerates shortcuts. A shared model only earns trust in regulated space if the operations are genuinely better than what each tenant could run on its own, not merely cheaper. The compliance has to be real, the documentation has to be airtight, and the team has to know more about running these rooms than any single client does. The shared part is the business model. The standards are not negotiable.</p>
<p>I am proud of this part of the work precisely because it was unglamorous and unforgiving. Anyone can put desks in a room. Building regulated infrastructure that multiple companies can rely on, and that holds up to inspection, is a different kind of engineering. It is also where the promise of shared infrastructure either proves itself or falls apart. Ours proved itself.</p>
`,
 refs:[["GlobeNewswire, expansion of the Vivarium Program into Kendall Square (2019)","https://www.globenewswire.com/news-release/2019/10/29/1936965/0/en/SmartLabs-Announces-Expansion-of-Vivarium-Program-into-Kendall-Square.html"],["MarketScreener, launch and sell-out of GxP-compliant animal research and manufacturing (2021)","https://www.marketscreener.com/news/latest/SmartLabs-Announces-Launch-and-Sell-Out-of-GxP-Compliant-Animal-Research-and-Manufacturing-Facilitie--36954767/"],["BioSpace, world's largest multi-modality cGMP center for cell and gene therapies (2021)","https://www.biospace.com/smartlabs-announces-launch-of-world-s-largest-multi-modality-and-multi-product-cgmp-center-for-cell-and-gene-therapies-in-south-san-francisco"],["Business Wire, expansion nationally with a California location (2020)","https://www.businesswire.com/news/home/20200302005522/en/SmartLabs-a-First-of-Its-Kind-Laboratory-as-a-Service-Expands-Nationally-with-CA-Location"]]},

{id:"building-buildings", d:"May 26, 2025", iso:"2025-05-26", type:"essay",
 t:"Building Molecules. Building Companies. Building… Buildings?", tags:["Career","Real Estate","Infrastructure","Kaliper"],
 sub:"From Chemistry to Concrete: How Science Led Me to Real Estate",
 body:`<p>I was trained to build molecules, to study biological systems, and, in what used to be a hobby, to build robots. None of that would have suggested a career in real estate. Yet today my work sits at the intersection of science, infrastructure, and development.</p>
<p>I did not choose real estate as a profession. I followed the bottleneck in science until it led to buildings. My first company, Advanced Peptides, completed more than 3,000 projects across 120 organizations including Harvard, Stanford, Pfizer, and Merck. That experience revealed how dependent scientific progress is on infrastructure, and how fragile that infrastructure can be.</p>
<p>In 2014 I co-founded Mass Innovation Labs, later renamed SmartLabs. The goal was not to build or lease real estate. It was to create a new kind of research infrastructure that could give biotech companies immediate access to enterprise-grade laboratories without the delays, cost, or permanence of traditional construction. To explain and defend that model, we had to learn the real-estate logic inside and out.</p>
<p>Laboratory construction can cost between one and two and a half thousand dollars per square foot. Developers acquire and entitle sites ahead of demand, installing enhanced infrastructure, redundant power, specialized exhaust, segregated wastewater, that can support roughly sixty percent of scientific use cases. A development program that might have required $1.5 billion could instead be achieved with one-third of that capital through shared investment.</p>
<p>I did not plan to work in real estate. The science brought me here. To accelerate discovery, I had to understand the systems that limit it, physical, financial, and civic. I still think of what I do as engineering. The medium simply changed. The molecules became buildings. I'm currently collaborating on new health and science infrastructure projects with the team at Kaliper.</p>`,
 refs:[
 ["Lab Design News, Professional Profile: Amrit Chaudhuri","https://www.labdesignnews.com/content/m7ymu97qi0hlhl5qcncn7ng9pt6r86"],
 ["Lab Design News, A Conversation with SmartLabs CEO Amrit Chaudhuri","https://www.labdesignnews.com/content/knaqxcq14aujdq0emxsl1vuimvzap1"],
 ["NYCEDC, Life Sciences Advisory Group Appointment","https://edc.nyc/press-release/nycedc-names-members-two-key-life-sciences-advisory-groups"],
 ["Kaliper, Company Overview","https://www.kaliperco.com/"]]},

{id:"keynote-taiwan-2025", d:"Apr 17, 2025", iso:"2025-04-17", type:"talk",
 t:"Keynote, Global CDMO Industry Outlook (Taiwan 2025)", tags:["CDMO","Keynote","Global"],
 summary:"At Taiwan's national CDMO summit, I delivered a keynote on the global state of the contract development and manufacturing industry, analyzing its evolution, consolidation, and geopolitical dynamics."},

{id:"smaller-faster-cheaper", d:"Nov 5, 2024", iso:"2024-11-05", type:"essay",
 t:"Smaller, Faster, Cheaper", tags:["Drug Development", "Thesis", "Infrastructure", "Thought Leadership"],
 sub:"A decade making the case that the rate limiter on medicine is infrastructure, not ideas",
 body:`<p>For most of the last fifty years, the story of why medicine is slow and expensive has been told as a story about science. The biology is hard, the failure rate is high, the trials are long. All of that is true. But it is not the whole story, and over a decade of building laboratory infrastructure I came to believe it is not even the binding constraint for many young companies.</p>
<p>At Fortune's Brainstorm Health in 2016, I argued that drug development cycles were getting smaller and faster, and that the reason had as much to do with how research gets resourced as with any single breakthrough. A small team with a good idea no longer needs to recreate the entire apparatus of a large pharmaceutical company to test it. If the infrastructure, the space, the equipment, the operations, the compliance, can be drawn on as a service, the team can move at the speed of its science rather than the speed of its real estate.</p>
<p>I made versions of this case for years, in an interview with Contract Pharma about maximizing discovery while minimizing cost, and later in a conversation with Executive Platforms titled, in their words, the future of medicine will cost less and move faster than we ever imagined. The throughline was always the same. The cost of a laboratory is mostly fixed and mostly duplicated across the industry. Every company pays again for the same thing. Pool that cost, and you change the economics of starting and scaling a therapeutics company.</p>
<p>The thesis got more pointed as the science got more complex. When I spoke with Fierce Pharma about the rise of multiple modalities, cell therapy, gene therapy, and the rest, the question was whether more modalities simply meant more problems. My answer was that it does not have to, if the infrastructure is designed to flex. A platform built to change as the science changes absorbs that complexity instead of passing it to every team as a new buildout.</p>
<p>None of this replaces the hard work of biology. A better building does not make a bad molecule good. But the gap between a promising idea and a tested one is filled with cost and time that has nothing to do with the idea itself. Closing that gap was the work. Smaller, faster, cheaper was never a slogan about the science. It was a claim about everything around it.</p>
`,
 refs:[["Fortune, how drug development cycles may be getting smaller and faster (2016)","https://fortune.com/2016/11/02/drug-development-testing-success-approval/"],["Contract Pharma, maximizing discovery and innovation while minimizing cost (2018)","https://www.contractpharma.com/exclusives/maximizing-discovery-innovation-while-minimizing-cost/"],["Executive Platforms, the future of medicine will cost less and move faster (2023)","https://epthoughtleaders.com/the-future-of-medicine-will-cost-less-and-move-faster-than-we-ever-imagined-a-conversation-with-amrit-chaudhuri-of-smartlabs/"],["Fierce Pharma, more modalities, more problems? Not necessarily (2023)","https://www.fiercepharma.com/sponsored/more-modalities-more-problems-not-necessarily-says-smartlabs"],["IDEA Collider, in conversation with Amrit Chaudhuri","https://www.youtube.com/watch?v=1hi8HgMs1s8"]]},

{id:"boarding-school-for-biotechs", d:"Aug 14, 2024", iso:"2024-08-14", type:"essay",
 t:"The Boarding School for Biotechs", tags:["Mass Innovation Labs", "Kendall Square", "Shared Infrastructure", "Origins"],
 sub:"What we were really building when we put a dozen startups under one roof in Kendall Square",
 body:`<p>In 2014, if you wanted to start a biotech company, the science was rarely the first obstacle. The building was. A new venture would spend a year or more and a large share of its first check on something that had nothing to do with discovery: finding raw space, designing it, permitting it, installing the power and exhaust and waste systems a wet lab needs, and hiring people to run all of it. The science waited while the infrastructure caught up.</p>
<p>We started Mass Innovation Labs to remove that wait. The idea was simple to say and hard to build: take enterprise grade laboratory space, operate it as a shared utility, and let a company move in and start experiments in weeks instead of years. When we launched our first space in Kendall Square, the Boston Globe described it as shared space that helps new life sciences ventures get off the ground. STAT covered the same shift, framing co-working labs as a new model for science in crowded, expensive cities.</p>
<p>The metaphor that stuck came from MedCity News, which called us a boarding school for biotechs. I liked it, because it captured something real. We were not just renting benches. We were giving young companies a place to grow up, with the shared services, the equipment, the operations team, and the neighbors that a first time founder cannot assemble alone. The Globe, in a profile around the same time, gave me a title I did not put on a business card: chief encouragement officer. That one stuck too, because so much of the early job was convincing scientists that they did not have to become facilities managers to do their work.</p>
<p>What we offered, in the words BioPharma Dive used, was an invitation: call us home. Underneath the friendly framing was a serious operating thesis. Most of what slows a biotech down in its first two years is not unique to that company. It is the same lab buildout, the same equipment, the same compliance, repeated company by company at enormous cost. Pool it, run it well, and you free founders to spend their scarce capital and time on the one thing only they can do, which is the science.</p>
<p>I think about those first years often. The buildings got bigger and the model got a real name later on, but the core conviction never changed. The hardest part of building a company is rarely the idea. It is everything that has to exist around the idea before the idea gets a chance. We set out to build that everything, and to make it shared.</p>
`,
 refs:[["The Boston Globe, shared space aids new life sciences ventures (2015)","https://www.bostonglobe.com/business/2015/05/04/mass-innovation-shared-lab-space-launches-kendall-square/syCG1o7Pqkm53O1H3ugBmI/story.html"],["STAT, co-working lab spaces cater to startups in crowded cities (2015)","https://www.statnews.com/2015/12/09/co-working-lab-spaces/"],["MedCity News, Kendall Square's boarding school for biotechs (2016)","https://medcitynews.com/2016/12/kendall-squares-boarding-school-biotechs/"],["The Boston Globe, meet the chief encouragement officer in Kendall Square (2016)","https://www.bostonglobe.com/business/2016/02/23/troubleshooter-works-remove-pain-points-for-kendall-square-biotechs/vAHZeJwezOQKh9RW9KlGTL/story.html"],["BioPharma Dive, MI Labs to biotechs: call us home (2016)","https://www.biopharmadive.com/news/mi-labs-to-biotechs-call-us-home/424591/"]]},

{id:"inv-57", d:"Jan 2024", iso:"2024-01-19", type:"press",
 t:"SmartLabs names biopharma veteran Brian Taylor as new interim CEO", tags:["SmartLabs", "Announcement"],
 source:{name:"PR Newswire",url:"https://www.prnewswire.com/news-releases/smartlabs-announces-biopharma-veteran-brian-taylor-as-new-interim-ceo-302032038.html"}},

{id:"inv-55", d:"Jan 2024", iso:"2024-01-18", type:"press",
 t:"SmartLabs announces $48M Series C to advance its laboratory infrastructure", tags:["SmartLabs", "Announcement"],
 source:{name:"PR Newswire",url:"https://www.prnewswire.com/news-releases/smartlabs-announces-48-million-series-c-funding-to-advance-its-laboratory-infrastructure-and-resourcing-solutions-302037673.html"}},

{id:"inv-56", d:"Jan 2024", iso:"2024-01-18", type:"press",
 t:"SmartLabs announces $48M Series C to advance its laboratory infrastructure", tags:["SmartLabs", "Announcement"],
 source:{name:"Boston Business Journal",url:"https://www.bizjournals.com/boston/news/2024/01/19/smartlabs-ceo-series-c-funding.html"}},

{id:"fierce-biotech-2023", d:"Nov 13, 2023", iso:"2023-11-13", type:"interview",
 t:"Talking drug development trends with SmartLabs", tags:["Drug Development","Interview"],
 summary:"An interview with FierceBiotech's Rebecca Williamson about the major disruption the sector is going through, and where the next chapter unfolds.",
 source:{name:"Fierce Biotech",url:"https://www.fiercebiotech.com/sponsored/talking-drug-development-trends-smartlabs"}},

{id:"outcomes-rocket-2023", d:"Sep 13, 2023", iso:"2023-09-13", type:"interview",
 t:"Elevating Pharma Research, Podcast & Video", tags:["Podcast","Operations"],
 summary:"How SmartLabs' Universal Lab Framework creates adaptable labs and streamlined operations for biopharma teams.",
 source:{name:"Outcomes Rocket",url:"https://outcomesrocket.health/smartlabs/2023/09/"}},

{id:"inv-72", d:"2023", iso:"2023-09-03", type:"talk",
 t:"Clustering Insights: exploring life sciences", tags:["Podcast"],
 source:{name:"JLL UK",url:"https://www.jll.co.uk/en/campaign/life-sciences-podcast"}},

{id:"inv-70", d:"2023", iso:"2023-09-02", type:"talk",
 t:"Case 3: SmartLabs, \u201cThe Lab\u201d", tags:["Podcast"],
 source:{name:"Spotify",url:"https://open.spotify.com/episode/5iQTnQlN4ZqxlnWd7xvdZx"}},

{id:"inv-71", d:"2023", iso:"2023-09-02", type:"talk",
 t:"Case 3: SmartLabs, \u201cThe Lab\u201d", tags:["Podcast"],
 source:{name:"YouTube",url:"https://www.youtube.com/watch?v=G-cZhfjv2VE"}},

{id:"inv-68", d:"Sep 2023", iso:"2023-09-01", type:"talk",
 t:"Elevating pharma research: the innovative path forward", tags:["Podcast"],
 source:{name:"Outcomes Rocket",url:"https://healthpodcastnetwork.com/episodes/outcomes-rocket/elevating-pharma-research-the-innovative-path-forward-with-amrit-chaudhuri-chief-executive-officer-and-co-founder-of-smartlabs/"}},

{id:"inv-69", d:"Sep 2023", iso:"2023-09-01", type:"talk",
 t:"Elevating pharma research: the innovative path forward", tags:["Podcast"],
 source:{name:"Video",url:"https://www.youtube.com/watch?v=o4wBTSaCjjU"}},

{id:"inv-66", d:"2023", iso:"2023-08-01", type:"talk",
 t:"Innovating lab space: ARM Studios interview", tags:["Video"],
 source:{name:"Alliance for Regenerative Medicine",url:"https://www.youtube.com/watch?v=Lf1_cCIBjno"}},

{id:"inv-67", d:"2023", iso:"2023-08-01", type:"talk",
 t:"Innovating lab space: ARM Studios interview", tags:["Video"],
 source:{name:"ARM Studios",url:"https://alliancerm.org/arm-studios/"}},

{id:"inv-65", d:"Jun 2023", iso:"2023-06-22", type:"talk",
 t:"Facilities of the future: Bisnow Bay Area Life Sciences Conference", tags:["Talk"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/san-francisco/news/life-sciences/the-facilities-of-the-future-smartlabs-ceo-amrit-chaudhuri-at-bisnows-bay-area-life-sciences-conference-119461"}},

{id:"the-lab-podcast-2023", d:"Apr 28, 2023", iso:"2023-04-28", type:"interview",
 t:"Case 3: SmartLabs, \"The Lab\" Podcast with Ben Kaplan", tags:["Podcast","Leadership"],
 summary:"Ben Kaplan dives deep into the world of lab infrastructure and innovation on TOP CEO's \"The Lab.\"",source:{name:"TOP CEO Podcast",url:"https://podcasts.apple.com/us/podcast/case-3-smartlabs-the-lab-with-amrit-chaudhuri/id1682011778?i=1000611039422"}},

{id:"inv-53", d:"Apr 2023", iso:"2023-04-27", type:"press",
 t:"SmartLabs to open advanced Managed Research Center next year", tags:["SmartLabs", "Coverage"],
 source:{name:"Medical Product Outsourcing",url:"https://www.mpo-mag.com/breaking-news/smartlabs-to-open-advanced-managed-research-center-next-year/"}},

{id:"bostoncom-cambridgeside-2023", d:"Mar 3, 2023", iso:"2023-03-03", type:"press",
 t:"SmartLabs to convert entire third floor of CambridgeSide Mall into lab space", tags:["Facilities","Adaptive Reuse"],
 summary:"SmartLabs plans to convert the third floor of the CambridgeSide Mall into state-of-the-art lab space.",
 source:{name:"Boston.com",url:"https://www.boston.com/news/local-news/2023/03/03/smartlabs-to-convert-entire-third-floor-of-cambridgeside-mall-into-lab-space/"}},

{id:"bisnow-cambridgeside-2023", d:"Mar 3, 2023", iso:"2023-03-03", type:"press",
 t:"Flexible lab provider leases entire third floor of CambridgeSide", tags:["Facilities","Leasing"],
 summary:"SmartLabs has leased the entire third floor of the CambridgeSide Mall for a new managed research center.",
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/life-sciences/smartlabs-117940"}},

{id:"globe-labs-in-a-mall-2023", d:"Mar 3, 2023", iso:"2023-03-03", type:"press",
 t:"Labs in a Mall? Why Not?", tags:["Facilities","Adaptive Reuse"],
 summary:"Feature coverage of SmartLabs' adaptive reuse project at CambridgeSide Mall, turning a retail floor into one of the region's most sophisticated laboratory spaces.",
 source:{name:"The Boston Globe",url:"https://www.bostonglobe.com/2023/03/03/business/labs-mall-why-not-top-floor-cambridgeside-set-become-lab-space/"}},

{id:"inv-50", d:"Mar 2023", iso:"2023-03-02", type:"press",
 t:"SmartLabs expands its Labs-as-a-Service network at CambridgeSide", tags:["SmartLabs", "Announcement"],
 source:{name:"CambridgeSide",url:"https://www.cambridgeside.com/press/smartlabs-announces-expansion-of-its-labs-as-a-service-network-at-cambridgeside"}},

{id:"inv-51", d:"Mar 2023", iso:"2023-03-02", type:"press",
 t:"SmartLabs expands its Labs-as-a-Service network at CambridgeSide", tags:["SmartLabs", "Announcement"],
 source:{name:"New England Real Estate Journal",url:"https://nerej.com/smartlabs-expands-labs-as-a-service-network-at-cambridgeside"}},

{id:"inv-52", d:"Mar 2023", iso:"2023-03-02", type:"press",
 t:"SmartLabs expands its Labs-as-a-Service network at CambridgeSide", tags:["SmartLabs", "Announcement"],
 source:{name:"MANSARD Commercial Properties",url:"https://masscommercialproperties.com/smartlabs-announces-expansion-of-its-labs-as-a-service-network-at-cambridgeside/"}},

{id:"bw-mrc-2023", d:"Mar 1, 2023", iso:"2023-03-01", type:"press",
 t:"SmartLabs announces launch of its most advanced Managed Research Center", tags:["Facilities","Announcement"],
 summary:"SmartLabs announces the launch of its most advanced Managed Research Center at CambridgeSide in Cambridge, Massachusetts.",
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20230301005262/en/SmartLabs-Announces-Launch-of-its-Most-Advanced-Managed-Research-Center"}},

{id:"bw-mrc-2023b", d:"Mar 1, 2023", iso:"2023-03-01", type:"press",
 t:"SmartLabs Announces Launch of Its Most Advanced Managed Research Center", tags:["Facilities","Announcement"],
 summary:"SmartLabs unveiled its flagship Managed Research Center at CambridgeSide, an adaptive R&D environment representing the pinnacle of its lab framework.",
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20230301005262/en/SmartLabs-Announces-Launch-of-its-Most-Advanced-Managed-Research-Center"}},

{id:"gptw-2023", d:"Mar 1, 2023", iso:"2023-03-01", type:"press",
 t:"Great Place to Work Certification, Recognized for Workplace Excellence", tags:["Culture","Award"],
 summary:"SmartLabs received official Great Place to Work Certification, recognizing its culture of innovation, inclusion, and continuous learning.",source:{name:"Great Place to Work",url:"https://www.greatplacetowork.com/certified-company/7039399"}},

{id:"inv-49", d:"Mar 2023", iso:"2023-03-01", type:"press",
 t:"SmartLabs announces launch of its most advanced Managed Research Center", tags:["SmartLabs", "Announcement"],
 source:{name:"Healthcare RE Insights (mirror)",url:"https://wolfmediausa.com/2023/03/02/news-release-smartlabs-announces-launch-of-its-most-advanced-managed-research-center/"}},

{id:"drexel-groundbreak-2023", d:"Feb 22, 2023", iso:"2023-02-22", type:"press",
 t:"Gattuso–Drexel Break Ground on Life Sciences Building", tags:["Facilities","Philadelphia"],
 summary:"Groundbreaking coverage for Philadelphia's largest life-sciences development, with SmartLabs as anchor tenant and operator of next-generation R&D infrastructure.",
 source:{name:"Drexel University News",url:"https://drexel.edu/news/archive/2022/August/SmartLabs-tenant-Gattuso-Drexel"}},

{id:"inv-46", d:"Feb 2023", iso:"2023-02-09", type:"press",
 t:"Gattuso and Drexel break ground on the city\u2019s largest life sciences facility", tags:["SmartLabs", "Coverage"],
 source:{name:"Drexel University",url:"https://drexel.edu/news/archive/2023/February/Gattuso-Drexel-Break-Ground-on-Life-Sciences-Building"}},

{id:"inv-47", d:"Feb 2023", iso:"2023-02-09", type:"press",
 t:"Gattuso and Drexel break ground on the city\u2019s largest life sciences facility", tags:["SmartLabs", "Coverage"],
 source:{name:"Healthcare RE Insights",url:"https://wolfmediausa.com/2023/02/09/news-release-gattuso-development-and-drexel-break-ground-on-citys-largest-life-sciences-facility/"}},

{id:"inv-45", d:"Feb 2023", iso:"2023-02-06", type:"interview",
 t:"More modalities, more problems? Not necessarily, says SmartLabs", tags:["SmartLabs", "Interview"],
 source:{name:"Fierce Pharma",url:"https://www.fiercepharma.com/sponsored/more-modalities-more-problems-not-necessarily-says-smartlabs"}},

{id:"exec-platforms-2023", d:"Jan 31, 2023", iso:"2023-01-31", type:"interview",
 t:"The Future of Medicine Will Cost Less and Move Faster Than We Ever Imagined", tags:["Interview","Strategy"],
 summary:"A conversation on how standardized laboratory infrastructure is transforming speed and cost in biomedical research.",
 source:{name:"Executive Platforms",url:"https://epthoughtleaders.com/the-future-of-medicine-will-cost-less-and-move-faster-than-we-ever-imagined-a-conversation-with-amrit-chaudhuri-of-smartlabs/"}},

{id:"inv-44", d:"Aug 2022", iso:"2022-08-17", type:"press",
 t:"Laboratory-as-a-Service expert SmartLabs chooses Boston location", tags:["SmartLabs", "Coverage"],
 source:{name:"Cleanroom Technology",url:"https://cleanroomtechnology.com/laboratory-as-a-service-expert-smartlabs-chooses-boston-location-202943"}},

{id:"philadelphia-growth", d:"Aug 8, 2022", iso:"2022-08-08", type:"essay",
 t:"Philadelphia Growth & National Footprint", tags:["Philadelphia","Expansion","SmartLabs"],
 body:`<p>In 2022, SmartLabs announced its expansion into Philadelphia, establishing a flagship presence in University City's Gattuso-Drexel Life Sciences Building, one of the region's largest science developments. The project connects academic research, biotech startups, and established therapeutics firms under one adaptive infrastructure.</p>
<p>Trade and industry media captured how the company's model, already validated in Boston and the Bay Area, was now being used to redefine how universities and private developers collaborate. The Philadelphia expansion introduced modular R&D suites, pilot-scale process rooms, and shared scientific services designed to remove logistical barriers from discovery to production.</p>
<p>The site is the first SmartLabs facility to sit at the center of a major academic innovation district, forming a blueprint for regionalized ecosystems that link discovery, commercialization, and workforce development.</p>`,
 refs:[
 ["Drexel University News, SmartLabs Named Anchor Tenant","https://drexel.edu/news/archive/2022/August/SmartLabs-tenant-Gattuso-Drexel"],
 ["BioSpace, SmartLabs Plans to Expand in Philadelphia","https://www.biospace.com/smartlabs-announces-plans-to-expand-high-performance-laboratory-facilities-in-philadelphia"],
 ["Contract Pharma, SmartLabs to Open New Facility in Philadelphia","https://www.contractpharma.com/breaking-news/smartlabs-to-open-new-facility-in-philadelphia/"],
 ["Bisnow Philadelphia, Gattuso Life Sciences Tenant SmartLabs","https://www.bisnow.com/philadelphia/news/life-sciences/gattuso-life-sciences-tenant-smartlabs-accelerators-dominating-ucity-114113"]]},

{id:"drexel-first-tenant-2022", d:"Aug 3, 2022", iso:"2022-08-03", type:"press",
 t:"SmartLabs to become first tenant of Drexel and Gattuso's new life-sciences building", tags:["Philadelphia","Facilities"],
 summary:"SmartLabs will locate in a portion of the new life-sciences research facility at 3201 Cuthbert Street in University City.",
 source:{name:"Drexel University News",url:"https://drexel.edu/news/archive/2022/August/SmartLabs-tenant-Gattuso-Drexel"}},

{id:"drexel-partner-2022", d:"Aug 3, 2022", iso:"2022-08-03", type:"press",
 t:"SmartLabs Partners with Gattuso and Drexel University on Philadelphia Life Sciences Facility", tags:["Philadelphia","Partnership"],
 summary:"SmartLabs became the first anchor tenant for the new Gattuso-Drexel life-sciences building, expanding its model to University City.",
 source:{name:"Drexel University News",url:"https://drexel.edu/news/archive/2022/August/SmartLabs-tenant-Gattuso-Drexel"}},

{id:"inv-42", d:"Dec 2021", iso:"2021-12-15", type:"press",
 t:"Bay Area campus attracts life science research center", tags:["SmartLabs", "Coverage"],
 source:{name:"Commercial Search",url:"https://www.commercialsearch.com/news/smartlabs-to-launch-san-fran-research-center/"}},

{id:"inv-41", d:"Dec 2021", iso:"2021-12-14", type:"press",
 t:"Launch of the world\u2019s largest multi-modality cGMP center (South SF)", tags:["SmartLabs", "Announcement"],
 source:{name:"BioSpace",url:"https://www.biospace.com/smartlabs-announces-launch-of-world-s-largest-multi-modality-and-multi-product-cgmp-center-for-cell-and-gene-therapies-in-south-san-francisco"}},

{id:"global-collaborations", d:"Dec 8, 2021", iso:"2021-12-08", type:"essay",
 t:"Global Collaborations & Government Partnerships", tags:["Policy","Global","Taiwan","Congress"],
 body:`<p>Between 2019 and 2023, SmartLabs expanded from an operating company into a reference model for national and regional innovation policy.</p>
<p>Coverage from Commercial Times, Digitimes, and China Times first introduced SmartLabs' flexible laboratory concept to Asian biotech and manufacturing audiences. Taiwan's Ministry of Economic Affairs and National Science and Technology Council later profiled the model as an example of how private innovation can accelerate national science and technology agendas.</p>
<p>Parallel to that global interest, SmartLabs was invited into city- and state-level partnerships in the United States. That same perspective informed my December 8, 2021 statement before the 117th Congress on The Future of Biomedicine, outlining how modular, digitally connected laboratories strengthen the nation's biomedical supply chain and accelerate translational science.</p>`,
 refs:[
 ["Congress.gov, House Energy & Commerce testimony (2021)","https://www.congress.gov/117/meeting/house/114289/documents/HHRG-117-IF14-20211208-SD009.pdf"],
 ["NYCEDC, Life-Sciences Advisory Group Appointment","https://edc.nyc/press-release/nycedc-names-members-two-key-life-sciences-advisory-groups"],
 ["DigiTimes, SmartLabs in Taiwan (2019)","https://www.digitimes.com/news/a20191217PD211.html"]]},

{id:"inv-40", d:"Dec 2021", iso:"2021-12-08", type:"press",
 t:"Congressional testimony, House Energy & Commerce", tags:["SmartLabs", "Testimony"],
 source:{name:"Congress.gov",url:"https://www.congress.gov/117/meeting/house/114289/documents/HHRG-117-IF14-20211208-SD009.pdf"}},

{id:"capital-series-b", d:"Nov 9, 2021", iso:"2021-11-09", type:"essay",
 t:"Capital & Investment Coverage, $250 Million Series B", tags:["Funding","Capital","SmartLabs"],
 body:`<p>In September 2021, SmartLabs closed a $250 million Series B round led by ArrowMark Partners with participation from Winslow Capital, Onex Falcon, Breed's Hill Capital, and Conversion Ventures. The financing was arranged in partnership with Morgan Stanley's investment-banking group.</p>
<p>The capital accelerated the national build-out of our platform and advanced the Lab Operating System, a digitally connected architecture linking design, operations, compliance, and data across facilities.</p>
<p>At the time, the transaction ranked among the 15 largest private-equity and venture funding rounds globally. It signaled that investors had begun to view scientific infrastructure as a technology platform in its own right, scalable, capital-efficient, and mission-critical to innovation.</p>`,
 refs:[
 ["Business Wire, Official press release","https://www.businesswire.com/news/home/20210920005187/en/SmartLabs-Announces-%24250-Million-Series-B-and-Update-of-Proprietary-Laboratory-OS"],
 ["Boston Business Journal, SmartLabs Raises $250M","https://www.bizjournals.com/boston/news/2021/09/20/smartlabs-raises-250-million-series-b-funding.html"]]},

{id:"marketscreener-gxp-2021", d:"Nov 9, 2021", iso:"2021-11-09", type:"press",
 t:"SmartLabs Announces Launch and Sell-Out of GxP-Compliant Facilities", tags:["Manufacturing","Facilities"],
 summary:"SmartLabs opened new GxP-compliant animal research and manufacturing suites in Boston, fully leased upon launch.",
 source:{name:"MarketScreener",url:"https://www.marketscreener.com/news/latest/SmartLabs-Announces-Launch-and-Sell-Out-of-GxP-Compliant-Animal-Research-and-Manufacturing-Facilitie-36954767/"}},

{id:"inv-39", d:"Nov 2021", iso:"2021-11-09", type:"press",
 t:"SmartLabs launch and sell-out of GxP-compliant animal research facilities", tags:["SmartLabs", "Announcement"],
 source:{name:"MarketScreener",url:"https://www.marketscreener.com/news/latest/SmartLabs-Announces-Launch-and-Sell-Out-of-GxP-Compliant-Animal-Research-and-Manufacturing-Facilitie--36954767/"}},

{id:"bw-seriesb-labos-2021", d:"Sep 20, 2021", iso:"2021-09-20", type:"press",
 t:"SmartLabs Announces $250M Series B and Launch of Proprietary Laboratory OS", tags:["Funding","Lab OS"],
 summary:"The official release detailing SmartLabs' funding round and unveiling Lab OS, an integrated digital backbone connecting design, operations, and data across sites.",
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20210920005187/en/SmartLabs-Announces-%24250-Million-Series-B-and-Update-of-Proprietary-Laboratory-OS"}},

{id:"bbj-seriesb-2021", d:"Sep 20, 2021", iso:"2021-09-20", type:"press",
 t:"SmartLabs Raises $250 Million in Series B Funding", tags:["Funding","Boston"],
 summary:"Coverage of SmartLabs' landmark $250 million Series B financing, enabling national growth and technological advancement.",
 source:{name:"Boston Business Journal",url:"https://www.bizjournals.com/boston/news/2021/09/20/smartlabs-raises-250-million-series-b-funding.html"}},

{id:"inv-38", d:"Sep 2021", iso:"2021-09-20", type:"press",
 t:"SmartLabs announces $250M Series B and Laboratory OS update", tags:["SmartLabs", "Announcement"],
 source:{name:"BioSpace (mirror)",url:"https://www.biospace.com/smartlabs-announces-250-million-series-b-and-update-of-proprietary-laboratory-os"}},

{id:"inv-43", d:"2021", iso:"2021-06-01", type:"press",
 t:"Leaders in the world\u2019s largest life sciences cluster look to cement status", tags:["SmartLabs", "Coverage"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/life-sciences/maintaining-boston-and-cambridges-leading-hold-on-life-sciences-means-turning-to-new-neighborhoods-103075"}},

{id:"inv-63", d:"2020", iso:"2020-07-01", type:"talk",
 t:"IDEA Collider: in conversation with Amrit Chaudhuri", tags:["Podcast"],
 source:{name:"IDEA Pharma",url:"https://www.youtube.com/watch?v=1hi8HgMs1s8"}},

{id:"inv-37", d:"Apr 2020", iso:"2020-04-27", type:"press",
 t:"SmartLabs launches global accelerator in Taiwan", tags:["SmartLabs", "Announcement"],
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20200427005074/en/SmartLabs-Launches-Global-Accelerator-in-Taiwan-Fostering-International-Biomedical-Innovation"}},

{id:"bw-ca-2020", d:"Mar 2, 2020", iso:"2020-03-02", type:"press",
 t:"SmartLabs expands nationally with CA location", tags:["Expansion","Announcement"],
 summary:"SmartLabs, a first-of-its-kind laboratory-as-a-service company, announced its national expansion into South San Francisco.",
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20200302005522/en/SmartLabs-a-First-of-Its-Kind-Laboratory-as-a-Service-Expands-Nationally-with-CA-Location"}},

{id:"inv-36", d:"Mar 2020", iso:"2020-03-02", type:"press",
 t:"SmartLabs expands nationally with a California location", tags:["SmartLabs", "Announcement"],
 source:{name:"World Pharma Today",url:"https://www.worldpharmatoday.com/news/smartlabs-a-first-of-its-kind-laboratory-as-a-service-expands-nationally-with-ca-location/"}},

{id:"stat-kendall-squeeze-2020", d:"Feb 21, 2020", iso:"2020-02-21", type:"press",
 t:"Kendall Square Biotech Squeeze Drives Demand for Shared Labs", tags:["Market","Coverage"],
 summary:"An analysis of how limited space in Kendall Square fueled the rise of shared laboratory infrastructure, with SmartLabs at the center.",
 source:{name:"STAT News",url:"https://www.statnews.com/2020/02/21/kendall-square-biotech-squeeze-shared-labs/"}},

{id:"idea-collider-2020", d:"Feb 19, 2020", iso:"2020-02-19", type:"interview",
 t:"IDEA Collider, Interview with Amrit Chaudhuri", tags:["Podcast","Infrastructure"],
 summary:"A conversation on the future of life-science infrastructure, why Boston and South San Francisco became the centers of biotech innovation.",source:{name:"IDEA Collider (video)",url:"https://www.youtube.com/watch?v=1hi8HgMs1s8&list=PLI4S4Cz9GVJAJBzeH1nl5wUVnnxIirSwZ&index=11"}},

{id:"inv-62", d:"Feb 2020", iso:"2020-02-19", type:"talk",
 t:"A conversation with Amrit Chaudhuri, SmartLabs", tags:["Video"],
 source:{name:"NetworkPharma.tv",url:"https://networkpharma.tv/2020/02/19/a-conversation-with-amrit-chaudhuri-smartlabs/"}},

{id:"inv-35", d:"Jan 2020", iso:"2020-01-15", type:"press",
 t:"MOST introduces SmartLabs to Taiwan", tags:["SmartLabs", "Coverage"],
 source:{name:"DIGITIMES Asia",url:"https://www.digitimes.com/news/a20200115PD207.html"}},

{id:"inv-33", d:"Dec 2019", iso:"2019-12-16", type:"press",
 t:"SmartLabs to establish biomedical startup base in Taiwan", tags:["SmartLabs", "Coverage"],
 source:{name:"DigiTimes",url:"https://www.digitimes.com/news/a20191217PD211.html"}},

{id:"inv-34", d:"Dec 2019", iso:"2019-12-16", type:"press",
 t:"SmartLabs to establish biomedical startup base in Taiwan", tags:["SmartLabs", "Coverage"],
 source:{name:"RTI / GBI / CTEE (in Chinese)",url:"https://www.rti.org.tw/news/view/id/2045069"}},

{id:"vivarium-2019", d:"Oct 29, 2019", iso:"2019-10-29", type:"press",
 t:"SmartLabs announces expansion of vivarium program into Kendall Square", tags:["Facilities","Vivarium"],
 summary:"SmartLabs announced the expansion of its vivarium program into Kendall Square with 16,000 square feet of dedicated space.",
 source:{name:"GlobeNewswire",url:"https://www.globenewswire.com/news-release/2019/10/29/1936965/0/en/SmartLabs-Announces-Expansion-of-Vivarium-Program-into-Kendall-Square.html"}},

{id:"inv-32", d:"Oct 2019", iso:"2019-10-29", type:"press",
 t:"SmartLabs announces expansion of Vivarium Program into Kendall Square", tags:["SmartLabs", "Announcement"],
 source:{name:"EIN Presswire (mirror)",url:"https://www.einpresswire.com/article/500563181/smartlabs-announces-expansion-of-vivarium-program-into-kendall-square"}},

{id:"inv-30", d:"Jun 2019", iso:"2019-06-10", type:"press",
 t:"SmartLabs at the 2019 BIO International Convention (Taiwan)", tags:["SmartLabs", "Coverage"],
 source:{name:"NSTC Taiwan",url:"https://www.nstc.gov.tw/folksonomy/detail/bbef2c18-b9e8-482d-a0ab-ff929d4a831a?l=en"}},

{id:"inv-31", d:"Jun 2019", iso:"2019-06-10", type:"press",
 t:"SmartLabs at the 2019 BIO International Convention (Taiwan)", tags:["SmartLabs", "Coverage"],
 source:{name:"Newtalk (in Chinese)",url:"https://newtalk.tw/news/view/2019-06-10/257949"}},

{id:"mil-now-smartlabs-2019", d:"Jan 18, 2019", iso:"2019-01-18", type:"press",
 t:"Mass Innovation Labs Is Now SmartLabs", tags:["Brand","Announcement"],
 summary:"The official announcement marking the transition from Mass Innovation Labs to SmartLabs, a name reflecting a national, technology-driven platform.",
 source:{name:"GlobeNewswire",url:"https://www.globenewswire.com/news-release/2019/01/18/1702078/0/en/Mass-Innovation-Labs-Is-Now-SmartLabs.html"}},

{id:"inv-29", d:"Jan 2019", iso:"2019-01-18", type:"press",
 t:"Mass Innovation Labs is now SmartLabs", tags:["SmartLabs", "Announcement"],
 source:{name:"PRWeb (mirror)",url:"https://www.prweb.com/releases/mass-innovation-labs-is-now-smartlabs-883205568.html"}},

{id:"boston-landing-2018", d:"Dec 18, 2018", iso:"2018-12-18", type:"press",
 t:"Mass Innovation Labs inks Boston Landing lease", tags:["Facilities","Leasing"],
 summary:"A major new lease at Boston Landing, expanding Mass Innovation Labs' reach beyond Kendall Square.",
 source:{name:"Boston Business Journal",url:"https://www.bizjournals.com/boston/news/2017/12/18/mass-innovation-labs-inks-boston-landing-lease.html"}},

{id:"inv-28", d:"2018", iso:"2018-11-01", type:"press",
 t:"Editas Medicine and Radius Health choose Mass Innovation Labs", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"MarketScreener",url:"https://www.marketscreener.com/news/latest/Editas-Medicine-and-Radius-Health-Choose-Mass-Innovation-Labs-for-Rapid-Start-and-Operational-Capabi-22286609/"}},

{id:"inv-27", d:"Oct 2018", iso:"2018-10-30", type:"press",
 t:"Growing pains: medical innovations spark labs in surprising places", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/commercial-real-estate/growing-pains-medical-innovations-spark-labs-drug-manufacturing-in-surprising-places-94448"}},

{id:"inv-26", d:"2018", iso:"2018-09-01", type:"press",
 t:"In Kendall Square, new coworking communities custom-built for scientists", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/commercial-real-estate/in-kendall-square-new-coworking-communities-custom-built-for-scientists-95426"}},

{id:"contract-pharma-2018", d:"May 31, 2018", iso:"2018-05-31", type:"interview",
 t:"Maximizing Discovery & Innovation While Minimizing Cost", tags:["Interview","Economics"],
 summary:"An interview on how the lab-as-a-service model reduces cost and risk while accelerating discovery.",
 source:{name:"Contract Pharma",url:"https://www.contractpharma.com/exclusives/maximizing-discovery-innovation-while-minimizing-cost/"}},

{id:"pharmavoice-2018", d:"May 1, 2018", iso:"2018-05-01", type:"interview",
 t:"Biotech Industry Trends and Shared Lab Models", tags:["Interview","Market"],
 summary:"Industry analysis on how shared laboratory environments are reshaping the economics and speed of biotech research.",
 source:{name:"PharmaVoice",url:"https://www.pharmavoice.com/news/2018-05-biotech/612619/"}},

{id:"mil-now-smartlabs-2018", d:"Jan 18, 2018", iso:"2018-01-18", type:"press",
 t:"Mass Innovation Labs is now SmartLabs", tags:["Brand","Announcement"],
 summary:"Mass Innovation Labs, the premier provider of managed laboratory infrastructure, announced its new name: SmartLabs.",
 source:{name:"GlobeNewswire",url:"https://www.globenewswire.com/news-release/2019/01/18/1702078/0/en/Mass-Innovation-Labs-Is-Now-SmartLabs.html"}},

{id:"jpm-2018", d:"Jan 8, 2018", iso:"2018-01-08", type:"talk",
 t:"Major Expansion Announced at J.P. Morgan Healthcare Conference", tags:["Conference","Expansion"],
 summary:"A milestone expansion unveiled during the J.P. Morgan Healthcare Conference, marking the emergence of a national life-science platform.",source:{name:"Reportable News",url:"https://whatsreportable.reportablenews.com/pr/mass-innovation-labs-makes-major-expansion-leading-into-the-36th-annual-j-p-morgan-healthcare-conference"}},

{id:"inv-25", d:"Dec 2017", iso:"2017-12-23", type:"press",
 t:"MIL expands to give startups a better way to do research", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"MassDevice",url:"https://www.massdevice.com/mass-innovation-labs-expands-give-startups-better-way-research/"}},

{id:"inv-24", d:"Dec 2017", iso:"2017-12-22", type:"press",
 t:"MIL to anchor new Seaport biotech lab", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Boston Business Journal",url:"https://www.bizjournals.com/boston/news/2017/12/20/mass-innovation-labs-to-anchor-new-seaport-biotech.html"}},

{id:"ddbn-2017", d:"Dec 20, 2017", iso:"2017-12-20", type:"press",
 t:"Mass Innovation Labs expands to give startups a better way to do research", tags:["Operations","Facilities"],
 summary:"At the 124,000-sq-ft Cambridge HQ, the \"embedded operations zone\" co-locates logistics, regulatory compliance, and core instrumentation beside research benches.",
 source:{name:"Drug Delivery Business News",url:"https://www.drugdeliverybusiness.com/mass-innovation-labs-expands-give-startups-better-way-research/"}},

{id:"expanding-network", d:"Dec 20, 2017", iso:"2017-12-20", type:"essay",
 t:"Expanding the Physical Network, Boston, Cambridge & Seaport", tags:["Expansion","Facilities","SmartLabs"],
 body:`<p>By 2017, Mass Innovation Labs had outgrown its original Kendall Square location, and with it, the traditional idea of what a "shared lab" could be. That year we announced the simultaneous development of three new facilities across Greater Boston:</p>
<ul><li>Our Cambridge 21 Erie Street expansion with BioMed Realty.</li><li>The Boston Landing life-sciences complex in Brighton.</li><li>And Innovation Square in the Seaport, Boston's first purpose-built life-sciences campus.</li></ul>
<p>Together, these sites formed the first complete expression of what became our modular, operational, and regulatory framework, designed to let scientists move between locations as easily as between experiments. Real-estate and business press treated the announcement as a defining moment for the region's R&D infrastructure: we weren't just adding square footage, we were establishing a scalable blueprint for science itself.</p>`,
 refs:[
 ["Related Beal, Partnership to Build Life-Sciences Facility","https://www.relatedbeal.com/press-releases/2017-12-20/related-beal-announces-partnership-mass-innovation-labs-build-life"],
 ["Business Wire, expansion to Boston Landing (2017)","https://www.businesswire.com/news/home/20171218005586/en/Mass-Innovation-Labs-Announces-Expansion-to-NB-Development-Group%E2%80%99s-Boston-Landing"]]},

{id:"related-beal-2017", d:"Dec 20, 2017", iso:"2017-12-20", type:"press",
 t:"Related Beal announces partnership with Mass Innovation Labs to build life-sciences facility", tags:["Partnership","Development"],
 summary:"A strategic development partnership between Related Beal and Mass Innovation Labs to expand Boston's Seaport as a hub for life-sciences innovation.",
 source:{name:"Related Beal",url:"https://www.relatedbeal.com/press-releases/2017-12-20/related-beal-announces-partnership-mass-innovation-labs-build-life"}},

{id:"inv-22", d:"Dec 2017", iso:"2017-12-20", type:"press",
 t:"Related Beal announces partnership with Mass Innovation Labs", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"Related Companies",url:"https://www.related.com/press-releases/2017-12-20/related-beal-announces-partnership-mass-innovation-labs-build-life"}},

{id:"inv-23", d:"Dec 2017", iso:"2017-12-20", type:"press",
 t:"Related Beal announces partnership with Mass Innovation Labs", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"Boston Herald: Seaport tech research campus (PDF, archived copy)",url:"https://web.archive.org/web/20210924191357/https://www.relatedbeal.com/news-articles/2017/12/21/seaport-host-tech-research-campus/Boston-Herald-Beal-Seaport-deal.pdf"}},

{id:"inv-21", d:"Dec 2017", iso:"2017-12-18", type:"press",
 t:"MIL inks Boston Landing lease", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Business Wire: expansion to Boston Landing",url:"https://www.businesswire.com/news/home/20171218005586/en/Mass-Innovation-Labs-Announces-Expansion-to-NB-Development-Group%E2%80%99s-Boston-Landing"}},

{id:"inv-19", d:"Oct 2017", iso:"2017-10-31", type:"press",
 t:"Kendall Squeeze: where to accommodate new life science companies", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/technology/kendall-squeeze-greater-boston-developers-on-where-to-accommodate-a-rushing-wave-of-new-life-science-companies-80983"}},

{id:"inv-20", d:"2017", iso:"2017-09-01", type:"press",
 t:"MIL takes 84K SF at the Boston Celtics\u2019 Brighton complex", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Bisnow",url:"https://www.bisnow.com/boston/news/technology/mass-innovation-labs-takes-84k-sf-at-boston-celtics-brighton-complex-82821"}},

{id:"inv-18", d:"Jul 2017", iso:"2017-07-07", type:"press",
 t:"Part bio-socialite, part bioscientist", tags:["Mass Innovation Labs", "Profile"],
 source:{name:"STAT",url:"https://www.statnews.com/2017/07/07/amrit-chaudhuri-science-companise/"}},

{id:"inv-17", d:"May 2017", iso:"2017-05-10", type:"press",
 t:"In life sciences and biotech, incubators are hot", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"The Boston Globe (Magazine)",url:"https://www.bostonglobe.com/magazine/2017/05/10/life-sciences-and-biotech-incubators-are-hot/Bs7M9H44bSp4c2g5IBzZJJ/story.html"}},

{id:"digital-transformation", d:"Apr 17, 2017", iso:"2017-04-17", type:"essay",
 t:"Digital Transformation and Early Lab Systems Innovation", tags:["Software","Lab OS","Data"],
 body:`<p>When we built Mass Innovation Labs, the goal was to make research move as fast as thought. That meant removing friction wherever it hid, even in notebooks.</p>
<p>By 2017, we had already partnered with RSpace to bring electronic lab notebooks to every tenant. Our idea was simple: data should be as mobile and modular as the space around it.</p>
<p>These steps prefigured SmartLabs' proprietary Lab Operating System, proving that laboratory performance could be engineered not only through architecture but also through software.</p>`,
 refs:[
 ["PRWeb, Mass Innovation Labs Adopts RSpace","https://www.prweb.com/releases/mass_innovation_labs_announces_adoption_of_rspace_as_digital_data_management_service_for_member_companies/prweb14245218.htm"],
 ["ResearchSpace, MIL Introduces RSpace to Member Companies","https://www.researchspace.com/blog/mass-innovation-labs-introduces-rspace-to-member-companies"],
 ["Lab-Ally, MIL Adopts RSpace ELN","https://lab-ally.com/mil-adopts-rspace-eln/"]]},

{id:"inv-15", d:"Apr 2017", iso:"2017-04-17", type:"press",
 t:"Mass Innovation Labs introduces RSpace to member companies", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"BioSpace",url:"https://www.biospace.com/mass-innovation-labs-introduces-rspace-to-member-companies"}},

{id:"inv-16", d:"Apr 2017", iso:"2017-04-17", type:"press",
 t:"Mass Innovation Labs introduces RSpace to member companies", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"PRWeb",url:"https://www.prweb.com/releases/mass_innovation_labs_announces_adoption_of_rspace_as_digital_data_management_service_for_member_companies/prweb14245218.htm"}},

{id:"inv-61", d:"2017", iso:"2017-02-02", type:"talk",
 t:"Eastern Bank Asian American Small Business Expo: featured speaker", tags:["Talk"],
 source:{name:"Color Magazine",url:"https://colormagazine.com/eastern-bank-host-asian-american-small-biz-expo/"}},

{id:"inc-20-2017", d:"Jan 20, 2017", iso:"2017-01-20", type:"press",
 t:"20 Inspiring Entrepreneurs Improving Health for All", tags:["Recognition","Leadership"],
 summary:"Inc.'s list of top healthcare entrepreneurs blazing a path to a healthier life for all.",
 source:{name:"Inc.",url:"https://www.inc.com/drew-hendricks/20-inspiring-entrepreneurs-improving-health-for-all.html"}},

{id:"inv-11", d:"Dec 2016", iso:"2016-12-07", type:"press",
 t:"Kendall Square\u2019s boarding school for biotechs", tags:["Mass Innovation Labs", "Feature"],
 source:{name:"MedCity News",url:"https://medcitynews.com/2016/12/kendall-squares-boarding-school-biotechs/"}},

{id:"inv-10", d:"Nov 2016", iso:"2016-11-30", type:"press",
 t:"SkunkWeeks venture seeks to speed time to market", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Outsourcing-Pharma (archived copy)",url:"https://web.archive.org/web/20241014053116/https://www.outsourcing-pharma.com/Article/2016/11/30/SkunkWeeks-venture-seeks-to-speed-time-to-market/"}},

{id:"sleepless-ceo", d:"Nov 28, 2016", iso:"2016-11-28", type:"essay",
 t:"The Sleepless CEO: Making the Case for a Good Night's Rest", tags:["Leadership","Wellbeing"],
 body:`<p>When Arianna Huffington launched Thrive Global, she asked me to contribute an essay after we met at an event and spoke about the culture of burnout among executives. I shared my belief that the same rigor and structure we apply to scientific systems should also govern how we manage ourselves, especially when leading complex ventures.</p>
<p>Founding Mass Innovation Labs taught me that focus, decision quality, and innovation all depend on recovery. The myth of the sleepless entrepreneur is counterproductive: true endurance comes from rhythm, not exhaustion. For scientists and executives alike, sustainable performance requires both precision and rest.</p>`,
 refs:[]},

{id:"fortune-brainstorm-2016", d:"Nov 2, 2016", iso:"2016-11-02", type:"talk",
 t:"Here's How We Can Speed Up Drug Innovation", tags:["Conference","Panel"],
 summary:"At Fortune's inaugural Brainstorm Health conference, I joined Lesley Stolz of JLABS and Jonathan Usuka of McKinsey to discuss how infrastructure, collaboration, and emerging AI can accelerate drug development.",source:{name:"Fortune",url:"https://fortune.com/2016/11/02/drug-development-testing-success-approval/"}},

{id:"inv-8", d:"Nov 2016", iso:"2016-11-02", type:"press",
 t:"How drug development cycles may be getting smaller and faster", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Fortune: Brainstorm Health coverage",url:"https://fortune.com/2016/11/03/brainstorm-health-coverage/"}},

{id:"inv-9", d:"Nov 2016", iso:"2016-11-02", type:"press",
 t:"How drug development cycles may be getting smaller and faster", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Fortune (video): speeding up drug innovation",url:"https://fortune.com/2016/11/02/drug-development-testing-success-approval/"}},

{id:"inv-7", d:"Aug 2016", iso:"2016-08-19", type:"press",
 t:"Mass Innovation Labs host space for growing biotech", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Bio-IT World",url:"https://www.bio-itworld.com/news/2016/08/19/mass-innovation-labs-host-space-for-growing-biotech"}},

{id:"inv-6", d:"Aug 2016", iso:"2016-08-16", type:"press",
 t:"MI Labs to biotechs: Call us home", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"BioPharma Dive",url:"https://www.biopharmadive.com/news/mi-labs-to-biotechs-call-us-home/424591/"}},

{id:"innovation-suites-2016", d:"Jun 6, 2016", iso:"2016-06-06", type:"press",
 t:"Mass Innovation Labs adds \"Innovation Suites\" to Kendall Square facility", tags:["Facilities","Coverage"],
 summary:"Six new 'Innovation Suites' offering state-of-the-art facilities for cutting-edge research.",
 source:{name:"BioSpace",url:"https://www.biospace.com/mass-innovation-labs-adds-innovation-suites-to-kendall-square-facility"}},

{id:"inv-14", d:"2016", iso:"2016-06-04", type:"press",
 t:"Mass Innovation opens new shared labs in Kendall Square", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"MIB (bsmib.org)",url:"https://bsmib.org/news/mass-innovation-opens-new-shared-labs-in-kendall-square/"}},

{id:"inv-13", d:"2016", iso:"2016-06-02", type:"press",
 t:"CRISPR takes space in former Vertex site converted by MIL", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"BioSpace",url:"https://www.biospace.com/crispr-takes-space-in-former-vertex-site-converted-by-b-mass-innovation-labs-b-for-startup-companies"}},

{id:"inv-12", d:"2016", iso:"2016-06-01", type:"press",
 t:"BioMed Realty signs MIL to 52,000 s/f at 21 Erie St.", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"New England Real Estate Journal",url:"https://nerej.com/biomed-realty-signs-mass-innovation-labs-to-52-000-s-f-lease-at-21-erie-st"}},

{id:"inv-59", d:"May 2016", iso:"2016-05-16", type:"talk",
 t:"This week at MIT: featured speaker", tags:["Talk"],
 source:{name:"MIT Postdoctoral Association",url:"https://pda.mit.edu/2016/05/15/this-week-at-mit-may-16-22/"}},

{id:"bret-double-2016", d:"Apr 20, 2016", iso:"2016-04-20", type:"press",
 t:"Mass Innovation Labs to double Cambridge space, open office in San Francisco", tags:["Expansion","Coverage"],
 summary:"With its 124,000-sq-ft Kendall Square space almost at capacity, the founders are negotiating a lease for another 100,000 square feet.",
 source:{name:"Boston Real Estate Times",url:"https://bostonrealestatetimes.com/mass-innovation-labs-to-double-cambridge-space-open-office-in-san-francisco/"}},

{id:"india-ne-2016", d:"Apr 20, 2016", iso:"2016-04-20", type:"press",
 t:"Amrit Chaudhuri-founded Mass Innovation Labs doubles Cambridge space, opens SF office", tags:["Expansion","Profile"],
 summary:"Coverage of Mass Innovation Labs' expansion on both coasts, doubling space in Cambridge and opening a San Francisco site.",
 source:{name:"India New England News",url:"https://indianewengland.com/amrit-chaudhuri-founded-mass-innovation-labs-double-cambridge-space-open-office-san-francisco/"}},

{id:"inv-5", d:"Apr 2016", iso:"2016-04-20", type:"press",
 t:"Amrit Chaudhuri founded MIL to double Cambridge space, open SF office", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"SF Business Times: \u201cGoldilocks\u201d space for the Bay Area",url:"https://www.amritchaudhuri.com/press-perspectives/mass-innovation-labs-brings-goldilocks-space-to-the-bay-area-san-francisco-business-times"}},

{id:"globe-ceo-2016", d:"Feb 23, 2016", iso:"2016-02-23", type:"press",
 t:"Meet the Chief Encouragement Officer in Kendall Square", tags:["Profile","Operations"],
 summary:"A look inside the early days of Mass Innovation Labs, overseeing everything from safety permits and technology setup to janitorial schedules, so startups could focus entirely on their science.",
 source:{name:"The Boston Globe",url:"https://www.bostonglobe.com/business/2016/02/23/troubleshooter-works-remove-pain-points-for-kendall-square-biotechs/vAHZeJwezOQKh9RW9KlGTL/story.html"}},

{id:"globe-two-biotechs-2016", d:"Feb 16, 2016", iso:"2016-02-16", type:"press",
 t:"Mass Innovation Labs adds two biotechs to Kendall Square space", tags:["Growth","Coverage"],
 summary:"Nine months since opening, Mass Innovation Labs has grown to house seven small and mid-size companies.",
 source:{name:"Boston Globe",url:"https://www.bostonglobe.com/business/2016/02/16/biotechs-join-mass-innovation-labs-space/wm7xWLrdJqTivBlScehSZO/story.html"}},

{id:"inv-4", d:"Jan 2016", iso:"2016-01-07", type:"press",
 t:"Mass Innovation Labs spurs partnerships between members and major pharma", tags:["Mass Innovation Labs", "Announcement"],
 source:{name:"Business Wire",url:"https://www.businesswire.com/news/home/20160107005261/en/Mass-Innovation-Labs-Spurs-Partnerships-Members-Major"}},

{id:"inv-74", d:"2016", iso:"2016-01-01", type:"press",
 t:"Hair treatment composition with naturally-derived peptide (US 9,505,820 B2)", tags:["Advanced Peptides", "Patent"],
 source:{name:"Google Patents / USPTO",url:"https://patents.google.com/patent/US9505820B2/en"}},

{id:"stat-coworking-2015", d:"Dec 9, 2015", iso:"2015-12-09", type:"press",
 t:"Co-working lab spaces cater to startups in crowded cities", tags:["Coverage","Lab-as-a-Service"],
 summary:"STAT News profiled the rise of co-working laboratories, featuring Mass Innovation Labs as a pioneer in shared infrastructure for science.",
 source:{name:"STAT News",url:"https://www.statnews.com/2015/12/09/co-working-lab-spaces/"}},

{id:"inv-58", d:"2015", iso:"2015-06-01", type:"talk",
 t:"How curiosity drives innovation", tags:["Video"],
 source:{name:"IDEA Pharma (YouTube)",url:"https://www.youtube.com/watch?v=1OY-SnvJm_8"}},

{id:"biospace-launch-2015", d:"May 4, 2015", iso:"2015-05-04", type:"press",
 t:"Mass Innovation Labs Launches 124,000 Sq Ft Co-Working Lab Space in Kendall Square", tags:["Launch","Facilities"],
 summary:"Mass Innovation Labs announced the launch of a 124,000-square-foot accelerated commercialization space in the heart of Kendall Square.",
 source:{name:"BioSpace",url:"https://www.biospace.com/b-mass-innovation-labs-b-launches-124-000-sq-ft-co-working-lab-space-in-kendall-square"}},

{id:"globe-shared-space-2015", d:"May 4, 2015", iso:"2015-05-04", type:"press",
 t:"Shared space aids new life sciences ventures", tags:["Launch","Coverage"],
 summary:"Coverage of the launch of 124,000 square feet of accelerated commercialization space in the heart of Kendall Square.",
 source:{name:"Boston Globe",url:"https://www.bostonglobe.com/business/2015/05/04/mass-innovation-shared-lab-space-launches-kendall-square/syCG1o7Pqkm53O1H3ugBmI/story.html"}},

{id:"inv-2", d:"May 2015", iso:"2015-05-04", type:"press",
 t:"Shared space aids new life sciences ventures", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Science / \u201cRent a Bench\u201d (PDF)",url:"https://info.triumvirate.com/hubfs/Science-2015-Gura-1196-91.pdf"}},

{id:"inv-3", d:"May 2015", iso:"2015-05-04", type:"press",
 t:"Shared space aids new life sciences ventures", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"Boston Business Journal (BioFlash)",url:"https://www.bizjournals.com/boston/blog/bioflash/2015/05/mass-innovation-labs-aims-to-house-larger-biotech.html"}},

{id:"inv-1", d:"Jul 2014", iso:"2014-07-01", type:"press",
 t:"Another shared research space from Massachusetts (\u5927\u4f17\u521b\u65b0\u5b9e\u9a8c\u5ba4)", tags:["Mass Innovation Labs", "Coverage"],
 source:{name:"ScienceNet.cn",url:"https://news.sciencenet.cn/htmlnews/2014/7/298319.shtm"}}
];
