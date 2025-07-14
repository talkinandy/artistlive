ArtistLive.id – SEO Strategy (Indonesia Market)

Purpose: Provide a playbook to rank the landing page and blog content for high-intent Indonesian queries related to booking live musicians and singers. Use this doc alongside the PRD to keep copy, structure, and dev tasks aligned.

⸻

1. Objectives & KPIs

Metric	Target	Tracking
Organic sessions / month	≥ 3,000 within 6 months	GA4 → Traffic Acquisition (Organic)
Qualified WhatsApp clicks from organic	≥ 60 / month	GA4 event whatsapp_click (source = “organic”)
Top-3 SERP rank for “sewa band”	Within 4 months of launch	Ahrefs / GSC


⸻

2. Target Audiences & Intent

Audience	Core Intent	Example Query
Event planners / couples	Book wedding bands / singers	“sewa band pernikahan”
Corporate HR / EO	Hire entertainment for office events	“sewa band acara kantor”
Students / teachers	Find bands for school concerts (pensi)	“band pensi sekolah”

Prioritize transactional keywords; support informational (pricing) via FAQ for rich-snippet potential.

⸻

3. Priority Keyword Matrix

Keyword (ID)	Volume	KD	Intent	Page Placement
sewa band	1k	Med	Transactional	Title, H1
sewa band Jakarta	500	Low-Med	Transactional	H2 (#Local)
sewa band pernikahan	800	Med	Transactional	H2 (Wedding)
band untuk acara pernikahan	300	Low-Med	Transactional	Body (Wedding)
sewa band ulang tahun	200	Low	Transactional	H2 (Birthday)
sewa band acara kantor	150	Low	Transactional	H2 (Corporate)
booking penyanyi solo acara kantor	50	VL	Transactional	FAQ
sewa penyanyi solo	300	Low	Transactional	H2 (Solo Singer)
harga sewa band pernikahan	150	Low	Informational	FAQ (Pricing)
jasa live music	400	Med	Transactional	Meta description, body
sewa band pensi	100	Low	Transactional	H2 (School Events)

Volume = estimated monthly searches in Indonesia; KD = keyword difficulty (Ahrefs scale).
Focus copy on bolded terms; sprinkle long-tail variants naturally.

⸻

4. On-Page Optimization Checklist
	1.	Title Tag ≤ 60 chars — Sewa Band & Penyanyi Live untuk Acara | ArtistLive
	2.	Meta Description ≤ 155 chars — highlight weddings, kantor, pensi, CTA.
	3.	H1 — Sewa Band & Penyanyi Live untuk Semua Acara di Indonesia
	4.	H2 Sections
	•	Band Pernikahan (weddings)
	•	Musik Acara Kantor (corporate)
	•	Band Pensi & Sekolah
	•	Band Ulang Tahun & Private Event
	5.	FAQ (JSON-LD FAQPage) — include price + booking process questions using long-tails.
	6.	Alt-text — describe image + keyword in context (e.g., "Band live music di resepsi pernikahan Jakarta").
	7.	Internal Links — anchor text using keyword + city (e.g., band wedding Jakarta).
	8.	Blog Tags & Slugs — kebab-case, include keywords: /blog/sewa-band-wedding-jakarta.

⸻

5. Content Pipeline
	•	Blog cadence: 4 posts / month via n8n + OpenAI.
	•	Each post targets one mid/long-tail keyword + city variant (e.g., “sewa band pernikahan Bandung”).
	•	Structure: H1 with keyword, intro ≤ 120 words, H2/H3 with related questions, CTA block to WhatsApp.

⸻

6. Technical SEO (Next.js)

Area	Implementation
Meta tags	<Head> component, per locale route.
i18n routing	next.config.js → locales: ['id', 'en'], defaultLocale: 'id'
Sitemap	Auto-generate with next-sitemap (include /id & /en paths).
Robots.txt	Allow all; block Netlify preview URLs.
Structured Data	Use @graph with Organization, FAQPage.
Image optimization	Next/Image + WebP; set priority on hero.
Core Web Vitals	Largest Contentful Paint < 2.5 s; lazy-load below-fold images.


⸻

7. Monitoring & Iteration
	1.	GA4 events: page_view, whatsapp_click, outbound_click.
	2.	GSC: track clicks & impressions for target keywords monthly.
	3.	Quarterly review: update copy and FAQ to target new rising long-tail searches (use GSC Search Queries + Ahrefs).

⸻

8. Risks & Mitigations

Risk	Impact	Mitigation
Keyword stuffing harms UX & rank	Medium	Write natural Indonesian prose; ≤ 2–3% keyword density.
Duplicate content from AI blog	High	Manual review + unique intros; use plagiarism checker.
Slow TTFB on Netlify	Medium	Enable Edge Functions; preload critical assets.


⸻

Ready for Dev & Content Teams
	•	Copywriters use Section 4 checklist.
	•	Developers implement Section 6 items.
	•	Product owner reviews KPIs monthly.

Treat the keyword matrix as non-negotiable: each term must appear at least once in visible copy (not hidden meta keywords). Discard if it clashes with readability.