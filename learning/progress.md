# Progress

## Now
Section 6 (sessions and polish). Sections 1–5 are done: the climbs live in PostgreSQL on Neon and survive a restart. 6.1 done (2026-10-01): `required` + `Number()` on the page; the server answers 400 for an effort that is outside 1–5 or not a whole number.
6.2 done (2026-10-03): today's list shows only today; I wrote `groupByDay()` and `renderPast()` myself (one `.card` per day); `ORDER BY created_at DESC` after my back-dated test row showed `id` order ≠ date order. Shared `createClimbItem(climb)`: I wrote the call; Claude finished the wiring on my request.
Section 8 (deploy on Render, skipping 7) started 2026-10-05: wrote `process.env.PORT || 3000`, predicted `undefined` → 3000; added `"start": "node server.js"` (first overwrote `dev`; keep both). Ran `npm start` locally and read ECONNREFUSED 127.0.0.1:5432 correctly. SHAKY big picture: lost on "what is Render" and why a git-ignored `.env` still reaches Render, until shown phone → Render (server.js) → Neon; then placed 5432 on the server→Neon arrow. Thought `localhost` on the phone = laptop. Use diagrams, one piece at a time.
NEXT: Render log prediction if `DATABASE_URL` is missing; push to GitHub; create the Render web service; set `DATABASE_URL`. Afterwards: explain `createClimbItem` line by line (what breaks without `return`?); `Object.entries` prediction; cleanups: `<li>`s with no `<ul>`, unused `climbDate`, unused `result` in `app.listen`. I write whole functions myself: no skeletons.

## Solid (did it correctly)
- HTML forms, labels, nesting: built the six-field log form; predicted and tested that `preventDefault` stops the reload.
- Text vs number from HTML: fixed `'3'` with `Number()` twice; predicted `Number('')` is 0.
- Server-side check: placed the 400 `if` above the INSERT; found that effort 6 slips past `< 1`; added the `isInteger` check myself.
- Dates: predicted both `toDateString()` results; wrote `new Date(climb.created_at).toDateString()`; diagnosed the format mismatch myself.
- Redraw the list from the data: predicted that splice without a redraw leaves a stale screen.
- `.gitignore`, `.env`, `process.env`, the request logger and `express.static`: wrote them myself.
- `fetch` + JSON body: wrote the POST body; predicted all 3 outcomes of the `body.id` URL bug.
- Database: predicted that `'lots'` in an INTEGER column errors; extended a parameterized INSERT to `$1`–`$6` on the first try.
- `for...in` over an object (predicted `Mon 2`, `Tue 1`); `getElementById` + `null`: wrote the `pastSessions` const; read the "properties of null" error (file, line, meaning) and placed the real bug on line 15, not the crash line 18. First guessed "syntax error" and that `null` can hold `textContent`.

## Shaky (bring back one per session)
- HTTP method ↔ SQL: named the POST then GET lines right, but needed the route code to name the SQL; said climbs go "into the server".
- Data object fields: asked to read `created_at` from a climb object, wrote a SQL query first; `climb.created_at` after a hint.
- Comparison symbols: wrote `> 1 || > 5`, `= false`, `day = !today` (`=` assigns, `!==` compares). Traces well once asked; says "should work" untested.
- SQL is text (wrote `WHERE id = climb.id` inside the query; 2026-10-03 tried to create a JS `date` variable for `ORDER BY`, then named `created_at` myself after a hint); database defaults (predicted an INSERT without `id` errors).
- CSS `#id` vs `.class`: thought `#today-list` matches `class="today-list"` and that attribute order matters. Solid on padding/margin of an empty box.
- Object as drawers: key (label) vs value (contents), missing (`undefined`) vs empty (`[]`). Wrote `groups[day] !== day`, then `!== []`; needed the answer for `=== undefined`. Found the reset-the-drawer bug myself from console output. Tracing a two-move line (`groups[day].push`) is hard; console experiments work better than mental traces. 2026-10-02: wrote `groups[date] !== today` (array compared to a string), then fixed it myself with a `continue` above the drawer check.
- Timing / `await`: knew the call belongs inside `loadClimbs` and placed it below the `await` lines, but predicted `undefined` twice for a call made before the data arrives (it is `{}`); mixes "function not called yet" with "data not there yet", and `undefined` with empty (`{}`, `[]`).
- Functions with input/output: parameters, passing an argument, `return`; wrote `createClimbItem;` without `()` at first. Array vs list (the array stores, the `<ul>` shows); CSS specificity; closures; why serve only `public/`.

## Parking lot
- Hardest send (first after the MVP) · Progress chart · Edit a climb · Warm-up and training recommendations (with pre-workout log) · Effort message at the legend instead of the browser bubble on radio 1 · Past sessions on their own page/tab (`oldClimbs.html`) · Show only the last 5 past days · Backup/export · Offline mode · Sync across devices / accounts · Comp grades above 7c · Login, so only I can add/delete on the public URL
