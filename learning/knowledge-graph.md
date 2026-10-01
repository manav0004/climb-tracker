# Knowledge Graph

> A map of what I **actually** know, not what I've seen once. It's updated after every lesson,
> and it decides what I get quizzed on.

## How it works

**Status ladder** (it only moves up, and only on evidence):

| Status | Means | Upgrades when… |
|---|---|---|
| 🌱 seed | Not taught yet | …it's explained to me once → 👋 |
| 👋 introduced | Explained once | …I use it in real code or a real command, even with help → 🔧 |
| 🔧 practicing | Used it with help | …I explain it in my own words **and** pass a quiz on it → ✅ |
| ✅ understood | Explained + passed a quiz | (top level; it only gets reviewed) |

**Rules**
1. **Evidence or it didn't happen.** Every upgrade needs a one-line evidence note: something I *said* or *did*,
   with the date. "I think I get it" isn't evidence, and neither is reading an explanation.
2. **Repeating isn't explaining.** Reading a definition back doesn't count as "my own words". The answer has to
   connect the idea to *this* project (see A3).
3. **Statuses never go down.** If I fail a review of a ✅ concept, it stays ✅ but gets a ⚠️ flag and goes back into
   the quiz pool until I pass again.
4. **Who gets quizzed:** 👋 and 🔧 concepts, plus ✅ concepts that are **stale** (last reviewed more than 30 days ago)
   or flagged ⚠️. **Fresh ✅ concepts are never re-quizzed.**
5. **Quiz priority:** (a) known gaps, (b) concepts the next section needs, (c) oldest "last reviewed".
   1–3 questions per session, one at a time, answered in my own words.
6. **After every lesson:** update statuses, dates and evidence, add any new concepts as 🌱, refresh the
   quiz queue, and add a line to the changelog.

**Columns:** *§* = the section of `plan.md` that teaches it ("Plan" = the planning sessions).
*Builds on* = the concepts it depends on. Those are the graph's links.

## 🎯 Quiz queue (next session)

0. **Opener (session 10): task 5.1, not started.** §5 is split into 5.1–5.4 in `plan.md` (the database is on Neon from the start). The 5.1 step was shown
   but I had to leave: Neon sign-up, `CREATE TABLE` with 3 type blanks (colour/attempts/beta), INSERT + SELECT. Predictions still open:
   (a) what `id`/`created_at` show though the INSERT skips them, (b) same INSERT twice → error or two rows?, (c) `'lots'` in `attempts`. Re-show it short.
0a. **L8/S10 gap, check it in §5 when rows come back from SQL:** in 4.3 I tried `climb.getElementById`, `climb.textContent` and the whole `${climb}`
   before `climb.id`, mixing up a data object (fields = the names before the colons) with a page element (`li.textContent`). Ask naturally: "a row comes
   back as `{ id: 4, grade: "6c", ... }`. How do you read its grade?"
1. **S36 (why `public/`):** it was told, not answered. Check it naturally in §5 when `.env` arrives: "could someone download `.env` from my server? Why not?"
1a. **S3 specificity, one quick check (taught 2026-09-29, when I said "I don't know"):** a new rule `.list-item { color: red }` against `#today-list li { color: blue }`. Which colour wins, and why? Predict it, then try it.
1a'. **L18 closures, one prediction:** after deleting the middle of 3 climbs, is the old 3rd ✕ button reused, or rebuilt? (Rebuilt: `renderList` wipes every `<li>` and makes new buttons with new functions.)
1b. **S11 (half there, 2026-10-01):** for "why does a refresh keep them but a restart doesn't", I only said "server memory wipes on restart". The
   refresh half (the tab's memory IS wiped, then `loadClimbs` re-asks the untouched server) was told to me. Check it at the §5 deliverable: after a
   restart the climbs survive. *Whose* memory are they in now?
2. **S34: what does tapping a label actually do?** My comment says it "calls the select element". Say it again using the
   word *focus*, and give one reason labels matter at the gym.
4. *(If there's time)* **S5 + S6: the rest of the session 5 step.** I've now seen that a crash halfway through the file still leaves
   the date showing. What if `<script src>` had a **typo** instead: would the date show? Predict, then break it.

## 📊 Snapshot

79 concepts · 🌱 19 · 👋 30 · 🔧 30 · ✅ 0 (as of 2026-10-01, Section 4 done)

---

## L: Low-level (the JavaScript language)

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| L1 | Variables (`let` vs `const`) | 2 | 🔧 | 2026-09-25 | 2026-09-30 | 4.2 (2026-09-30): the planted `const climbs` + `climbs = await ...` crashed with "Assignment to constant variable"; I read it as "gets nothing in return". Told: `push` fills the glued box, `=` swaps the box. I changed it to `let` myself. Earlier: The `app.js` comments explain `let count` as state and `const` for element references. I haven't explained them back yet. 2.2: saw `push` work on a `const` array, but my answer "const lets push" was the *what*. The why was given to me (it locks the label, not the contents; like a C# `readonly List`). | — |
| L2 | Data types (string, number, boolean) | 2 | 🔧 | 2026-09-28 | 2026-09-28 | 2.1: predicted `attempts: 3` but got `'3'` (a gap). Learned that everything from HTML is text (the quotes are the tell), and wrapped it in `Number(...)` myself. | L1 |
| L3 | Operators and comparisons (`+`, `===`, `>`) | 2 | 👋 | 2026-09-28 | 2026-09-28 | 2.1: `"3" + 1` gives `"31"` (it glues text instead of adding); I got this one right. | L2 |
| L4 | Conditionals (`if` / `else`) | 2 | 👋 | 2026-09-28 | 2026-09-28 | 2.2: wrote two ternaries myself (`climb.sent ? "Sent" : "Not Sent"`), after one example. No `if`/`else` yet. | L3 |
| L5 | Functions (parameters, `return`) | 2 | 👋 | 2026-09-28 | 2026-09-28 | 2.2: `renderList()` was explained as a Python `def`, and I call it after `push`. Claude wrote the function; no parameters or `return` yet. | L1 |
| L6 | Callbacks and arrow functions (`() => {}`) | 2 | 👋 | 2026-09-28 | 2026-09-28 | 2.1: the submit listener's `(event) => {...}` was explained as the same lambda as C#'s `AddListener(() => {...})`. Claude wrote it. | L5 |
| L7 | Arrays | 2 | 🔧 | 2026-09-25 | 2026-09-28 | Session 3: I got the definition ("many climbs form an array"). 2.2: wrote `climbs.push(climb)` once I knew push = Python's append. | L1 |
| L8 | Objects | 2 | 🔧 | 2026-09-25 | 2026-09-28 | Session 3: I got the definition ("a climb is an object"). 2.1: wrote 4 of the climb object's 6 fields myself, and read the object in the Console. 4.3 (2026-10-01) ⚠️ gap: to put the id in the URL I tried `${climb}` (→ `[object Object]`), `climb.getElementById` and `climb.textContent` before being given `climb.id`. Mixed up a data object with a page element. | L1 |
| L9 | Loops (`for...of`) | 2 | 👋 | 2026-09-28 | 2026-09-28 | 2.2: `for (const climb of climbs)` was explained as Python's `for climb in climbs:`. Claude wrote it. | L7 |
| L10 | Array methods (`filter`, `map`, `find`) | 6 | 🌱 | — | — | — | L6, L7 |
| L11 | Scope (where a variable can be seen) | 2 | 🌱 | — | — | — | L1, L5 |
| L12 | Template literals (`` `Grade ${g}` ``) | 2 | 🔧 | 2026-09-28 | 2026-09-28 | 2.2: my first try was `"grade"+grade,` (a bare `grade`, and a comma instead of `;`). After one example line, I wrote my own full six-field literal in my own format. | L2 |
| L13 | Dates (`Date`, comparing days) | 6 | 🌱 | — | — | `app.js` shows today's date, but it was never explained. | L8 |
| L14 | `null` / `undefined` (missing values) | 2 | 👋 | 2026-09-27 | 2026-09-27 | Session 6: `null` explained as JS's `NullReferenceException`. With a hint, I named `addBtn` as the `null` variable. 2.1: I predicted an unpicked effort would be "none", and it's `''` (an empty string: JS has no `None`, and `''` isn't `null` either). | L2 |
| L15 | Errors and `try` / `catch` | 6 | 🌱 | — | — | — | L5 |
| L16 | Async: promises and `async` / `await` | 4 | 🔧 | 2026-09-30 | 2026-10-01 | §4 trace (2026-10-01): filled in "`await` stops waiting, then the listener calls `loadClimbs()`" correctly. 4.2: explained as a Unity coroutine with `yield return www.SendWebRequest()`. Claude wrote `loadClimbs` and the `async` listeners; I copied the `await fetch` pattern into the ✕. | L6 |
| L17 | JSON (data as text) | 4 | 🔧 | 2026-09-30 | 2026-09-30 | Found `JSON.stringify` myself in `hello.js` (3.1). 4.1: saw `res.json` send the array as raw text in the tab. 4.2: wrote `body: JSON.stringify(climb)` ("you can only mail text"). | L7, L8 |
| L18 | Closures (a function remembers the variables around it when it was made) | 2 | 👋 | 2026-09-29 | 2026-09-29 | §2 trace: I said ✕ deletes "the climb that is on the same list as the x" (the right idea, the wrong mechanism). Told: each ✕'s click function captures its own `climb` from the loop, and `indexOf(climb)` finds it in the array. | L5, L6, L9 |

## S: Structural (how the pieces connect)

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| S1 | HTML elements and page structure | 1 | 🔧 | 2026-09-27 | 2026-09-27 | Session 6 (1.3): wrote `<label input type="checkbox">`, merging two tags so no box appeared. After the parent/child explanation, I nested `<input>` inside `<label>` correctly. | — |
| S2 | Forms and inputs (select, checkbox, number) | 1 | 🔧 | 2026-09-27 | 2026-09-27 | Session 6: filled in my gym's 8 grades as `<option>`s myself. My first comment on `for="grade"` was wrong ("a form named grade", "submits the form"). I tested it, found it points to the select and doesn't submit, and saw ↓ change the grade. My rewrite, "It calls the select element", still misses *focus*. Session 6 (1.3): wrote the colour options, and added an Attempts `number` input (`min="1" value="1"`) on my own. Chose a Yes/No dropdown for beta, then switched to a checkbox after the tradeoff. Was *told*, not shown, that an unticked checkbox sends nothing. | S1 |
| S3 | CSS selectors, box model, layout | 2 | 👋 | 2026-09-29 | 2026-09-29 | 2.4: my first CSS had silent invalid properties. §2 trace: said "I don't know" to why `fieldset label` loses to `#log-form label`. Taught specificity as a score (ids, classes, elements) compared left to right, like sorting layers. | S1 |
| S4 | Mobile-first and the viewport tag | 2 | 👋 | 2026-09-25 | 2026-09-25 | Explained in an `index.html` comment. I haven't explained it back. | S3 |
| S5 | The three roles: HTML structure, CSS looks, JS behaviour | Plan | 👋 | 2026-09-25 | 2026-09-26 | Session 4: I said browsers "won't run if it is not on Java". Corrected: Java ≠ JS, and pages show without JS; JS adds *behaviour*. Session 5: predicted correctly that JS keeps working without the CSS. | — |
| S6 | Files talking to each other (`<link>`, `<script src>`, paths) | 1 | 🔧 | 2026-09-25 | 2026-09-26 | Session 5: found both wire lines and wrote comments on them myself. Correctly predicted that `styles.css` would kill the styling but not the counter. Session 6: reasoned "the date shows, so `app.js` loaded" myself. | S1 |
| S7 | The DOM (JS grabbing page elements) | 2 | 🔧 | 2026-09-25 | 2026-09-27 | The `app.js` comments compare `getElementById` to Unity's `GetComponent`. Session 6: saw it return `null` once we deleted the button. In 1.3, I deleted exactly the dead references myself and kept `todayEl` ("I knew they weren't working"). The Console was clean. | S1, L8 |
| S8 | Events and listeners | 2 | 🔧 | 2026-09-25 | 2026-09-28 | The `app.js` comments compare `addEventListener` to `onClick.AddListener`. 2.1: predicted that `preventDefault()` stops the reload, then commented it out myself to test that. §2 trace (2026-09-29): left the listener and `preventDefault` out of my Log trace (started at "we get the data"). | S7, L6 |
| S9 | Drawing a list from data (data → HTML) | 2 | 🔧 | 2026-09-28 | 2026-09-28 | Session 6 (1.4): my two made-up `<li>`s are the design mock for one climb, and JS will copy that shape in §2. I predicted that tapping Log won't change the list "since we'd need JS". 2.2: the list is now drawn from `climbs` by `renderList()`. I wrote the `<li>` text and the push + redraw. The "wipe first, or you get A, A, B" point was told to me, not tested. §2 trace (2026-09-29): ✕ → delete from the data → "rerender the list to display the updated info". Correct, and in my own words. | L7, L9, S7 |
| S10 | Data model (the shape of data in memory) | 2 | 🔧 | 2026-09-25 | 2026-09-28 | Session 3: I got the definition, not the *why*. 2.2: I use `climbs` in code. I said the climbs live "in renderList" (wrong: they live in the `climbs` array, and renderList only draws it). Refresh: "it has nothing saved on it", which is close. The full chain was told to me: the tab's memory is destroyed, then `const climbs = []` makes a new array. §2 trace (2026-09-29): "display them in a list stored in an array" still blurs the two (the array stores; the `<ul>` only shows). ⚠️ known gap. 4.3 (2026-10-01): the same blur, one level down: reached for element properties (`textContent`, `getElementById`) on a climb object. | L7, L8 |
| S11 | Persistence (data that survives closing the app) | 5 | 👋 | 2026-09-25 | 2026-09-28 | Session 3: same gap as S10. Session 4: switched from `localStorage` to a database. 2.2: "a server would need to exist" is half right. Told: a server alone still wipes on restart (§4), and the database is what outlives the program. §4 deliverable (2026-10-01): predicted correctly that a restart leaves only the 2 made-up climbs. My why, "server memory wipes on restart", covers only half; the refresh half (the tab is wiped too, then re-asks the server) was told to me. | S10 |
| S12 | Frontend vs backend (client and server) | Plan | 👋 | 2026-09-26 | 2026-09-26 | I chose a backend for portfolio value, but skipped the gym-internet tradeoff when asked about it. | S5 |
| S13 | Framework vs plain JS | Plan | 👋 | 2026-09-26 | 2026-09-26 | I said: "framework is pre built so I wouldnt understand the exact mechanics of how JS really works." | S5 |
| S14 | Node.js and Express (what they are) | 3 | 🔧 | 2026-09-26 | 2026-09-29 | Decision 3: I picked them, but I haven't said what Node *is* in my own words. 3.1: wrote `hello.js` and ran it with Node myself (with the VS Code runner). Installed Express with npm. | S12 |
| S15 | npm and dependencies (other people's code I install) | 3 | 🔧 | 2026-09-30 | 2026-09-30 | Ran `npm install express` myself (2026-09-29). 3.2: predicted `node_modules` holds "too much to count" (right: 65). The why (dependencies have dependencies) was told to me. | S14 |
| S16 | `package.json` (the project's ID card and dependency list) | 3 | 👋 | 2026-09-30 | 2026-09-30 | 3.2: "no idea" what's in it. Told: ID card plus shopping list (like Unity's `Packages/manifest.json`), with `"express": "^5.2.1"` in `dependencies`. | S15 |
| S17 | `package-lock.json` and `node_modules` (generated) | 3 | 👋 | 2026-09-30 | 2026-09-30 | 3.2: said `node_modules` *should* be committed (a gap). Told: like Unity's `Library/`, it's rebuilt by `npm install`, so commit the recipe, not the groceries. The lock file (exact versions) *is* committed. | S16 |
| S18 | Modules (`import` / `export` between JS files) | 3 | 🌱 | — | — | — | S6, L5 |
| S19 | A local server: `localhost` and ports | 3 | 🔧 | 2026-09-30 | 2026-09-30 | 3.3: ran `node server.js` and used the app at `localhost:3000`. Predicted correctly that after Ctrl + C a refresh gives an error page ("site can't be reached"). Learned that Node needs a restart after every edit. | S14 |
| S20 | HTTP: request and response, methods, status codes | 4 | 🔧 | 2026-09-30 | 2026-09-30 | §3 trace: predicted 4 requests on page load and got 4 (`/`, `style.css`, `app.js`, `favicon.ico`). Said correctly that Log sends no request because of `preventDefault`. The favicon 404 and the DevTools request were told to me. §4 trace (2026-10-01): filled in DELETE → 204, then GET → `res.json` correctly. | S12 |
| S21 | Routes and URLs | 4 | 🔧 | 2026-09-30 | 2026-09-30 | 4.1: wrote `res.json(climbs)` in `GET /api/climbs`. 4.2: `climbs.push(req.body)` in the POST route. 4.3: `req.body.id = nextId++` ✅, but `splice(climbs.indexOf(1), 1)` instead of `splice(index, 1)` (-1, so it would cut the LAST climb). `:id` URL blanks and `req.params` were told. 2026-10-01: tried `climbs.findIndex(1)` and `climbs.index(index)` before `splice(index, 1)`. I didn't see that `index` was already computed two lines up, a plain variable to use bare. §4 trace: said `req.params.id` is text ✅. | S20 |
| S22 | APIs (REST style) | 4 | 🔧 | 2026-09-30 | 2026-10-01 | 4.1: predicted "an error, since we didn't create any API" (the route *is* the API). Told: the menu of orders; GET reads, POST adds (201), DELETE removes (204, or 404 if missing). §4 trace (2026-10-01): all 9 blanks of the ✕ round trips right (route method, text param, index, splice, 204, loadClimbs, GET, json, renderList). | S20, S21, L17 |
| S23 | `fetch` (the page calling the server) | 4 | 🔧 | 2026-09-30 | 2026-09-30 | 4.2: wrote the POST `body` line and replaced push + redraw with `loadClimbs()`; a refresh kept the climb. 4.3: wrote `` `/api/climbs/body.id` `` (no `${}`, and `body` instead of `climb`), so the server gets literal text and replies 404. The old splice lines hid it. 2026-10-01: predicted all 3 outcomes of that bug right (log line, disappears, comes back on refresh). Removed the local splice and called `loadClimbs()` myself. | S22, L16 |
| S24 | Middleware (`express.json`, `express.static`) | 3 | 🔧 | 2026-09-30 | 2026-09-30 | 3.3: filled in `express.static("public/")` and the logger (`console.log` of `req.method` + `req.url`, then `next()`) myself. First try was `res.use("GET /style.css")`: unsure what the TODO wanted, mixing up printing with the reply object. Said "now I understand it" after the fix. | S14, S20 |
| S25 | Database tables, rows, columns | 5 | 👋 | 2026-09-26 | 2026-09-26 | Decision 4: my climb-record table = a database table. It was explained to me but not checked. | L8 |
| S26 | Why the database runs as a separate service (Postgres vs SQLite) | Plan | 👋 | 2026-09-26 | 2026-09-26 | My first answer read the list back. After a nudge: "free hosts whipe the servers so data on climbs would be lost." | S11, S25 |
| S27 | SQL basics (`SELECT`, `INSERT`, `DELETE`, `WHERE`) | 5 | 🌱 | — | — | One example query was shown in Decision 4. | S25 |
| S28 | Schema, primary keys, column types | 5 | 🌱 | — | — | — | S25, L2 |
| S29 | Connecting to the database (driver, connection string) | 5 | 🌱 | — | — | — | S14, S25 |
| S30 | Parameterized queries (and why: SQL injection) | 5 | 🌱 | — | — | — | S27 |
| S31 | Sessions = climbs grouped by day | 6 | 🌱 | — | — | — | L13, S27 |
| S32 | `file://` vs `http://` (opening a file vs being served by a server) | 3 | 👋 | 2026-09-26 | 2026-09-26 | Session 5: saw the "'file:' URLs are treated as unique security origins" warning; it was explained as noise that goes away in §3. 2026-09-29: asked who answered the §1 `?grade=6b` request, I said "app.js" (a gap). Told: with `file://`, nobody answers; the browser rereads the file from disk. | S19, S20 |
| S35 | The host (runtime): browser vs Node give the same JS different extras | 3 | 👋 | 2026-09-29 | 2026-09-29 | 3.1: predicted `document.title` would work in Node and that the lines after it would run. Both wrong (a crash stops everything). My why: "app.js runs on js, hello.js through node", which is half right (both are JS). Told: the host provides `document`, like Unity provides `transform`. §3 trace (2026-09-30): said the climbs are "stored on app.js and lost when the server stops" ⚠️. Told: the server only *hands over* `app.js`, and the array lives in the tab. I proved it: a refresh with the server still running wiped them. | S5, S14, S7 |
| S36 | Serve only `public/` (never the whole project folder) | 3 | 👋 | 2026-09-30 | 2026-09-30 | 3.3: my prediction was "the server will just ruin" (a gap). Told: serving everything would let anyone download `server.js`, and in §5 the `.env` password. I moved the three app files into `public/` myself. | S24, E12 |
| S33 | A form's default submit (reloads the page and adds `?name=value` to the URL) | 1 | 🔧 | 2026-09-27 | 2026-09-27 | Session 6: predicted "nothing" on tapping Log and saw a reload (a gap). Then correctly predicted `?grade=6b` in the URL. 2.1: JS now stops the default with `event.preventDefault()`. | S2, S20 |
| S34 | Labels and focus (`for` → `id`, or input nested inside the label; tap targets, screen readers) | 1 | 🔧 | 2026-09-27 | 2026-09-27 | Session 6: proved the focus by tapping "Grade" and pressing ↓. In 1.3, correctly predicted that tapping the word "Sent" ticks the box, and used both wiring styles. I haven't explained *focus* in my own words yet. | S2 |

## E: Engineering practice

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| E1 | Git repo and commits (snapshots) | all | 👋 | 2026-09-25 | 2026-09-26 | Session 2: first commit. Session 4: approved a commit Claude made. | — |
| E2 | Remotes and push (GitHub, `origin`) | all | 🔧 | 2026-09-25 | 2026-09-26 | Session 3: pushed to GitHub (and fixed a `pusj` typo). Session 4: ran `git push` myself. | E1 |
| E3 | Good commit messages | all | 🌱 | — | — | — | E1 |
| E4 | `.gitignore` (what stays out of the repo) | 3 | 🔧 | 2026-09-30 | 2026-09-30 | 3.2: wrote it myself (`node_modules/`, `debug.log`, `.vscode/`). Silent bug: `debug.log/` with a trailing slash only matches a folder, so the file still showed up in `git status`. | E1 |
| E5 | Reading the exact command and its output | all | 👋 | 2026-09-25 | 2026-09-25 | Session 3: a `pusj` typo silently did nothing. | — |
| E6 | Debugging method: check the input before "fixing" | all | 🔧 | 2026-09-25 | 2026-09-27 | Session 3: the repo name really did end in a dot. Session 6: tested my own "the label submits" claim against evidence (the URL, the selected grade) instead of trusting it, and dropped it. | E5 |
| E7 | Browser DevTools (Console, Elements, Network, phone view) | 1 | 🔧 | 2026-09-26 | 2026-09-26 | Session 5: opened device mode and the Console with help, and spotted the red error. | S7 |
| E8 | Reading error messages and stack traces | 7 | 🔧 | 2026-09-26 | 2026-09-26 | Session 5: decoded `ERR_FILE_NOT_FOUND` myself: "it didnt load the file because it didn't find it due to a typo". Session 6: pasted `Cannot read properties of null` but blamed "the function"; learned to read it right to left (the null thing → `addBtn`). 3.3 (2026-09-30): `res.use is not a function` sent me into `node_modules/send/index.js`. Told: read the top line (the real problem), not the files the crash passed through. | L15 |
| E9 | Automated tests and a test runner | 7 | 🌱 | — | — | — | L5, S22 |
| E10 | Input validation (rejecting bad data) | 6 | 🌱 | — | — | — | L4, S22 |
| E11 | Handling failure (server unreachable) | 6 | 🌱 | — | — | — | L15, S23 |
| E12 | Environment variables and secrets | 5 | 🌱 | — | — | — | S29, E4 |
| E13 | Deployment (push-to-deploy hosting) | 8 | 👋 | 2026-09-26 | 2026-09-26 | Decision 5: picked Render + Neon. I haven't deployed anything yet. | E2, S19 |
| E14 | Free-tier tradeoffs and cold starts | 8 | 👋 | 2026-09-26 | 2026-09-26 | I explained the sleep after 15 minutes and the 30–60 s wake-up, but mixed up Neon and Render and left out *why* we accept it (it's free). | E13 |
| E15 | Reading production logs | 8 | 🌱 | — | — | — | E8, E13 |
| E16 | Tradeoffs and choosing boring tech | Plan | 👋 | 2026-09-26 | 2026-09-26 | Session 4: my best answers tied each choice to *this* project, not to generic pros. | — |

## A: AI-era practice

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| A1 | Scoping: MVP vs parking lot | Plan | 🔧 | 2026-09-25 | 2026-09-25 | Session 2: defined the MVP and parking lot with help. | — |
| A2 | Writing a good plan (decisions, then sections with visible deliverables) | Plan | 👋 | 2026-09-26 | 2026-09-26 | Session 4: I made each decision, and Claude wrote `plan.md`. | A1, E16 |
| A3 | Explaining in my own words (not repeating) | all | 👋 | 2026-09-25 | 2026-09-26 | Session 3: set as a goal. Session 4: my first Postgres answer read the list back; the second try was my own. | — |
| A4 | Agent memory files (`project.md`, `plan.md`, this graph) | all | 👋 | 2026-09-25 | 2026-09-26 | Session 2: made `project.md` so context survives between sessions. Session 4: asked for this graph and the file map. | — |
| A5 | Reviewing a diff (`git diff`: what changed and why) | all | 🌱 | — | — | All commits so far were written by Claude and not read line by line. | E1 |
| A6 | Verifying AI output (run it, test it, don't just trust it) | all | 👋 | 2026-09-28 | 2026-09-28 | Session 6 (1.4): Copilot autofill slipped duplicate `id="attempts"` into my radios, and Claude caught it, not me. I turned Copilot off myself because I "wasn't coding". Next step: catch one myself. | A5, E9 |
| A7 | Giving an agent good context (prompts) | all | 🌱 | — | — | My session prompts are already detailed; it just hasn't been taught. | A4 |
| A8 | No mystery boxes (every file explained; see `file-map.md`) | all | 👋 | 2026-09-26 | 2026-09-26 | Session 4: I asked for `file-map.md` so nothing in the repo is unexplained. | A4 |
| A9 | Agent permissions (what Claude may do without asking) | — | 🌱 | — | — | `.claude/settings.local.json` lets Claude run git without asking. | A4 |

---

## Changelog

- **2026-09-26:** Created with 73 concepts. Anything walked through and checked while planning (sessions 1–4) starts as 👋,
  and two concepts I've actually used start as 🔧 (E2 push, A1 scoping). Nothing is ✅ yet, because no quizzes have happened.
- **2026-09-26 (session 5, task 1.1):** S6, E7 and E8 → 🔧. Added S32 (👋). S5 was reviewed. S6 isn't ✅ yet because
  the `app.js` typo prediction is unfinished.
- **2026-09-27 (session 6, task 1.2):** S2 and E6 → 🔧. L14 → 👋. Added S33 (🔧) and S34 (👋). Reviewed S6, S7 and E8.
  Gaps found: the form reload (I predicted "nothing"), blaming "the function" for a `null` error, and my first label comment.
- **2026-09-27 (session 6, task 1.3):** S1, S7 and S34 → 🔧. Reviewed S2. Gap: merging `<label>` and `<input>` into one tag.
  I skipped the URL test as redundant (fair). The checkbox quirk (`on` / missing) was told to me, not tested.
- **2026-09-28 (session 6, task 1.4):** S9 and A6 → 👋. Reviewed S1, S2 and S34 (radio groups, `<fieldset>`/`<legend>`).
  Gaps: a dangling `for="effort"` pointing at no `id`, and duplicate `id="attempts"` from Copilot autofill. Both were silent failures.
- **2026-09-28 (Section 1 trace a tap):** List: correct ("not any type of variable… fixed plain text used as an example").
  Data: "doesn't go nowhere". I forgot it's sent in the URL and then ignored after the reload (S33 slip). Next: "save it up
  using js" repeats the S10/S11 gap.
- **2026-09-28 (task 2.1):** L2, L8 and S8 → 🔧. L3 and L6 → 👋. Reviewed L14 and S33. Gap: "HTML values are text" (`'3'`, not `3`).
  Prediction 4 (no `preventDefault`, with Preserve log) was never reported back.
- **2026-09-28 (task 2.2, code done, explanation open):** L7, L12 and S9 → 🔧. L4, L5 and L9 → 👋. Reviewed L1.
  I got stuck on the template-literal *syntax* ("I know what I'd need to do, I just don't know the exact code"). One example was enough.
  Answers were *what*, not *why* ("const lets push", "refresh wipes them"). The why for the refresh is the open S10/S11 question.
- **2026-09-28 (2.2 closed, 2.3 started):** S10 → 🔧. Reviewed S11. Gap: I said the climbs live "in renderList", mixing up the painter and the data.
  I pushed back on re-explaining in a comment ("don't make me repeat myself"), which was fair, so I moved on. 2.3: I wrote `createElement("button")`
  and the ✕ text myself. The splice + redraw and predictions A/B are still open.
- **2026-09-29 (2.3 done, 2.4 started):** predictions A and B correct. Bug: splice's second argument (how many to cut) set to `climbs.length`, and hidden by `li.remove()`.
  Found it by testing (I said D was missing; it was C). Set `className` from JS on my own. 2.4 CSS has several invalid properties; see the queue.
- **2026-09-29 (2.4 CSS):** I asked Claude to fix the CSS itself ("it's just CSS"). No upgrades from that. Gap to remember: invalid CSS fails silently,
  so check the Styles pane for struck-through lines.
- **2026-09-29 (§2 trace a tap):** S3 → 👋 (specificity taught after "I don't know"). Added L18 closures (👋). Reviewed S8, S9 and S10.
  The ✕ trace was correct (delete from the data, then redraw). The Log trace skipped the listener and `preventDefault`, and blurred array vs list again (S10 ⚠️).
- **2026-09-29 (session 7, task 3.1):** S14 → 🔧. Added S35 (host, 👋). Reviewed S32 (a gap: "app.js answered the request"). Two wrong predictions in `hello.js`
  (`document` in Node, and code after a crash). The trace-reading tip (the top line is my file) was told to me. I ran npm ahead of the 3.2 predictions,
  so S15–S17 stay 🌱 until I answer them. `Sent` vs `sent` key casing was flagged as a silent bug.
- **2026-09-30 (session 8, 3.1–3.3, Section 3 done):** S15, S19, S20, S24 and E4 → 🔧. S16 and S17 → 👋. Added S36 (`public/`, 👋). Reviewed S14, S32, S35 and E8.
  Gaps: committing `node_modules` (said yes), why serving the whole folder is dangerous, `res.use` instead of `console.log`, and "climbs lost when the
  server stops" (S35 ⚠️, fixed by testing a refresh with the server running). Found `JSON.stringify` on my own. Correct: dozens of packages,
  4 requests on load, no request on Log, and Ctrl + C → "site can't be reached".
- **2026-09-30 (session 8, §4: 4.1 + 4.2 done, 4.3 half):** L1 → 🔧. L17, S21 and S23 → 🔧. L16 and S22 → 👋.
  Pacing: 3 TODOs + 3 predictions + a diagram at once was too much ("explain it to me, I'm not understanding"). One TODO at a time, each with a
  fill-in-the-blank, worked. 4.3 bugs: the `indexOf(1)` splice and the literal `body.id` URL (see the queue).
- **2026-10-01 (session 9, 4.3 done, Section 4 done):** L16 and S22 → 🔧. Reviewed L8, S10, S11, S20, S21 and S23.
  Correct: all 3 predictions for the hidden `body.id` bug (the screen lied, the refresh told the truth), the restart prediction, and all 9 trace blanks.
  Gaps: guessed names for the id (`getElementById`, `textContent`) and the splice (`findIndex(1)`, `climbs.index(index)`) before being given them:
  data object vs page element (L8 ⚠️), and using an already-computed variable bare. The restart "why" was half (S11).
  Then I found a regression myself by testing Log (all fields `undefined`): I had changed `JSON.stringify(climb)` to `climb.body`. Same L8 gap; fixed it after the explanation.
