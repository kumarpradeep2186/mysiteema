# QiddiyaGolf Figma → New Page Plan (/plan-your-visit)

## Goal
Build a new page at **/plan-your-visit** from the QiddiyaGolf Figma design (`Ready for Dev - QiddiyaGolf`, frame `5222:25498`). It will use the real photos, copy, colours and type from the design. The existing **/golf** page stays unchanged, and so do the site's header and footer.

> This plan needs Execute mode to carry out. Nothing has been changed yet.

## Prerequisite (blocking)
When I tried earlier, Figma returned **"Not found"** for the frame and for the file's first page. That means the connected Figma account can't see the file. Before I start, you need to do one of these:
- Share the QiddiyaGolf file with the connected Figma account (view access is enough), or
- Turn on "anyone with the link can view", or
- Duplicate the file into a team that the connected account can see, and send me the new link.

If access still fails, I'll stop and tell you. I won't fall back to the low-resolution mockup unless you ask me to.

## Approach
1. **Discovery:** read the Figma frame's structure, take a full-page reference screenshot, and list each section with its position and size. Repeating rows become one block, not one block per row. I'll show you the section-to-block plan to confirm before building.
2. **Extraction:** pull design data for every section in one pass: layout, exact colours, type and spacing tokens, and all image assets. This includes hidden carousel slides and tab panels, such as the second hero slide and the "From Riyadh Downtown" panel. All images are downloaded before any building starts, then checked for valid file types, sizes and aspect ratios.
3. **Reuse what /golf already built.** Before writing anything new, I'll compare each Figma section with those blocks:
   - Hero → `hero (golf)`
   - Know before you go → `cards (info)`
   - Restaurant / Golf shop → `columns (feature)`
   - Weather → `weather`
   - How to get here → `tabs`
   - FAQs → `accordion (faq)` with a group title
   - Questions, ideas? → `columns (contact)`
   
   Where Figma differs (exact sizes, colours, fonts, tilt angles), I'll make an **opt-in** variant or move values into tokens, so /golf doesn't change. New blocks only where nothing fits (for example a hero slider or an image carousel, if the design needs them).
4. **Fonts:** if Figma names a different heading font from the Archivo stand-in, I'll self-host it, provided it's free to use. If it's a licensed font, I'll ask before going further.
5. **Assembly:** write `content/plan-your-visit.plain.html` with section styles and local image paths, and no structural wrapper tags.
6. **Verification:**
   - Pin the preview to the Figma frame width (1440px expected).
   - Force all images to load.
   - **Hard geometry gate:** full-bleed images must fill their containers with nothing covering them.
   - **Hard spacing gate:** section heights and gaps measured against the Figma values.
   - Compare each block, at full size, with the Figma screenshot.
   - Check mobile (375px), keyboard use and accessible names.
   - Confirm /golf and /accordion still render as before.
7. **Report:** exactly which surfaces changed. The local workspace is the only one; uploading to DA, previewing or publishing happens only if you ask for it separately.

## Decisions made
| Topic | Decision |
|---|---|
| Source | QiddiyaGolf Figma file (needs access first) |
| Existing /golf page | Kept as is; new separate page |
| Page address | /plan-your-visit |
| Header and footer | Not changed (site-wide) |
| Remote surfaces | Local only, no DA upload, preview or publish |

## Open questions (resolved during execution)
- Do the hero slides or the restaurant and shop image stacks have more slides in Figma? If so: a real carousel, or a static first slide?
- Licence and availability of the Figma heading font.
- The Figma text for the FAQ answers, the Downtown tab and the contact details, which replaces the placeholders used on /golf.

## Checklist
- [ ] Confirm the QiddiyaGolf Figma file is shared with the connected Figma account, then retry access to frame `5222:25498`
- [ ] Read the frame structure and save the full-page reference screenshot
- [ ] Identify and order all sections, recording position and size for each; present the section-to-block plan for your confirmation
- [ ] Extract design data, tokens and asset URLs for every section, including hidden slides and tab panels
- [ ] Download all images, then check file type, size and aspect ratio
- [ ] Compare each section with the existing blocks, and decide reuse, opt-in variant or new block
- [ ] Self-host the Figma heading and body fonts if they're free (ask if licensed)
- [ ] Build or adjust block variants without changing how /golf renders
- [ ] Write `content/plan-your-visit.plain.html` with section styles and local image paths
- [ ] Run lint (ESLint and Stylelint) on all changed files
- [ ] Preview at Figma width: load all images, then run the geometry and spacing gates
- [ ] Compare each block with Figma and fix mismatches using design values (up to 3 rounds)
- [ ] Check mobile layout, keyboard use and accessible names
- [ ] Re-check that /golf and /accordion still render as before
- [ ] Clean up working files and report: changes are local only, plus any remaining gaps
