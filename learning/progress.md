# Progress

## Now
Section 6 (sessions and polish). Sections 1–5 are done: the climbs live in PostgreSQL on Neon and survive a restart.
6.1 done (2026-10-01): `required` + `Number()` on the page; the server answers 400 for an effort that is outside 1–5 or not a whole number.
6.2 first half done (2026-10-01): today's list skips climbs whose `created_at` day isn't today; I back-dated a row in Neon to test it.
Next: the second half of 6.2, a "Past sessions" card listing earlier days with their climbs.

## Solid (did it correctly)
- HTML forms, labels, nesting: built the six-field log form; fixed the merged `<label input>` tag.
- Catching submit with `preventDefault`: predicted it stops the reload, then tested it.
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
- SQL is text: wrote `WHERE id = climb.id` inside the query; the `$1` hand-over was told.
- Database defaults: predicted that an INSERT without `id` errors (identity fills it in).
- Array vs list (the array stores, the `<ul>` shows); CSS specificity; closures; why serve only `public/`.

## Parking lot
- Hardest send (first after the MVP) · Progress chart · Edit a climb · Warm-up and training recommendations (with pre-workout log)
- Show the "pick an effort" message at the Effort legend instead of the browser bubble on radio 1
- Backup/export · Offline mode · Sync across devices / accounts · Comp grades above 7c
