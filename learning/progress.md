# Progress

## Now
Section 6 (sessions and polish). Task 6.1 built and tested (2026-10-01): `required` + `Number()` on the page; the server answers 400 for effort outside 1–5.
6.1 done: added `!Number.isInteger(climb.effort)` myself (found the function alone; `!` was shown). Next: 6.2, today vs past sessions.
Sections 1–5 are done: the climbs live in PostgreSQL on Neon and survive a restart.

## Solid (did it correctly)
- HTML forms, labels, nesting: built the six-field log form; fixed the merged `<label input>` tag.
- Catching submit with `preventDefault`: predicted it stops the reload, then tested it.
- Text vs number from HTML: fixed `'3'` with `Number()` twice; predicted `Number('')` is 0.
- Server-side check: placed the 400 `if` above the INSERT; found that effort 6 slips past `< 1` and proved it with a hand-made request.
- Redraw the list from the data: predicted that splice without a redraw leaves a stale screen.
- `.gitignore`, `.env`, `process.env`, the request logger and `express.static`: wrote them myself.
- `fetch` + JSON body: wrote the POST body; predicted all 3 outcomes of the `body.id` URL bug.
- Column types and refusal of bad data: predicted that `'lots'` in an INTEGER column errors.
- Parameterized INSERT: extended a two-column example to `$1`–`$6` on the first try.

## Shaky (bring back one per session)
- HTTP method ↔ SQL: named the POST then GET lines right, but needed the route code to name the SQL; said climbs go "into the server".
- Data object vs page element: tried `climb.textContent` and `getElementById` on a climb object.
- SQL is text: wrote `WHERE id = climb.id` inside the query; the `$1` hand-over was told.
- Database defaults: predicted that an INSERT without `id` errors (identity fills it in).
- Conditions: wrote `> 1 || > 5`, `> 1 || < 5`, `= false`, `x != isInteger(x)`; traces well once asked. Says "should work" before testing.
- Array vs list (the array stores, the `<ul>` shows); CSS specificity; closures; why serve only `public/`.

## Parking lot
- Hardest send (first after the MVP) · Progress chart · Edit a climb · Warm-up and training recommendations (with pre-workout log)
- Show the "pick an effort" message at the Effort legend instead of the browser bubble on radio 1
- Backup/export · Offline mode · Sync across devices / accounts · Comp grades above 7c
