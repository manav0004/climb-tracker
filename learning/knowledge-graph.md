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

1. **S10 + S11: why both a data model *and* persistence?** This is the known gap from session 3, and it matters more now that persistence
   is a database on another computer.
2. **S6: how do `index.html`, `style.css` and `app.js` find each other?** Section 1 needs it.
3. **S5: what does each of HTML, CSS and JS do, and what still works without JS?** This was corrected in session 4.

## 📊 Snapshot

73 concepts · 🌱 46 · 👋 25 · 🔧 2 · ✅ 0 (as of 2026-09-26)

---

## L: Low-level (the JavaScript language)

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| L1 | Variables (`let` vs `const`) | 2 | 👋 | 2026-09-25 | 2026-09-25 | The `app.js` comments explain `let count` as state and `const` for element references. I haven't explained them back yet. | — |
| L2 | Data types (string, number, boolean) | 2 | 🌱 | — | — | — | L1 |
| L3 | Operators and comparisons (`+`, `===`, `>`) | 2 | 🌱 | — | — | — | L2 |
| L4 | Conditionals (`if` / `else`) | 2 | 🌱 | — | — | — | L3 |
| L5 | Functions (parameters, `return`) | 2 | 🌱 | — | — | `app.js` has one (the click handler), but it was never explained as a function. | L1 |
| L6 | Callbacks and arrow functions (`() => {}`) | 2 | 🌱 | — | — | — | L5 |
| L7 | Arrays | 2 | 👋 | 2026-09-25 | 2026-09-25 | Session 3: I got the definition ("many climbs form an array"). Not in code yet. | L1 |
| L8 | Objects | 2 | 👋 | 2026-09-25 | 2026-09-25 | Session 3: I got the definition ("a climb is an object"). Not in code yet. | L1 |
| L9 | Loops (`for...of`) | 2 | 🌱 | — | — | — | L7 |
| L10 | Array methods (`filter`, `map`, `find`) | 6 | 🌱 | — | — | — | L6, L7 |
| L11 | Scope (where a variable can be seen) | 2 | 🌱 | — | — | — | L1, L5 |
| L12 | Template literals (`` `Grade ${g}` ``) | 2 | 🌱 | — | — | — | L2 |
| L13 | Dates (`Date`, comparing days) | 6 | 🌱 | — | — | `app.js` shows today's date, but it was never explained. | L8 |
| L14 | `null` / `undefined` (missing values) | 2 | 🌱 | — | — | — | L2 |
| L15 | Errors and `try` / `catch` | 6 | 🌱 | — | — | — | L5 |
| L16 | Async: promises and `async` / `await` | 4 | 🌱 | — | — | — | L6 |
| L17 | JSON (data as text) | 4 | 🌱 | — | — | Named in the session 3 trunk (with `localStorage`), never explained. | L7, L8 |

## S: Structural (how the pieces connect)

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| S1 | HTML elements and page structure | 1 | 🌱 | — | — | I've built HTML sites before (self-reported), but it hasn't been checked here. Could upgrade quickly. | — |
| S2 | Forms and inputs (select, checkbox, number) | 1 | 🌱 | — | — | — | S1 |
| S3 | CSS selectors, box model, layout | 2 | 🌱 | — | — | Prior experience (self-reported), not checked. | S1 |
| S4 | Mobile-first and the viewport tag | 2 | 👋 | 2026-09-25 | 2026-09-25 | Explained in an `index.html` comment. I haven't explained it back. | S3 |
| S5 | The three roles: HTML structure, CSS looks, JS behaviour | Plan | 👋 | 2026-09-25 | 2026-09-26 | Session 4: I said browsers "won't run if it is not on Java". Corrected: Java ≠ JS, and pages show without JS; JS adds *behaviour*. | — |
| S6 | Files talking to each other (`<link>`, `<script src>`, paths) | 1 | 👋 | 2026-09-25 | 2026-09-25 | An `index.html` comment explains why `<script>` goes at the end. I haven't explained it back. | S1 |
| S7 | The DOM (JS grabbing page elements) | 2 | 👋 | 2026-09-25 | 2026-09-25 | The `app.js` comments compare `getElementById` to Unity's `GetComponent`. | S1, L8 |
| S8 | Events and listeners | 2 | 👋 | 2026-09-25 | 2026-09-25 | The `app.js` comments compare `addEventListener` to `onClick.AddListener`. | S7, L6 |
| S9 | Drawing a list from data (data → HTML) | 2 | 🌱 | — | — | — | L7, L9, S7 |
| S10 | Data model (the shape of data in memory) | 2 | 👋 | 2026-09-25 | 2026-09-25 | Session 3: I got the definition, but not *why* we need both it and persistence. ⚠️ known gap | L7, L8 |
| S11 | Persistence (data that survives closing the app) | 5 | 👋 | 2026-09-25 | 2026-09-26 | Session 3: same gap as S10. Session 4: switched from `localStorage` to a database. | S10 |
| S12 | Frontend vs backend (client and server) | Plan | 👋 | 2026-09-26 | 2026-09-26 | I chose a backend for portfolio value, but skipped the gym-internet tradeoff when asked about it. | S5 |
| S13 | Framework vs plain JS | Plan | 👋 | 2026-09-26 | 2026-09-26 | I said: "framework is pre built so I wouldnt understand the exact mechanics of how JS really works." | S5 |
| S14 | Node.js and Express (what they are) | 3 | 👋 | 2026-09-26 | 2026-09-26 | Decision 3: I picked them, but I haven't said what Node *is* in my own words. | S12 |
| S15 | npm and dependencies (other people's code I install) | 3 | 🌱 | — | — | — | S14 |
| S16 | `package.json` (the project's ID card and dependency list) | 3 | 🌱 | — | — | — | S15 |
| S17 | `package-lock.json` and `node_modules` (generated) | 3 | 🌱 | — | — | — | S16 |
| S18 | Modules (`import` / `export` between JS files) | 3 | 🌱 | — | — | — | S6, L5 |
| S19 | A local server: `localhost` and ports | 3 | 🌱 | — | — | — | S14 |
| S20 | HTTP: request and response, methods, status codes | 4 | 🌱 | — | — | — | S12 |
| S21 | Routes and URLs | 4 | 🌱 | — | — | — | S20 |
| S22 | APIs (REST style) | 4 | 🌱 | — | — | — | S20, S21, L17 |
| S23 | `fetch` (the page calling the server) | 4 | 🌱 | — | — | — | S22, L16 |
| S24 | Middleware (`express.json`, `express.static`) | 3 | 🌱 | — | — | — | S14, S20 |
| S25 | Database tables, rows, columns | 5 | 👋 | 2026-09-26 | 2026-09-26 | Decision 4: my climb-record table = a database table. It was explained to me but not checked. | L8 |
| S26 | Why the database runs as a separate service (Postgres vs SQLite) | Plan | 👋 | 2026-09-26 | 2026-09-26 | My first answer read the list back. After a nudge: "free hosts whipe the servers so data on climbs would be lost." | S11, S25 |
| S27 | SQL basics (`SELECT`, `INSERT`, `DELETE`, `WHERE`) | 5 | 🌱 | — | — | One example query was shown in Decision 4. | S25 |
| S28 | Schema, primary keys, column types | 5 | 🌱 | — | — | — | S25, L2 |
| S29 | Connecting to the database (driver, connection string) | 5 | 🌱 | — | — | — | S14, S25 |
| S30 | Parameterized queries (and why: SQL injection) | 5 | 🌱 | — | — | — | S27 |
| S31 | Sessions = climbs grouped by day | 6 | 🌱 | — | — | — | L13, S27 |

## E: Engineering practice

| ID | Concept | § | Status | Introduced | Last reviewed | Evidence | Builds on |
|---|---|---|---|---|---|---|---|
| E1 | Git repo and commits (snapshots) | all | 👋 | 2026-09-25 | 2026-09-26 | Session 2: first commit. Session 4: approved a commit Claude made. | — |
| E2 | Remotes and push (GitHub, `origin`) | all | 🔧 | 2026-09-25 | 2026-09-26 | Session 3: pushed to GitHub (and fixed a `pusj` typo). Session 4: ran `git push` myself. | E1 |
| E3 | Good commit messages | all | 🌱 | — | — | — | E1 |
| E4 | `.gitignore` (what stays out of the repo) | 3 | 🌱 | — | — | `debug.log` is sitting untracked right now. | E1 |
| E5 | Reading the exact command and its output | all | 👋 | 2026-09-25 | 2026-09-25 | Session 3: a `pusj` typo silently did nothing. | — |
| E6 | Debugging method: check the input before "fixing" | all | 👋 | 2026-09-25 | 2026-09-25 | Session 3: the repo name really did end in a dot. | E5 |
| E7 | Browser DevTools (Console, Elements, Network, phone view) | 1 | 🌱 | — | — | — | S7 |
| E8 | Reading error messages and stack traces | 7 | 🌱 | — | — | — | L15 |
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
| A6 | Verifying AI output (run it, test it, don't just trust it) | all | 🌱 | — | — | — | A5, E9 |
| A7 | Giving an agent good context (prompts) | all | 🌱 | — | — | My session prompts are already detailed; it just hasn't been taught. | A4 |
| A8 | No mystery boxes (every file explained; see `file-map.md`) | all | 👋 | 2026-09-26 | 2026-09-26 | Session 4: I asked for `file-map.md` so nothing in the repo is unexplained. | A4 |
| A9 | Agent permissions (what Claude may do without asking) | — | 🌱 | — | — | `.claude/settings.local.json` lets Claude run git without asking. | A4 |

---

## Changelog

- **2026-09-26:** Created with 73 concepts. Anything walked through and checked while planning (sessions 1–4) starts as 👋,
  and two concepts I've actually used start as 🔧 (E2 push, A1 scoping). Nothing is ✅ yet, because no quizzes have happened.
