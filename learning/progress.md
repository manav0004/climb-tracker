# Progress

## Now
Section 6 (sessions and polish). Sections 1–5 are done: the climbs live in PostgreSQL on Neon and survive a restart.
6.1 done (2026-10-01): `required` + `Number()` on the page; the server answers 400 for an effort that is outside 1–5 or not a whole number.
6.2 first half done (2026-10-01): today's list skips climbs whose `created_at` day isn't today; I back-dated a row in Neon to test it.
6.2 second half started: empty `<div id="past-sessions">` added (stray `xz` typed inside the tag, to spot next time). My design: one `.card` per day, date as `<h2>`. Next: the `getElementById` twin in `app.js`, then build the day cards from JS.

## Solid (did it correctly)
- HTML forms, labels, nesting: built the six-field log form; predicted and tested that `preventDefault` stops the reload.
- Text vs number from HTML: fixed `'3'` with `Number()` twice; predicted `Number('')` is 0.
- Server-side check: placed the 400 `if` above the INSERT; found that effort 6 slips past `< 1`; added the `isInteger` check myself.
- Dates: predicted both `toDateString()` results; wrote `new Date(climb.created_at).toDateString()`; diagnosed the format mismatch myself.
- Redraw the list from the data: predicted that splice without a redraw leaves a stale screen.
- `.gitignore`, `.env`, `process.env`, the request logger and `express.static`: wrote them myself.
- `fetch` + JSON body: wrote the POST body; predicted all 3 outcomes of the `body.id` URL bug.
- Database: predicted that `'lots'` in an INTEGER column errors; extended a parameterized INSERT to `$1`–`$6` on the first try.

## Shaky (bring back one per session)
- HTTP method ↔ SQL: named the POST then GET lines right, but needed the route code to name the SQL; said climbs go "into the server".
- Data object fields: asked to read `created_at` from a climb object, wrote a SQL query first; `climb.created_at` after a hint.
- Comparison symbols: wrote `> 1 || > 5`, `= false`, `day = !today` (`=` assigns, `!==` compares). Traces well once asked; says "should work" untested.
- SQL is text (wrote `WHERE id = climb.id` inside the query); database defaults (predicted an INSERT without `id` errors).
- CSS `#id` vs `.class`: thought `#today-list` matches `class="today-list"` and that attribute order matters. Solid on padding/margin of an empty box.
- Array vs list (the array stores, the `<ul>` shows); CSS specificity; closures; why serve only `public/`.

## Parking lot
- Hardest send (first after the MVP) · Progress chart · Edit a climb · Warm-up and training recommendations (with pre-workout log)
- Effort message at the legend instead of the browser bubble on radio 1 · Past sessions on their own page/tab (`oldClimbs.html`)
- Backup/export · Offline mode · Sync across devices / accounts · Comp grades above 7c
