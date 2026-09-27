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
- [ ] **2.2 The array and the real list.** Each climb goes into a `climbs` array, and a function redraws the list from it,
  replacing the made-up `<li>`s. ✅ Logged climbs appear in the list, and a refresh wipes them (I explain why).
- [ ] **2.3 Delete a climb.** Each list item gets a delete button that removes that climb from the array and redraws.
  ✅ I can fix a mis-tap.
- [ ] **2.4 Mobile-first styling.** Stacked fields, big tap targets, and a readable list. ✅ The app is usable one-handed
  in phone view. That's the Section 2 deliverable.

### 3. My own server (Node + Express, locally)
Install Node and npm. A tiny Express server sends my HTML/CSS/JS to the browser.
**✅ Deliverable:** the same app at `http://localhost:3000`, served by *my* server, with each request
printed in the terminal.

### 4. The API: the browser talks to the server
Routes for listing, adding and deleting climbs (`GET` / `POST` / `DELETE /api/climbs`), with the climbs
kept in an array on the server. The frontend uses `fetch` instead of its own array.
**✅ Deliverable:** refreshing the page keeps my climbs, but restarting the server wipes them,
and I can explain the difference.

### 5. The database (PostgreSQL)
A `climbs` table in Postgres. The API reads and writes with SQL instead of the array.
Passwords and connection details stay out of the code (environment variables).
**✅ Deliverable:** climbs survive a server restart, and I can see them with a SQL query run by hand.

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
