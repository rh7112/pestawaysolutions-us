# Pest Away Solutions Website (rebuild)

Website rebuild for **Pest Away Solutions LLC** — pest control and nuisance wildlife
removal, run by Robert Eccles in Warsaw, Kosciusko County, IN. Robert is family —
he grew up with Alycia, has been our pest guy for years, and my sister, grandma,
and mom are all customers now. Rebuilding this at a lower price as a family rate,
not a normal client engagement.

## Current site

Live (old) site: https://pestawaysolutions.com — WordPress (Weaver Xtreme theme +
Contact Form 7), no page builder in use beyond that. Notes from looking it over
on 2026-08-22:

- **Birdeye is embedded on the Reviews page** (`/index.php/reviews/`) via two
  iframes (widget #7 and #3, `bid=165065098699287`) — a review carousel and a
  badge. **This needs to carry over to the new site** — Robert uses Birdeye for
  customer experience/reviews, confirmed by him directly. Public profile:
  https://birdeye.com/pest-away-solutions-llc-165065098699287 (105 reviews as
  of this search).
- Robert mentioned a second software he uses (possibly scheduling-related) —
  **not identifiable from the current site**, no booking/scheduling widget or
  embed found anywhere (home, about, contact, or service pages). Need to just
  ask him directly, or check an invoice/email footer for a "powered by" mark.
- Current pages (from Ryan, 2026-08-22) — Home, About, Contact, Pest control,
  Bat removal, Squirrel removal, Mole removal, Raccoon removal (**two pages**,
  `/raccoon-removal/` and `/raccoon-removal-2/` — near-identical, only the
  image differs; `-2` appears to be the one actually linked from the nav, the
  other looks like dead/orphaned content not to carry over), Ground hog
  removal, Reviews.
- Nav currently lists every one of those pages flat across the top — Ryan's
  suggestion: **condense wildlife-removal pages into a dropdown/group** (e.g.
  "Wildlife Removal" ▾ → Bats / Squirrels / Moles / Raccoons / Groundhogs)
  rather than one top-level link each, so the header doesn't feel crowded.
  Worth confirming with Robert whether each pest still needs its own full page
  or if a few can consolidate into one page with sections.
- Services covered: general pest removal (ants, insects, hornets, bats, moles,
  spiders, bees, termites, squirrels, mice/rodents, yellow jackets), seasonal
  home pest prevention, business pest control, nuisance wildlife
  removal + entry-point repair.

## Status

Just starting — talked to Robert on 2026-08-21. Nothing built yet. See
`Questionaire.txt` for what's still needed from him before real work starts,
mirroring how `bbsystems-us`'s onboarding worked.

## What we need from Robert

Drop answers in `Questionaire.txt`, a new file, an issue, or just talk it
through with Ryan — no rush.
