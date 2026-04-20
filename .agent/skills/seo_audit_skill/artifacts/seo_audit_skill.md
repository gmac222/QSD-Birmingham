---
name: seo-audit-phase-2-and-3
description: >
  Process a Screaming Frog XLSX export into a full SEO audit with colour-coded
  spreadsheet, professional PDF strategy report, and optional page-by-page content
  review PDF. Use this skill whenever the user uploads a Screaming Frog crawl export
  and asks for an audit, site review, technical audit, content audit, page-level
  audit, or site health check. Also trigger when the user mentions "Screaming Frog
  export", "crawl data", "SF export", "site audit spreadsheet", "audit this crawl",
  "page by page audit", "page level audit", or provides an XLSX with columns like
  Address, Title 1, H1-1, Meta Description 1, Status Code. This skill is specifically
  for processing crawl exports into actionable audit outputs - not for crawling sites
  directly. Trigger phrases include: "audit this SF export", "process this crawl",
  "run an audit on this", "here's my Screaming Frog data", "do a content audit on
  this", "technical audit from this crawl", "page by page review", or any combination
  of a client name + "audit" when an XLSX file is present. If a Screaming Frog XLSX
  is uploaded and the user asks anything SEO-related, default to this skill.
---

# SEO Audit for Phase 2 & 3 Websites

## Purpose

This skill processes a Screaming Frog XLSX crawl export and produces up to three outputs:

1. **Audit XLSX** - The crawl data restructured with added columns, colour coding,
   issue tagging, keyword inference, and content action recommendations.
2. **Strategy PDF** - A professional, designed report summarising the audit findings
   with prioritised actions, suitable for both the SEO practitioner and the client.
3. **Page-Level Review PDF** (optional, Phase 3b) - A page-by-page content review
   written in plain English, based on fetching and reading the actual page content.
   Designed for client-facing use or for non-technical stakeholders.

This is for Phase 2 & 3 clients (existing websites), sites not performing well,
or sites where the planned strategy has been completed and a fresh audit is needed.

---

## Workflow Overview

The audit has seven phases. Work through them in order.

### Before Starting: Ask About Scope

Before processing the crawl, ask Graham:

**"Do you want me to investigate the off-page side of things in Ahrefs
(keyword research, SERP analysis, competitor backlinks), or just work
from the Screaming Frog crawl data?"**

- If **yes to Ahrefs**: Run all phases including Phase 4 (keyword
  research via Ahrefs) and Phase 5 (backlink planning via Ahrefs).
- If **no, crawl only**: Run Phases 1-3 and Phase 6 only. Leave the
  Proposed Keyword, DF Links, DF Anchors, NF Links, and NF Anchors
  columns blank for Graham to fill manually. Skip Phases 4 and 5.

Also ask:

**"Do you want a page-by-page content review as well (Phase 3b)?
This fetches each live page and reviews the actual content in plain
English - good for sharing with the client."**

- If **yes**: Run Phase 3b after Phase 3. This produces Output 3.
- If **no**: Skip Phase 3b.

Also confirm the client name if not already known.

---

### Phase 1: Setup - Process the Screaming Frog Export

1. Read the uploaded XLSX. Expect Screaming Frog's default columns including:
   Address, Content Type, Status Code, Indexability, Title 1, Title 1 Length,
   Meta Description 1, H1-1, H1-2, Word Count, Inlinks, Outlinks, plus any
   connected GA4/GSC/Ahrefs columns if present.

2. **Filter rows**: Include ALL HTML pages (not just 200 OK). Keeping 301s and 404s
   is important because their presence means they are being linked to internally,
   which needs fixing.

3. **Restructure columns** in this order:
   - Address
   - Page Type (new - see classification below)
   - Content Action (new, blank initially)
   - Task Status (new, blank initially - dropdown with "Done")
   - Title 1
   - H1-1
   - Meta Description 1
   - Indexability
   - Status Code
   - Word Count
   - Then add these new columns (all blank initially):
     - SEO Page (will contain TRUE/FALSE)
     - Issue
     - Current Keyword
     - Proposed Keyword
     - DF Links Required
     - DF Anchor Types
     - NF Links Required
     - NF Anchor Types
     - Notes
   - Keep any GA4/GSC traffic columns and Ahrefs backlink columns after Notes

   **Page Type classification and colour coding:**
   Classify every page into one of these types and colour the Page Type cell:

   | Page Type | Colour | Hex | Description |
   |-----------|--------|-----|-------------|
   | Homepage | Dark blue | #1B2A4A (white text) | The root URL |
   | Service Page | Green | #7BC47F | What you offer, no location (e.g. /doors/bi-folding/) |
   | Location Page | Purple | #9B7FD0 | Location hub covering all services (e.g. /maghull/) |
   | Location Service Page | Teal | #4FBDBA | Service + location combo (e.g. /doors/liverpool/) |
   | Blog Post | Yellow | #FFD966 | Individual blog articles |
   | Blog Index | Light grey | #D9D9D9 | The /blog/ listing page |
   | Supporting Content | Light blue | #9DC3E6 | Informational pages (e.g. /doors/what-is-a-composite-door/) |
   | Utility Page | Grey | #BFBFBF | Contact, privacy, about, thank you, sitemap, areas, trade |
   | Redirect/Error | Red text | #FF0000 text | 301s and 404s |
   | Query Variant | Grey | #BFBFBF | URLs with query strings (e.g. ?utm_source=) |

4. **Issue column data validation** - Add a comment or note on the Issue header
   indicating the valid values. Use these for technical issues:
   - Missing H1
   - Missing meta title
   - Missing meta description
   - Duplicate H1
   - Duplicate meta title
   - Indexed but shouldn't be
   - Should be indexed but isn't
   - Has internal links to 301
   - Has internal links to 404
   - Broken canonical
   - Self-referencing canonical missing
   - Redirect chain (301 to 301)
   - Potentially cannibalisation
   - Title and H1 mismatch
   - Unoptimised keyword
   - Optimise better
   - Optimise & create a new page
   - No SEO value
   - LHF shows better kwd
   - Orphan page (low inlinks)
   - Crawl depth too deep

   And these for content issues:
   - Thin content (under 500 words on SEO page)
   - Content on wrong page (content belongs on a different page)
   - Duplicate/near-duplicate content
   - No internal links in body content
   - No contextual bridge sections
   - Missing FAQ section
   - Wrong page type for keyword intent
   - Keyword not first in title
   - Keyword not first in H1
   - Generic/vague H2s (not keyword-rich)
   - Images missing alt text
   - Images with generic alt text
   - No CTA on page

5. **Task Status column** - Add data validation with a single option: "Done".
   This allows Graham to mark off each row as he works through the audit.

6. **Issue column must be populated.** Every 200 OK page should have its Issue
   column filled in where any issue exists. If a page has multiple issues,
   show the most critical one in the Issue column and list the others in Notes.
   Issue priority order (most critical first):
   - Missing H1
   - Missing meta title
   - Indexed but shouldn't be
   - Should be indexed but isn't
   - Broken canonical
   - Has internal links to 301
   - Has internal links to 404
   - Redirect chain
   - Potentially cannibalisation
   - Duplicate meta title
   - Duplicate H1
   - Title and H1 mismatch
   - Thin content
   - Content on wrong page
   - Duplicate/near-duplicate content
   - Unoptimised keyword
   - Keyword not first in title
   - Keyword not first in H1
   - Generic/vague H2s
   - No internal links in body content
   - No contextual bridge sections
   - Missing FAQ section
   - Optimise better
   - Optimise & create a new page
   - No SEO value
   - LHF shows better kwd
   - Orphan page
   - Crawl depth too deep
   - Missing meta description
   - Images missing alt text
   - No CTA on page

---

### Phase 2: Technical Audit

Work through every row and apply these checks:

1. **Infer current keyword**: Look at the URL path, Title 1, and H1-1. Extract
   the most likely target keyword. Write it in the "Current Keyword" column.
   - The deepest meaningful slug in the URL is the primary keyword. Location
     folders are modifiers, not part of the core keyword. Parent service folders
     are structural, not keyword components.
   - Example: /doors/liverpool/french-doors/ -> keyword is "french doors liverpool"
     (deepest slug = "french doors", location modifier = "liverpool").
     NOT "doors liverpool french doors" (don't concatenate all path segments).
   - Example: /windows/aluminium/ -> keyword is "aluminium windows"
     (deepest slug only, parent /windows/ is structural).
   - Example: /maghull/ -> keyword is "double glazing maghull" or similar
     (single-segment location pages need the primary service inferred from
     the title/H1 since the URL only has the location).
   - For the homepage (/), use the Title 1 to infer the keyword.
   - For URLs with query strings (e.g. ?utm_source=), strip the query string
     and treat as the same page as the canonical version. Don't infer a
     separate keyword - inherit from the canonical.
   - Cross-reference with Title 1 and H1-1. If they clearly target a different
     term than the URL suggests, note this as a potential issue.
   - If Title and H1 target different terms from each other, note this as a
     potential alignment issue.

2. **Cannibalisation detection**: Flag rows where multiple URLs appear to target
   the same keyword (based on inferred current keywords). Set Issue to
   "Potentially cannibalisation" on duplicates. Add a note suggesting this needs
   GSC verification to see which URL actually ranks.

3. **Missing/duplicate titles**: Flag rows with empty Title 1 or where Title 1
   is duplicated across multiple URLs.

4. **Missing/duplicate H1s**: Flag rows with empty H1-1 (Issue = "Missing H1")
   or where H1-1 is duplicated. After processing, the H1-2 column can be removed.

5. **Indexability issues**: Any page marked as "Noindex" in the Indexability column
   that probably should be indexed, or pages indexed that shouldn't be
   (e.g. /wp-admin/, /cart/, /checkout/, tag pages, author archives).
   Set Issue = "Indexed but shouldn't be".

6. **Non-200 status codes**: Flag 301s and 404s. Add a note that internal links
   pointing to these URLs need updating.

7. **Internal links to 301s**: For each 200 OK page, check whether its outbound
   internal links point to any URLs that return 301 in the crawl data. If a
   live page links to a 301 URL, set Issue = "Has internal links to 301" on the
   live page (not the 301 page). Add a note listing which 301 URLs it links to.
   The Screaming Frog export shows Inlinks for each URL - use this to identify
   which 200 OK pages are the sources. If the SF export includes an "Outlinks"
   or link-level export, use that. Otherwise, flag any 301 that has Inlinks > 0
   and note in the 301's row which pages likely link to it (the pages linking
   to it need the issue, not the 301 itself).

8. **SEO Page identification**: Set SEO Page = TRUE for pages that appear to be
   deliberately targeting a keyword (service pages, location pages, product pages,
   landing pages). Set FALSE for utility pages (contact, privacy, terms, cart,
   account pages). This is a judgement call based on URL structure and content type.

9. **Issue prioritisation**: Every 200 OK page must have its Issue column filled
   in where any issue exists. If a page has multiple issues, apply the most
   critical one to the Issue column and list the rest in Notes. Priority order:
   1. Missing H1
   2. Indexed but shouldn't be
   3. Has internal links to 301
   4. Potentially cannibalisation
   5. Unoptimised keyword
   6. Optimise better
   7. Optimise & create a new page
   8. No SEO value
   9. LHF shows better kwd

---

### Phase 3: Content Audit - Colour Coding

Apply background colours to entire rows using these rules, checked in this order:

| Condition | Colour | Hex | Meaning |
|-----------|--------|-----|---------|
| Traffic < 50 sessions AND 0 backlinks | Red | #FF6B6B | Low value - candidate for removal/noindex |
| Traffic < 50 sessions AND backlinks > 0 | Blue | #6B9BFF | Low traffic but has link equity - redirect candidate |
| Traffic < 50 sessions (initial flag) | Pink | #FFB6C1 | Low traffic - needs investigation |
| SEO Page = TRUE AND Word Count < 500 | Orange | #FFB347 | Thin content on an SEO page - needs expanding |

**Traffic source**: Use GA4 Sessions or GSC Clicks column if available in the
Screaming Frog export. If no traffic data is available, note this limitation and
skip the traffic-based colour coding, applying only the word count check.

**Backlink source**: Use Ahrefs referring domains column if available.

In the **Content Action** column, write a standardised action phrase so the sheet
can be filtered. Use these consistent terms:
- "Remove or noindex" (red rows - low traffic, no backlinks)
- "301 redirect" (blue rows - low traffic, has backlinks)
- "Investigate traffic" (pink rows - low traffic, needs investigation)
- "Expand content" (orange rows - thin SEO page under 500 words)
- "Rewrite content" (content is on the wrong page, duplicated, or fundamentally flawed)
- "Optimise on-page" (keyword issues, missing tags, title/H1 mismatch)
- "Fix internal links" (for 301/404 pages, or pages linking to 301s)
- "Review indexability" (noindex/index issues)
- "Add internal links" (page has no body content links or missing contextual bridges)
- "Add FAQ section" (SEO page missing FAQ)
- "Fix images" (missing or generic alt text)
- "Fix canonical" (broken or missing self-referencing canonical)
- "Consolidate" (cannibalisation - merge with another page)
- "No action needed" (for pages in good shape)

---

### Phase 3b: Page-Level Content Review (Optional)

This phase produces a separate client-facing PDF that reviews each live page
in plain English. It goes beyond the crawl data by fetching the actual page
content via web_fetch and assessing what a visitor and search engine actually
see on each page.

**When to run this phase:** When Graham asks for a "page by page audit",
"page level review", "content review", or when the audit is for a client
who needs plain-English explanations of what's wrong and what to fix.

**Language rules:** Write in plain English for a non-technical audience.
No jargon. No SEO acronyms without explanation. No em dashes. The reader
is typically a business owner, not an SEO practitioner. Use "you" voice.

#### Process

1. **Identify pages to review**: Start with all SEO Pages (TRUE in the
   SEO Page column), then review supporting content pages (case studies,
   guides), then utility pages (about, contact). Skip 301s and 404s -
   those are covered in the strategy PDF.

2. **Fetch each page**: Use web_fetch with html_extraction_method=markdown
   and a token limit of 3000-4000 per page. This gets the rendered content
   including headings, links, images, and page structure.

3. **For each page, assess these things:**

   **Content quality:**
   - Does the content make sense and read well?
   - Is any content duplicated within the page (same section appearing twice)?
   - Is the content specific to this business, or could it be on any website?
   - Are there copy-paste errors (wrong location names, wrong business names,
     content from another page left in by mistake)?
   - Is there enough content for the page to rank (word count vs competitors)?

   **Structure:**
   - Does the page follow a logical flow?
   - Are H2 headings descriptive and keyword-relevant, or generic?
   - Is there a clear call to action?
   - Is there a FAQ section (for SEO pages)?
   - Are there contextual internal links in the body content?

   **Technical (visible from content):**
   - Does the title match the H1? Do they reinforce the same keyword?
   - Are images using descriptive alt text or generic placeholders?
   - Do internal links point to current URLs or old redirecting ones?
   - Are there any broken links visible in the content?
   - Is the meta description an appropriate length and compelling?

   **Trust signals:**
   - Are accreditations/certifications mentioned?
   - Are there customer testimonials or case study references?
   - Is specific local knowledge demonstrated (for location pages)?
   - Are brand names, product models, or specific details included?

4. **Rate each page with a traffic light:**
   - **GREEN** - Page is in good shape, minor tweaks only
   - **AMBER** - Page needs work to perform better
   - **RED** - Page has serious problems that need fixing soon

5. **Group pages into logical sections in the PDF:**
   - Part 1: Money Pages (service pages, location pages, homepage)
   - Part 2: Support Pages (case studies, guides, about, contact)
   - Part 3: Site-Wide Issues (patterns that affect multiple pages)

6. **End with a Priority Action List** grouped into three tiers:
   - Do This Week (Critical) - things that are actively hurting the site
   - Do This Month (Important) - things that improve performance
   - Do Next Month (Growth) - expansion and new content opportunities

#### Common patterns to watch for

These issues come up frequently across client sites. Actively check for them:

- **In-page content duplication**: WPBakery, Breakdance, and other page
  builders often accidentally duplicate content blocks. The same section
  appears twice on the page. This is extremely common and looks bad to
  both visitors and Google. Flag every instance.
- **Copy-paste errors between pages**: Location pages built from templates
  often have the wrong location name left in from the template source.
  Check every location reference on every location page.
- **Meta description referencing wrong page**: Case studies and location
  pages frequently have meta descriptions copied from other pages.
- **CTA text from wrong page type**: A residential page saying "for your
  commercial property" because the CTA was copied from the commercial page.
- **Outdated information**: Government grants, scheme names (OLEV vs OZEV),
  grant amounts, eligibility criteria. Flag anything that might be stale.
- **Generic headings**: "Why Choose Us", "Our Services", "Benefits" - these
  do no SEO work. They should include the keyword and location.
- **Sidebar/footer links to old URLs**: Page body content may be correct
  but sidebar CTAs and footer links often still point to old 301 URLs.
- **Broken internal links in sidebars**: Links going to # (nowhere) or
  linking to the current page instead of the intended destination.
- **Missing case study references**: Service pages that don't reference
  their own case studies when relevant ones exist on the site.
- **Images with builder-generated alt text**: Alt text like "CTA PH1",
  "image-3", "Screenshot 2025-12-23" instead of descriptive text.

#### Screenshot Annotations (Phase 3b Enhancement)

For each page reviewed, capture annotated screenshots to embed in the PDF:

1. **Navigate to each live page** using the browser subagent tool.
2. **Capture viewport screenshots** of key sections (hero, content area,
   sidebar, footer). Scroll through the page to capture multiple sections.
3. **Annotate with PIL/Pillow** using Python scripts:
   - **Red circles** (3px stroke, #CC4444) around issues (duplicate content,
     wrong location names, generic headings)
   - **Red arrows** pointing to specific problem elements
   - **Callout labels** with white text on semi-transparent dark background
     explaining the issue (e.g. "Wrong location name", "Duplicate section")
   - **Green checkmarks** on elements that are correct (optional, for balance)
4. **Embed annotated screenshots** into the Page-Level Review PDF directly
   below the written findings for each page.
5. **Save originals and annotated versions** to the output directory.

**Annotation style rules:**
- Circle stroke: 3px, colour #CC4444 (red) for issues, #2E8B3E (green) for good
- Arrow stroke: 3px, same colours as circles
- Callout labels: Helvetica/Arial 14px, white text on rgba(0,0,0,0.75) rounded rect
- Max 3-4 annotations per screenshot to avoid clutter
- Always include a brief caption below each screenshot in the PDF

#### What this phase CANNOT do

Be upfront about limitations:

- Cannot check page speed, Core Web Vitals, or rendering performance
- Cannot verify schema markup from the fetched content alone
- Cannot see content behind login walls or gated sections
- Screenshots are viewport-width (1275px) - full-page capture requires
  scrolling and capturing multiple sections
- JavaScript-heavy content (WPBakery shortcodes) should render in the
  browser but word counts may still differ from Screaming Frog

---

### Phase 4: Strategy - Keyword Research via Ahrefs

For each SEO Page, use the Ahrefs MCP connection to validate and improve the
keyword targeting:

1. Take the current keyword inferred in Phase 2.
2. Use Ahrefs keywords-explorer-overview to check the search volume and
   related metrics for that keyword.
3. Use Ahrefs keywords-explorer-matching-terms or related-terms to see if
   there is a better keyword variant with higher volume or better intent
   alignment.
4. If a better keyword exists, add it to the "Proposed Keyword" column.
   Add reasoning in Notes (e.g. "Current: bay windows (vol 1200), Proposed:
   bay windows uk (vol 2400) - higher volume, same intent").
5. If the current keyword is already the best option, leave Proposed Keyword
   blank - don't fill it in just because you can.
6. Consider search intent - is the page type (service page vs location page
   vs informational) aligned with the SERP intent for that keyword?

Do NOT use Ahrefs KD as a competitiveness metric. It measures referring
domains to ranking pages which is misleading. Use it only as a rough
directional signal, never as a decision-making factor.

---

### Phase 5: Backlink Planning via Ahrefs

For each SEO page that has a proposed keyword (or a confirmed current keyword
worth pursuing), use Ahrefs to analyse the competition and fill in the
backlink columns:

1. **Get the SERP overview**: Use Ahrefs serp-overview for the target keyword
   to see what's ranking on page 1.

2. **Filter competitors**: Only analyse pages that are ranking ON PURPOSE for
   this keyword on relevant domains. Filter out:
   - Authority-only rankings (e.g. GOV.UK, Wikipedia ranking on domain
     strength, not page relevance)
   - Accidental rankings (wrong page from right domain)
   - Homepages ranking on brand/domain signals
   - Pages with different intent (blog posts when we're building a service page)
   Only analyse sites similar to our client - local businesses, similar-sized
   companies, sites that have deliberately targeted this keyword.

3. **Analyse backlinks for filtered competitors**: For each real competitor,
   use Ahrefs site-explorer-all-backlinks or site-explorer-referring-domains
   to get their page-level backlink profile. Note:
   - Number of dofollow referring domains
   - Number of nofollow referring domains
   - Anchor text distribution

4. **Fill in DF Links Required**: Calculate the average number of dofollow
   referring domains across the filtered competitors (not authority sites).
   Add 30% as the target. Write this number in the cell.

5. **Fill in DF Anchor Types**: List the actual anchor texts the competitors
   are using for their dofollow links. Write them comma-separated in the cell.
   If competitors have no backlinks for this keyword, write "Branded only"
   (brand name, domain, branded + keyword variations).

6. **Fill in NF Links Required**: Same as DF but for nofollow links. Calculate
   the average nofollow referring domains across filtered competitors + 30%.

7. **Fill in NF Anchor Types**: List the nofollow anchor texts competitors are
   using. These are typically from directories, forums, social profiles.

8. **Priority order**: Pages with higher search volume and lower actual SERP
   competition (based on the filtered competitors, not KD) get higher priority.
   Note the priority in the Notes column.

**Important rules:**
- Never guess what backlinks are required. Observe what the SERP data shows.
- If competitors rank without backlinks, state that. Don't invent requirements.
- Prefer link insertions over guest posts (link insertions carry more power).
- If no Ahrefs MCP connection is available, skip this phase and note in the
  report that backlink analysis requires Ahrefs access.

---

### Phase 6: Growth Planning

After the audit is complete, add a "Growth Plan" section to the strategy PDF:

- Recommend topics for new content based on gaps found during the audit
- Suggest a topical map structure if content gaps are significant
- Recommend RSN (Relevance Support Network) buildout where appropriate
- Include the user's own ideas if provided

---

## Output 1: Audit XLSX

Build the XLSX using openpyxl. Read the xlsx skill for formatting best practices.

### Formatting requirements:
- **Header row**: Dark blue background (#1B2A4A), white bold text, frozen row
- **Column widths**: Address = 60, Title/H1/Meta = 40, others = 18
- **Auto-filter**: Applied to all columns
- **Colour coding**: Applied as row fills per Phase 3 rules
- **Conditional formatting**: Data validation dropdown on Issue column if possible
- **Sheet name**: "SEO Audit"
- **Second sheet**: "Audit Summary" with counts:
  - Total pages crawled
  - Pages by status code (200, 301, 404, other)
  - SEO pages count
  - Pages by colour category (red/blue/pink/orange/clear)
  - Pages by issue type
  - Pages with missing titles/H1s/meta descriptions

---

## Output 2: Strategy PDF

Build a professional PDF using ReportLab. Reference the example report at
`reference_report.pdf` in the skill artifacts for the exact visual style.

### PDF structure:

**Page 1 - Cover**
- Dark blue background (#1B2A4A) filling the entire page
- Graham SEO logo centred near the top (download from
  grahamseo.co.uk/wp-content/uploads/2023/09/Graham-SEO-Logo-Graham-SEO.png.webp,
  convert to PNG, flatten RGBA onto white background, scale to ~250x60px)
- Client name in Helvetica-Bold 28pt, white (#FFFFFF), centred vertically
- "SEO Audit & Strategy Report" in Helvetica 18pt, white, below client name
- Thin accent blue divider line (#3B7DD8, 2pt, ~120px wide) centred below subtitle
- "Prepared by Graham SEO Ltd" in Helvetica 11pt, #B0C4DE (light steel blue)
- Date in Helvetica 11pt, #B0C4DE

**Page 2 - Executive Summary**
- SectionHeader: "Executive Summary"
- Stat boxes row: 6 boxes in a horizontal row, each ~78px wide x 50px tall
  with rounded corners, containing:
  - Large number in Helvetica-Bold 18pt, white
  - Label in Helvetica 7pt, white, below the number
  - Box colours (left to right): #1B2A4A, #2C4A7C, #4FBDBA, #FF6B6B, #FFB347, #CC4444
- Summary paragraph(s) in Helvetica 10pt, #2D2D2D body text below stat boxes

**Page 3 - Table of Contents**
- SectionHeader: "Table of Contents"
- Numbered list in Helvetica 12pt, #1B2A4A

**Technical Audit Findings** (2-4 pages)
- Status code breakdown (table)
- Redirect chains (SubSectionHeader + CalloutBox + table)
- Internal links to 301 redirects (SubSectionHeader + table)
- Canonical tag issues
- Indexability issues
- **Screenshots:** Include annotated screenshots to evidence key technical
  issues. Capture the following where relevant:
  - Browser screenshot of a page with a broken redirect chain, annotated
    with the URL bar showing the redirect and a callout label explaining
    the chain (e.g. "301 > 301 > 404 - dead end")
  - Screenshot of the site navigation/footer showing internal links that
    point to 301 URLs, with red circles around the offending links and
    callout labels showing the destination status
  - Screenshot of a page that is indexed but should not be (e.g. tag page,
    archive page), annotated to show why it should be noindexed
  - Screenshot of Google SERP showing the client's listing with a
    truncated meta description, annotated with the cut-off point marked
  - Screenshot showing duplicate/mismatched title and H1 on the same page,
    with both elements circled and labelled

**Content Audit Findings** (2-4 pages)
- Traffic distribution (SubSectionHeader + table)
- Thin content on SEO pages (SubSectionHeader + CalloutBox + table)
- Meta description issues
- **Screenshots:** Include annotated screenshots to evidence content issues:
  - Screenshot of a thin content page showing the sparse body content,
    annotated with a callout showing the word count (e.g. "Only 485 words -
    needs expanding to 800+")
  - Screenshot comparing a thin page vs a well-built page on the same site,
    annotated to highlight the contrast in content depth
  - Screenshot of a page with generic headings (e.g. "Why Choose Us"),
    annotated with red circles and a callout suggesting keyword-rich
    alternatives (e.g. "Should be: Why Choose Gen Green for Solar Panels
    in Chester")
  - Screenshot showing duplicate content blocks or copy-paste errors,
    annotated with circles around both instances

**Keyword Strategy** (1-2 pages)
- Title and H1 alignment issues (table with highlighted rows)
- Keyword targeting observations (prose)
- **Screenshots:** Include annotated screenshots where helpful:
  - Screenshot of a page's browser tab and H1 showing a title/H1 mismatch,
    with both elements circled and the misaligned keywords labelled
  - Screenshot of the homepage title tag vs H1 when they target different
    keywords, with callout labels showing what each is targeting

**URL Architecture Issues** (if applicable, 1 page)
- Case studies or pages sitting outside the expected folder structure
- Inconsistent URL patterns
- **Screenshots:** Annotated screenshot of the site's XML sitemap or URL
  list showing the structural inconsistency, with callout labels

**Growth Plan** (1 page)
- Immediate priorities - numbered list
- Content expansion priorities - numbered list
- New content opportunities - bullet list
- Meta description cleanup

**Appendix - Colour Code Key**
- Row colour coding table (with actual colour fills in first column)
- Page type colour coding table (with actual colour fills)
- Issue types summary table (issue + count)

### Screenshot Guidelines for Strategy PDF

Annotated screenshots in the Strategy PDF follow the same annotation rules
as Phase 3b (see "Screenshot Annotations" section above), plus these
additional guidelines specific to the strategy report:

1. **Be selective** - The strategy PDF is a summary document. Include only
   the most impactful screenshots that evidence the key findings. Aim for
   1-2 screenshots per major section, not every issue.
2. **Pick the worst offender** - If 8 pages link to 301s, screenshot the
   worst example (the one with the most inlinks or the most visible link
   in the navigation). Reference the other affected pages in the table.
3. **Show cause and effect** - Where possible, pair the issue with its
   consequence. For example: a screenshot of the internal link pointing
   to a 301 URL alongside a screenshot of the 404 page the chain ends at.
4. **Annotate for non-technical readers** - The strategy PDF may be shared
   with clients. Annotations should explain what the reader is looking at
   in plain language, not just circle the problem.
5. **Caption every screenshot** - Use Helvetica 8pt, #444444, italic.
   Describe what the screenshot shows and why it matters.
   Example: "The site footer links to /solar-panels/sale which returns a
   301 redirect, then lands on a 404 error page. This wastes crawl budget
   and creates a poor user experience."
6. **SERP screenshots** - Where relevant, capture Google search results
   showing the client's listing to evidence issues like truncated meta
   descriptions, wrong page ranking, or missing rich snippets. Annotate
   the truncation point or the problematic element.

---

### PDF Styling Specification (MANDATORY)

This is the exact styling to replicate. Based on the reference report
`reference_report.pdf` in the skill artifacts.

#### Colour Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Dark Blue | #1B2A4A | (27, 42, 74) | Cover bg, section headers, table headers |
| Mid Blue | #2C4A7C | (44, 74, 124) | Stat box variant |
| Accent Blue | #3B7DD8 | (59, 125, 216) | Left bars on sub-headers and callouts, divider lines |
| Light Blue BG | #E8EEF6 | (232, 238, 246) | Sub-section header backgrounds |
| Callout BG | #F0F4FA | (240, 244, 250) | Callout box backgrounds |
| Teal | #4FBDBA | (79, 189, 186) | Stat box variant |
| Table Alt Row | #F8F9FA | (248, 249, 250) | Alternating table row background |
| Table Border | #C8D6E8 | (200, 214, 232) | Table cell borders |
| Body Text | #2D2D2D | (45, 45, 45) | Main body text |
| Secondary Text | #444444 | (68, 68, 68) | Callout body text, footer text |
| Red Alert | #CC4444 | (204, 68, 68) | Dead end labels, red status |
| Red Row | #FF6B6B | (255, 107, 107) | Low value row colour |
| Blue Row | #6B9BFF | (107, 155, 255) | Redirect candidate row colour |
| Orange Row | #FFB347 | (255, 179, 71) | Thin content row colour |
| Light Steel | #B0C4DE | (176, 196, 222) | Cover subtitle text |
| Amber Highlight | #FFF3E1 | (255, 243, 225) | Highlighted table row (keyword issues) |

#### Typography

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| Cover client name | Helvetica-Bold | 28pt | Bold | #FFFFFF |
| Cover subtitle | Helvetica | 18pt | Normal | #FFFFFF |
| Cover meta text | Helvetica | 11pt | Normal | #B0C4DE |
| Section header text | Helvetica-Bold | 13pt | Bold | #FFFFFF |
| Sub-section header | Helvetica-Bold | 11pt | Bold | #1B2A4A |
| Callout title | Helvetica-Bold | 10pt | Bold | #1B2A4A |
| Body text | Helvetica | 10pt | Normal | #2D2D2D |
| Callout body | Helvetica | 9pt | Normal | #444444 |
| Table header | Helvetica-Bold | 8-9pt | Bold | #FFFFFF |
| Table body | Helvetica | 8-9pt | Normal | #000000 |
| Footer | Helvetica | 7pt | Normal | #444444 |
| TOC items | Helvetica | 12pt | Normal | #1B2A4A |
| Stat box number | Helvetica-Bold | 18pt | Bold | #FFFFFF |
| Stat box label | Helvetica | 7pt | Normal | #FFFFFF |

#### Component Specifications

**SectionHeader** (main section titles)
- Full-width dark blue (#1B2A4A) rounded rectangle
- Height: ~40pt, with text vertically centred
- Text: Helvetica-Bold 13pt, white
- Corner radius: 4pt
- Margin: 6pt above, inset 6pt left padding
- Spans the full content width (left margin to right margin)

**SubSectionHeader** (sub-topics within sections)
- Light blue background (#E8EEF6)
- 4pt accent blue (#3B7DD8) solid bar on the left edge
- Height: ~31pt
- Text: Helvetica-Bold 11pt, #1B2A4A
- Left padding: 10pt (after the accent bar)
- Full content width

**CalloutBox** (important notes, recommendations)
- Background: #F0F4FA
- 4pt accent blue (#3B7DD8) solid bar on the left edge
- Padding: 10pt all sides (after the accent bar)
- Title: Helvetica-Bold 10pt, #1B2A4A
- Body: Helvetica 9pt, #444444
- Full content width
- Corner radius: 0 (square corners)

**Tables**
- Header row: Dark blue (#1B2A4A) background, white bold text (8-9pt)
- Body rows: alternating white / #F8F9FA
- Border: thin lines in #C8D6E8 on all cell edges
- Cell padding: 4pt vertical, 6pt horizontal
- Column widths: proportional to content, URL columns get most space
- Colour indicators in first column: use actual fill colours (e.g. #FF6B6B
  for Red, #6B9BFF for Blue) with white text for the colour name
- Highlighted rows (e.g. keyword mismatches): use #FFF3E1 (amber) background
- "Dead end" status text: #CC4444 (red)

**Stat Boxes** (Executive Summary)
- 6 boxes in a horizontal row using PIL-generated PNG image
- Each box: ~78px wide x 50px tall, rounded corners (6px radius)
- Large stat number centred: Helvetica-Bold 18pt, white
- Label below number: Helvetica 7pt, white
- Box colours: #1B2A4A, #2C4A7C, #4FBDBA, #FF6B6B, #FFB347, #CC4444
- 4px gap between boxes
- Generated as a single PNG image, embedded full-width in the PDF

**Cover Page Divider**
- Thin horizontal line: #3B7DD8, 2pt height, ~120px wide
- Centred horizontally below the subtitle text

**Footer**
- Left-aligned: "Graham SEO Ltd - [Client Name] SEO Audit"
- Right-aligned: "Page [n]"
- Font: Helvetica 7pt, #444444
- Position: bottom margin of every page except the cover

#### Page Layout
- Page size: A4 (595.28 x 841.89 pts)
- Margins: ~57pt (2cm) all sides for content pages
- Cover page: full-bleed dark blue background, no margins
- Content width: ~493pt (595.28 - 57 - 57 + slight padding adjustment)

---

## Output 3: Page-Level Review PDF (Phase 3b)

Build a client-facing PDF using ReportLab with the **same styling as Output 2**
(same SectionHeader, SubSectionHeader, CalloutBox, table styles, colours,
fonts, footer format). Reference the styling specification above.

### PDF structure:

**Page 1 - Cover**
- Same cover layout as Output 2 but with different title:
- Title: "[Client Name]" in Helvetica-Bold 28pt, white
- Subtitle: "Page by Page SEO Review" in Helvetica 18pt, white
- Accent divider, "Prepared by Graham SEO Ltd", date - all same as Output 2
- Graham SEO logo (same prep as Output 2)

**Page 2 - How to Read This Audit**
- SectionHeader: "How to Read This Audit"
- Explain the traffic light rating system using three RatingBadge examples
  inline with descriptions
- Note data sources and limitations

**Part 1: Money Pages**
- SectionHeader: "Part 1: Money Pages"
- One SubSectionHeader per page (or grouped for similar pages)
- Each page gets:
  - URL displayed in the sub-section header
  - RatingBadge (GREEN/AMBER/RED) inline after the URL
  - "What's good" summary paragraph
  - "What needs fixing" bullet list
  - **Annotated screenshot(s)** embedded below the text findings, showing
    the actual issues circled/labelled. Each screenshot gets a caption in
    Helvetica 8pt, #444444, italic.
- Use CalloutBox for critical issues specific to that page

**Part 2: Support Pages**
- SectionHeader: "Part 2: Support Pages"
- Case studies, about, contact, category archives
- Lighter treatment - shorter notes per page
- Screenshots only where there are visible issues worth annotating

**Part 3: Site-Wide Issues**
- SectionHeader: "Part 3: Site-Wide Issues"
- Patterns that affect multiple pages (presented as CalloutBox items)
- Include a "best example" annotated screenshot for each pattern

**Priority Action List**
- SectionHeader: "Priority Action List"
- Three SubSectionHeaders: "Do This Week (Critical)" / "Do This Month
  (Important)" / "Do Next Month (Growth)"
- Numbered items, bold numbers, plain text descriptions

### PDF components (ReportLab Flowables):

**RatingBadge** - A small rounded rectangle (70px wide x 18px tall) with
the rating text in white on a coloured background:
- GREEN: #2E8B3E
- AMBER: #D4930D
- RED: #CC4444
- Text: Helvetica-Bold 9pt, white, centred
- Corner radius: 4pt

**AnnotatedScreenshot** - Embedded image flowable:
- Max width: full content width (~493pt)
- Aspect ratio preserved
- 1pt border in #C8D6E8
- Caption below: Helvetica 8pt, #444444, italic
- 6pt spacing above and below

All other components (SectionHeader, SubSectionHeader, CalloutBox, tables)
use the exact same specifications as Output 2.

### Tone and language:

- Plain English throughout. No jargon without explanation.
- "You" voice addressing the client/business owner.
- Specific and actionable. Not "consider optimising" but "change the
  heading from X to Y" or "this section appears twice - remove the
  second copy."
- When referencing content on the page, quote enough to identify it
  but don't reproduce large blocks.
- Use hyphens, not em dashes.
- No forbidden words.

---

## Important Notes

- Always ask for the client name before generating outputs
- If GA4/GSC/Ahrefs data columns are missing from the SF export, note the
  limitations clearly in the report and XLSX
- Never use KD as a competitiveness metric
- Use UK English throughout
- No em dashes anywhere - use hyphens
- No forbidden words: successfully, completed, thrilled, comprehensive, stellar,
  nestled, precisely, cut-throat, folks
- The PDF should be genuinely useful as a working document, not just a summary -
  the SEO practitioner needs to be able to follow it as an action plan
- When in doubt about whether a page is an SEO page, err on the side of marking
  it TRUE - it's easier to remove from scope than to miss opportunities

### Implementation Rules (for code generation)

- **Keyword inference must not concatenate all URL path segments.** Identify
  the deepest meaningful slug as the primary keyword. Location segments are
  modifiers appended after the keyword. Parent service folders (/doors/,
  /windows/) are structural and excluded unless the page IS the parent.
- **Recommendation/note matching must use exact full URL matching.** Never use
  startswith, contains, or truncated string matching to apply per-page notes
  or recommendations. A homepage recommendation must only match the homepage,
  not every URL on the domain.
- **Query string URLs** (e.g. ?utm_source=chatgpt.com) should inherit their
  keyword and classification from the canonical version. Don't treat them as
  independent pages with separate keyword inference.
- **Page type classification matters.** Understand the difference between
  service pages (what you offer, no location - e.g. /doors/bi-folding/),
  location pages (service+location - e.g. /doors/liverpool/ or /maghull/),
  core pages (home, about, contact), and supporting content (blog posts,
  guides). Keyword inference and recommendations should reflect the page type.

---

## Execution Checklist

Before delivering outputs, verify:
- [ ] All HTML rows from the SF export are included (not just 200s)
- [ ] Colour coding applied correctly to rows
- [ ] Content Action column uses consistent, filterable terms
- [ ] Current keyword inferred for all SEO pages
- [ ] Keywords use deepest slug + location modifier, NOT concatenated path segments
- [ ] No per-page notes/recommendations have bled onto wrong pages
- [ ] Query string URLs inherit from their canonical, not treated independently
- [ ] Cannibalisation flagged where detected
- [ ] Issue column populated with valid values only
- [ ] XLSX has frozen header row and auto-filter
- [ ] Audit Summary sheet has accurate counts
- [ ] PDF cover has Graham SEO logo (flattened onto white bg)
- [ ] PDF sections flow logically and reference specific URLs
- [ ] All text is UK English, no em dashes, no forbidden words
- [ ] Strategy PDF includes annotated screenshots for key technical findings
- [ ] Strategy PDF includes annotated screenshots for key content findings
- [ ] Strategy PDF screenshots are selective (worst offenders, not every issue)
- [ ] Strategy PDF screenshot captions explain the issue in plain language
- [ ] SERP screenshots included where meta description truncation is evidenced
- [ ] Both files saved and presented to Graham

**If Phase 3b was run, also verify:**
- [ ] Every SEO page (200 OK) was fetched and reviewed
- [ ] Every page has a traffic light rating (GREEN/AMBER/RED)
- [ ] Copy-paste errors identified (wrong locations, wrong business names)
- [ ] In-page content duplication flagged for each affected page
- [ ] Internal links to 301s/404s noted where visible in page content
- [ ] Priority action list has three tiers with numbered items
- [ ] Language is plain English throughout - no unexplained jargon
- [ ] Browser screenshots captured for key pages with visible issues
- [ ] Screenshots annotated with red circles, arrows, and callout labels
- [ ] Annotated screenshots embedded in the Page-Level Review PDF
- [ ] Screenshot captions are descriptive and match the written findings
- [ ] Page-level review PDF saved and presented to Graham
