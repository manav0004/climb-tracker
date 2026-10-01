# Climb Tracker: Build Plan

> Learning comes first, not speed. The finish line: I can explain how my app works
> end to end, from the tap on my phone to the row in the database and back.

## 🔒 Locked decisions (session 4)

Each one is the popular, "boring" choice with the biggest community, and I explained each in my own words before locking it.

| # | Decision | Choice | Why (in my words, cleaned up) | Alternatives considered |
|---|---|---|---|---|
| 1 | Language | **JavaScript** | Without JS the page can't *do* anything (react to taps, save climbs). Same language on the server too, so one language instead of two. | TypeScript (types catch bugs, but it's a second thing to learn; add later). Python for the server (I know some, but switching between two languages is confusing). |
| 2 | Frontend | **Plain HTML + CSS + JS, no framework** | A framework is pre-built and hides how JS really works. Learn the mechanics first. | React (most popular; easier after plain JS). Vue or Svelte (gentler, same drawback). |
| 3 | Backend | **Node.js + Express** | Real web apps have a server and an API; this is what jobs and portfolios expect. | No backend / `localStorage` (simpler, works offline, but skips servers entirely). Python + Flask (two languages). |
| 4 | Database | **PostgreSQL** (with SQL) | Free hosts wipe the server's files on redeploy, so a SQLite file would lose my climbs. Postgres keeps its data separately. | SQLite (easiest, but gets wiped on free hosts). MongoDB (objects instead of tables; SQL is the more universal skill). |
| 5 | Hosting | **Render** (app) + **Neon** (database), both free | Push to GitHub → Render redeploys. Neon's free Postgres doesn't expire. | Railway (no sleep, but ~$5/month). Fly.io (more setup, needs a card). |

**Accepted tradeoffs**
- **Needs internet at the gym.** Climbs are saved on the server, not on the phone. If the gym's signal is bad, "offline mode" goes in the parking lot.
- **Cold start.** Render's free server sleeps after about 15 minutes with no visitors, so the first open takes 30–60 seconds.
- Free-tier rules change often, so check the current limits in Section 8.

## 🧱 The sections

Each section ends with something I can **see working**. Each layer sits on top of the one before it.
At the end of every section I explain the **"trace a tap"** so far, out loud or in writing:
what happens, step by step, when I tap "Log". The trace gets longer every section.

### 1. The page: structure (HTML)
The log form with all six fields (grade, colour, sent, attempts, effort, intended beta)
and a "Today" list with a couple of made-up climbs typed into the HTML.
**✅ Deliverable:** the form and the list show up in the browser, in DevTools' phone view.

- [x] **1.1 See it on a "phone" and trace the wiring.** Open the page in DevTools' phone view, and find out
  how one HTML file pulls in the other two. ✅ The page in phone view, plus one wire broken and fixed on purpose.
- [x] **1.2 The first field: grade.** A `<form>` with a grade dropdown and a "Log" button, replacing the old counter.
  ✅ The dropdown opens in phone view.
- [x] **1.3 Clean up the counter, then colour and the two yes/no fields.** Remove the dead counter code from `app.js`,
  then add a colour dropdown and checkboxes for sent and intended beta.
  ✅ The Console is clean, and the colour dropdown and both checkboxes work in phone view.
- [x] **1.4 The numbers, then Today's list.** Add effort (1–5) (attempts is already done: I added it early in 1.3), then a "Today" list with two made-up
  climbs typed into the HTML. ✅ All six fields are usable, and the list shows. That's the Section 1 deliverable.

*(Session 6: the old tasks 1.3–1.6 were merged into two, because the smaller steps were too slow for how fast I learn.)*

### 2. Looks and behaviour: CSS + JavaScript in the browser
Mobile-first styling so it's usable with chalky thumbs. JS reads the form, builds a climb
**object**, adds it to an **array**, and redraws the list. Delete button included.
**✅ Deliverable:** I can log and delete climbs on the page. Refreshing wipes them, and I can explain *why*
(the data model lives in memory).

- [x] **2.1 Catch the submit and build a climb object.** JS stops the page reload, reads all six fields by `name`,
  and builds one climb object. ✅ Tapping Log doesn't reload, and the climb object shows up in the Console.
- [x] **2.2 The array and the real list.** Each climb goes into a `climbs` array, and a function redraws the list from it,
  replacing the made-up `<li>`s. ✅ Logged climbs appear in the list, and a refresh wipes them (I explain why).
  *(2026-09-28: done. Why a refresh wipes them: the tab's memory is thrown away, and `const climbs = []` makes a new, empty array.)*
- [x] **2.3 Delete a climb.** Each list item gets a delete button that removes that climb from the array and redraws.
  ✅ I can fix a mis-tap.
- [x] **2.4 Mobile-first styling.** Stacked fields, big tap targets, and a readable list. ✅ The app is usable one-handed
  in phone view. That's the Section 2 deliverable.
  *(2026-09-29: done. Tested one-handed in phone view: log 3, delete the middle one. §2 trace a tap done too. **Section 2 complete.**)*

### 3. My own server (Node + Express, locally)
Install Node and npm. A tiny Express server sends my HTML/CSS/JS to the browser.
**✅ Deliverable:** the same app at `http://localhost:3000`, served by *my* server, with each request
printed in the terminal.

- [x] **3.1 Install Node and run JS outside the browser.** Install Node (LTS), then write `hello.js` and run it with `node hello.js`.
  ✅ It prints in the terminal, and I can explain why `document` crashes there.
  *(2026-09-29: Node v24.19.0 was already installed. `hello.js` runs and crashed on `document` as expected.
  2026-09-30: done. It prints the count with `.length` and uses lowercase `sent`.)*
- [x] **3.2 npm, `package.json`, Express and `.gitignore`.** `npm init`, install Express, see what `node_modules` and the lock file are,
  and keep them (plus `debug.log`) out of Git. ✅ `git status` shows no `node_modules`.
  *(2026-09-30: done. I wrote `.gitignore` myself: `node_modules/`, `debug.log`, `.vscode/`. Bug: `debug.log/` with a trailing slash
  only matches a folder, so the file was silently not ignored.)*
- [x] **3.3 The server.** `server.js` serves my three files with `express.static`, prints every request, and listens on port 3000.
  ✅ The app works at `http://localhost:3000`, and the terminal shows each request. Then the §3 trace a tap.
  *(2026-09-30: done. The three app files moved into `public/`, so only they are served (never `server.js`, and never `.env` in §5).
  I wrote the logger and the `express.static` line. Bug: `res.use("GET /style.css")` crashed every request; printing is `console.log`.
  **§3 trace a tap:** predicted 4 requests on load, and got 4 (`/`, `style.css`, `app.js`, `favicon.ico`). Log adds no line
  (`preventDefault`, nothing is sent). A refresh wipes the climbs even with the server running. Ctrl + C → "site can't be reached".
  **Section 3 complete.**)*

### 4. The API: the browser talks to the server
Routes for listing, adding and deleting climbs (`GET` / `POST` / `DELETE /api/climbs`), with the climbs
kept in an array on the server. The frontend uses `fetch` instead of its own array.
**✅ Deliverable:** refreshing the page keeps my climbs, but restarting the server wipes them,
and I can explain the difference.

- [x] **4.1 The first route: `GET /api/climbs`.** The server keeps a `climbs` array and sends it back as JSON.
  ✅ Opening `localhost:3000/api/climbs` in the tab shows the climbs as JSON text.
  *(2026-09-30: done. I wrote `res.json(climbs)`. Predicted "an error, since we didn't create any API" and "no idea" for the log line.
  Added `npm run dev` (`node --watch`) so the server restarts itself on save.)*
- [x] **4.2 Save: `POST /api/climbs` + `fetch`.** Log sends the climb to the server (`express.json` reads it), and the page draws
  its list from `GET` instead of its own array. ✅ A refresh keeps my climbs, and the terminal shows `POST /api/climbs`.
  *(2026-09-30: done. I wrote the server's `push(req.body)`, `body: JSON.stringify(climb)` and the `loadClimbs()` call. The first explanation
  was too much at once; one TODO at a time worked. Planted bug: `const climbs` + reassignment → "Assignment to constant variable"; I read it as
  "gets nothing in return". Fixed with `let`. A refresh keeps a logged climb, but a deleted one came back (✕ only edited the tab's copy).)*
- [x] **4.3 Delete: `DELETE /api/climbs/:id`.** Each climb gets an `id` from the server, and ✕ asks the server to delete that id.
  ✅ The deliverable: refresh keeps them, Ctrl + C wipes them, and I explain why. Then the §4 trace a tap.
  *(2026-10-01: done. Predicted the hidden bug right: `/api/climbs/body.id` → 404, but the local splice made the climb vanish until a refresh.
  Fixed to `splice(index, 1)` and `${climb.id}` + `loadClimbs()` after several guesses. Deliverable: a restart left only the 2 made-up climbs;
  my why covered the server half. §4 trace: all 9 hops right. **Section 4 complete.**)*

### 5. The database (PostgreSQL)
A `climbs` table in Postgres. The API reads and writes with SQL instead of the array.
Passwords and connection details stay out of the code (environment variables).
**✅ Deliverable:** climbs survive a server restart, and I can see them with a SQL query run by hand.

*(2026-10-01: the database lives on **Neon** from the start, not a local Postgres install. Same free database as §8, nothing to install
on Windows, and Neon's SQL Editor in the browser is where I run queries by hand.)*

- [x] **5.1 The table, by hand.** Neon account + project, then in the SQL Editor: `CREATE TABLE climbs`, one `INSERT`, one `SELECT`.
  ✅ My climb shows up as a row in a query result, with an id the database gave it.
  *(2026-10-01: done. Types right (`TEXT`, `INTEGER`, `BOOLEAN`); my table uses `GENERATED ALWAYS AS IDENTITY` and `IF NOT EXISTS`.
  Predicted the INSERT would error without an `id` ❌ (the database fills in `id` and `created_at`), a repeat INSERT would error ❌ (5 runs = 5 rows),
  and `'lots'` in `attempts` would error ✅ (`22P02`). Two `42601` syntax errors on the way: Postgres couldn't read the text, so nothing ran.)*
- [x] **5.2 Connect the server.** `npm install pg`, the connection string in `.env` (git-ignored), loaded with `node --env-file`.
  ✅ On start, the server prints how many rows the table has.
  *(2026-10-01: done. I installed `pg`, made `.env`, added it to `.gitignore`, and wrote `process.env.DATABASE_URL` myself. My own first version worked
  (`SELECT *` + `result.rowCount`). The `COUNT` version printed 1: `FROM` was missing (so `climbs` became a column nickname) and `rowCount` counts the
  reply's rows. `result.rows[0].count` was given to me; I'd been asked to guess syntax nobody had shown me.)*
- [x] **5.3 GET and POST use SQL.** `SELECT` replaces `res.json(climbs)`, and `INSERT ... RETURNING` with `$1, $2...` placeholders replaces `push`.
  ✅ A climb logged in the app shows up in a query in Neon's editor.
  *(2026-10-01: done. GET was shown in full and I typed it in. For POST I saw a two-column example, then extended it to all six columns, slots and
  values myself, in matching order. Bug: `RETURNING` with no `*` (a syntax error, so nothing was saved and the page stayed quiet; the terminal had the error).)*
- [x] **5.4 DELETE uses SQL, and the array dies.** `DELETE ... WHERE id = $1`, then remove the `climbs` array and `nextId`.
  ✅ The deliverable: Ctrl + C, restart, and the climbs are still there. Then the §5 trace a tap.
  *(2026-10-01: the deliverable works: ✕ deletes the row, and the climbs survive a restart. My first try had `id = climb.id` inside the SQL, no comma
  before `[id]`, and `rowCount == -1`; the finished route was given to me. I then deleted the dead array and `nextId` and fixed the 404 check to `0`.
  Where the climbs live now: "in the database" ✅ (the why, a separate program on Neon that my restart doesn't touch, was told to me).
  **§5 trace a tap (Log):** 5 of 9. Right: reload, JSON, `req.body`, INSERT, the database fills in `id`. Missed: the request is a **POST**, the reply
  status is **201**, the page function that re-reads is **`loadClimbs()`**, and the GET route runs a **SELECT**. **Section 5 complete.**)*

### 6. The core features (the MVP, complete)
"Today" versus **past sessions** (earlier days and their climbs), checks on bad input,
and a clear message when the server can't be reached.
*(Noted in 2.1: `effort` is still a string, and it's `''` when none is picked. Make effort required, or give it a default, then
`Number()` it. Don't `Number('')` it blindly, because that silently becomes `0`.)*
**✅ Deliverable:** MVP features 1–5 all work on my laptop.

### 7. Tests and debugging
Automated tests for the API, plus deliberate bug hunting with DevTools and the server logs.
**✅ Deliverable:** one command runs the tests and they pass. When I break something on purpose, they fail
and point to the problem.

### 8. Live on the internet (Render + Neon)
Database on Neon, app on Render, connected to GitHub so every push redeploys.
**✅ Deliverable:** a public URL on my phone. **MVP done** = one real gym session logged with it.

## 🎯 The final exam

After Section 8, explain without notes the full trip: tap "Log" → JS builds a climb object →
`fetch` sends an HTTP request → Express route → SQL `INSERT` into Postgres → response back →
JS redraws the list. Then the other direction: opening the app and seeing past sessions.
