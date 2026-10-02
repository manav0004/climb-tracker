# Progress

## Now
Section 6 (sessions and polish). Sections 1–5 are done: the climbs live in PostgreSQL on Neon and survive a restart. 6.1 done (2026-10-01): `required` + `Number()` on the page; the server answers 400 for an effort that is outside 1–5 or not a whole number.
6.2 first half done (2026-10-01): today's list skips climbs whose `created_at` day isn't today; I back-dated a row in Neon to test it.
6.2 second half started: empty `<div id="past-sessions">` added (I spotted and removed the stray `xz` in the tag myself). My design: one `.card` per day, date as `<h2>`. `pastSessions` const added in `app.js` (2026-10-02). Grouping by day worked out in the console only (2026-10-02): `groups` object, key = date string, `if (groups[day] === undefined) groups[day] = []`, then `push`. `groupByDay()` written into `app.js` by me (2026-10-02): skips today with `continue`, returns `groups`; I also wrote `renderPast()` alone (one `.card` per day, date title, climbs, delete) and call it after the `await` lines. Newest day first: I changed `server.js` to `ORDER BY created_at DESC` after my Sep 29 test row (new id, old date) showed that `id` order is not date order (2026-10-03). 6.2 works. Next (small cleanups, one at a time): the `<li>`s sit in the card `<div>` with no `<ul>`; unused `climbDate`; the `li`-building code is duplicated in `renderList` and `renderPast`. Still unchecked: can I explain my own `Object.entries` + `[date, climbsArray]` line (I skipped the prediction)? I want to write whole functions myself: no skeletons in my files.

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
- Array vs list (the array stores, the `<ul>` shows); CSS specificity; closures; why serve only `public/`.

## Parking lot
- Hardest send (first after the MVP) · Progress chart · Edit a climb · Warm-up and training recommendations (with pre-workout log) · Effort message at the legend instead of the browser bubble on radio 1 · Past sessions on their own page/tab (`oldClimbs.html`) · Show only the last 5 past days · Backup/export · Offline mode · Sync across devices / accounts · Comp grades above 7c
