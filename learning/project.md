# Climb Tracker — Project Record

> Every session starts by reading this file, then `plan.md`, `knowledge-graph.md` (it decides the quiz)
> and `file-map.md`. After every lesson, update the knowledge graph and the file map.

## Who I am

- **Background:** Built websites with HTML and CSS only. **No JavaScript yet.** Some Python.
  Made a 2D platformer in Unity (C#) from tutorials; by the end I was writing simple
  features myself and debugging and fixing issues on my own.
- **Goal:** Learn to code for real by building something I'll actually use.
- **How I learn best:** Twice-exceptional: attention deficit plus high ability (IQ around 130).
  My strengths are language and connecting abstract concepts.
  - **I learn fast (session 6 felt too slow).** Pitch lessons at a fast learner: bigger steps, predictions
    batched into one set per step, no re-explaining HTML/CSS basics. Slow down only where I actually get something wrong.
  - Make each step end with something visible working.
  - Explain new ideas through analogies to what I know (Unity scripts, Python, HTML/CSS)
    and through *why* they work, not just *what* to type.
  - Avoid long lectures and repetitive drills (boredom), and avoid big unexplained jumps
    (frustration).

## The idea

A phone-friendly web app for logging my climbing (bouldering) sessions at the gym:
I record each problem I try, then look back at my sessions.

Plain HTML + CSS + JavaScript frontend, no framework. Node.js + Express backend with a PostgreSQL
database. Hosted free on Render (app) + Neon (database). Full decisions and the build plan: `learning/plan.md`.

### A climb record

| Field | Type | Notes |
|---|---|---|
| Grade | choice | difficulty grade |
| Colour | choice | hold colour, only to help me remember the problem (not difficulty) |
| Sent? | yes/no | did I complete it |
| Attempts | number | how many tries |
| Effort | 1–5 | how hard it felt |
| Intended beta? | yes/no | did I climb it the intended way |

## 🌳 The trunk: core pieces to learn and build

| # | Piece | What it is | Why this project needs it |
|---|---|---|---|
| 1 | **Structure (HTML)** | Says *what's on the page* (elements: buttons, inputs, lists) | The log form and the lists |
| 2 | **Presentation (CSS)** | Says *how it looks*; mobile-first | Used on a phone at the gym |
| 3 | **Behaviour (JavaScript)** | Reacts to events (taps) and changes the page, using functions | Anything interactive |
| 4 | **Data model** | The *shape* of the data: a climb is an object, many climbs form an array | Every feature reads or writes climbs |
| 5 | **Server + persistence** | An Express API that the page talks to, saving climbs in a PostgreSQL database | Past sessions, not losing data |
| 6 | **Source control (Git + GitHub)** | Snapshots of every version (commits), backed up online (remote) | Undo, history, backup; also enables deploying |
| 7 | **Deployment (Render + Neon)** | Puts the app on the internet at a public URL | The MVP must be live on my phone |
| 8 | **Testing and debugging** | Checking things work on purpose; finding and fixing bugs with DevTools | Everything breaks at some point |

**Flow:** tap "Log" → JavaScript (3) builds a climb in the shape of the data model (4) →
saves it (5) → updates the HTML (1), styled by CSS (2).
Code changes → committed with Git (6) → published by GitHub Pages (7). Testing (8) checks every step.

**Key idea (checked in session 3):** the data model is how data exists *while the app runs*,
in memory, which is wiped on close. Persistence is what *survives* closing.
Unity analogy: your variables vs `PlayerPrefs` or a save file.

## ✅ In the MVP

The smallest version I'd actually open at the gym, live on my phone.

1. **Log a climb** with all six fields above.
2. **Today's list** of the climbs logged this session.
3. **Delete a climb** to fix mis-taps.
4. **Data is saved in the database** on the server and survives closing the app.
5. **Past sessions**: a plain list of earlier days and their climbs.
6. **Live on the internet** via Render + Neon, used on my phone at the gym.

**MVP is done when:** I've used it for a real gym session on my phone, from a public URL.

## 🅿️ Parking lot (v2)

Written down so it stops nagging me. Not before the MVP ships.

- **Hardest send**: first thing after the MVP (small, about 10 lines).
- **Progress over time**: chart; needs weeks of data first.
- **Edit a climb**: in the MVP, delete it and log it again.
- **Warm-up recommendations**
- **Pre-workout log + "how should I train today" recommendations**: mostly a
  training-science problem (someone has to write the rules), and needs weeks of logged
  data. The pre-workout log is parked with it because only the recommendations use it.
- **Backup/export**: download my climbs as a file.
- **Offline mode**: only if the gym's signal turns out to be bad (the app needs internet).
- **Sync across devices / accounts**
- **Comp grades above 7c**: add them to the grade dropdown when I start climbing them (probably on a board).

## Progress log

- **Session 1:** Picked the project. Created `index.html`, `style.css`, and `app.js`: a page
  with today's date and a "+ Log a problem" button that increases a counter
  (not saved yet).
- **Session 2:** Defined the MVP and the parking lot. Created this file. First Git commit.
- **Session 3:** Mapped the 8-piece trunk. Understanding check: got the definitions of the data model and
  persistence; the gap was *why both* (memory vs surviving closing the app). To practise: explain
  ideas in my own words, not just repeat the definitions.
  Pushed to GitHub: https://github.com/manav0004/climb-tracker (remote `origin`, `main` tracks `origin/main`).
  Debugging lessons: a typo (`pusj`) makes a command silently do nothing, so reread the exact command
  and its output. Test the input before "fixing" it (the repo name really did end in a dot).
- **Session 4:** Locked the five design decisions: JavaScript, plain HTML/CSS/JS, Node + Express,
  PostgreSQL, Render + Neon. Changed from `localStorage` + GitHub Pages so I learn servers, APIs and
  databases (portfolio value). Wrote `learning/plan.md` (8 sections). Lessons: Java ≠ JavaScript.
  Reading back a list of reasons isn't the same as explaining; I got it when I tied Postgres to *this*
  project (free hosts wipe files, so SQLite would lose my climbs).
  Also created `knowledge-graph.md` (73 concepts: what I actually know, and what to quiz me on) and
  `file-map.md` (every file explained, so there are no mystery boxes).
- **Session 5:** Broke Section 1 into 6 tasks and finished 1.1. Viewed the page in DevTools phone view,
  broke the `<link>` on purpose, and predicted the result correctly (styling gone, counter still works).
  Read `ERR_FILE_NOT_FOUND` in the Console: unlike `pusj`, this error wasn't silent. Wrote my first
  own-words comments in `index.html`. Unfinished: the `app.js` typo prediction (it opens next session).
- **Session 6:** Finished 1.2. Replaced the counter with a `<form>` holding a grade dropdown (my gym's 8 grades,
  where the `+` is hidden on purpose) and a Log button. Surprise: tapping Log reloads the page and adds `?grade=6b` to the URL.
  That's a form's built-in "deliver it" behaviour. Decoded `Cannot read properties of null` as JS's
  `NullReferenceException`. The date still showing proved `app.js` loaded and crashed partway through. Tested my own
  wrong claim ("the label submits") with evidence and dropped it. Still to say in my own words: what *focus* is.
  Asked for a faster pace, so the rest of Section 1 was merged into two tasks. Finished 1.3: removed the dead counter JS myself
  (clean Console), then added colour, attempts (early), sent and intended beta. Picked a checkbox over a Yes/No dropdown
  (fewer taps). Bug: `<label input type="checkbox">` merged two tags, so no box appeared. Fixed it by nesting, like a child GameObject.
  Finished 1.4 (2026-09-28): effort as a radio group in a `<fieldset>`/`<legend>`, and a Today's list card with two made-up
  climbs (the design mock that JS will copy in §2). Two silent bugs: a `for` pointing at no `id`, and duplicate `id`s that
  **Copilot autofill** wrote. I turned Copilot off so I write my own code. Section 1 is built.
  **§1 trace a tap:** the list is fixed example text, not a variable ✅. The data is sent in the URL, but the reloaded page ignores it
  (I first said "nowhere"). Gap to fix in §2: JS alone keeps climbs in memory, and *saving* them is §4–5.
  Split §2 into 4 tasks and finished 2.1: JS catches the submit (`preventDefault`) and builds a climb object from all six fields.
  Surprise: `attempts` came out as `'3'`, because everything from HTML is text, and `"3" + 1` is `"31"`. Fixed it with `Number()`.
  An unpicked effort is `''`, so that's parked for §6 validation.
  2.2 (code done): a `climbs` array, and `renderList()` redraws the list from it. Got stuck on template-literal *syntax*,
  not the idea, and one example was enough to write my own. Stopped before explaining **why** a refresh wipes the climbs:
  that's the opener next time, and 2.2 gets checked off after it.
  **2.2 checked off (2026-09-28):** the climbs live in the `climbs` array in the tab's memory, not "in renderList" (that only draws them).
  A refresh destroys that memory, and `const climbs = []` makes a new, empty array. A server alone wouldn't save them (it wipes on restart);
  the database does. **2.3 started:** the ✕ button is created and labelled. Next time: the splice + redraw TODOs and predictions A/B (see the quiz queue).
  **2.3 done (2026-09-29):** predicted A (the middle ✕ deletes the middle climb) and B (splice without a redraw leaves the screen stale) correctly.
  Bug: `splice(i, climbs.length)` cut the climb *and everything after it*, and `li.remove()` hid that until the next redraw. Fixed it with `1` + `renderList()`.
  Lesson: update the screen by redrawing from the array, not by hand, so bugs show up straight away.
  **2.4 in progress:** the ✕ and the list rows have classes set from JS, and the CSS was started. Review notes are in the knowledge graph's quiz queue.
  **2.4 (2026-09-29):** my first CSS had several invalid properties that the browser silently skipped. I had to leave, so Claude rewrote `style.css`
  to the spec (stacked fields, 44px tap targets, 16px inputs, 5-box effort row, ✕ on the right) and checked it in a 390px-wide screenshot.
  Next session: try it one-handed in phone view, tick 2.4, then do the §2 trace a tap. That finishes Section 2.
  **§2 trace a tap (2026-09-29):** ✕ was right: delete it from the data, then redraw. How the button knows *which* climb: each ✕'s function
  remembers its own `climb` (a closure). My Log trace skipped the listener and `preventDefault`, and blurred "array" and "list" again
  (the array stores; the list only shows). Learned CSS specificity: an id beats any number of element names, whatever the order.
  **2.4 ticked (2026-09-29):** the one-handed phone test was fine. **Section 2 is done.** Next: §3, my own server (Node + Express).
- **Session 7 (2026-09-29): §3 started.** Node was already installed. Wrote `hello.js` and ran it with Node. Predicted `document.title`
  would print the title and that the lines after it would still run. Both were wrong: it crashed with `document is not defined`, and nothing after the crash ran.
  Lesson: both files are JS, but the **host** is different. The browser gives page JS `document`; Node gives it files and the network instead
  (like `transform` existing only because Unity provides it). My answer ("js vs node") was half right. With `file://`, *nobody* answers the form's request
  (I said `app.js`): the browser just rereads the file from disk. A server is what answers requests.
  Also ran `npm init -y` + `npm install express` ahead of the lesson (65 folders in `node_modules`), without making the 3.2 predictions first.
  `node_modules` and `debug.log` were left out of the commit; `.gitignore` is my job in 3.2.
  **Next:** print the count in `hello.js` (tick 3.1), then the 3.2 predictions in the quiz queue.
- **Session 8 (2026-09-30): Section 3 done.** Finished 3.1 (`.length`, lowercase `sent`; found `JSON.stringify` myself).
  3.2: "dozens" in `node_modules` ✅; I said commit it ❌. Commit the recipe (`package.json` + lock file), not the groceries (like Unity's `Library/`).
  Wrote `.gitignore` myself. Silent bug: `debug.log/` with a slash only matches a folder. VS Code's Run button made `.vscode/launch.json`
  (ignored now; run things from the terminal instead). 3.3: moved the app into `public/`, wrote the request logger and `express.static`.
  I didn't see why serving the whole folder is dangerous (anyone could read `server.js`, and later the password). Bug: `res.use(...)` instead of `console.log`;
  I learned to read the top line of an error, not the `node_modules` file it passed through. Node needs Ctrl + C and a restart after every edit.
  **§3 trace:** 4 requests on load ✅. Log sends nothing ✅. But I said the climbs are "stored on app.js and lost when the server stops" ❌:
  `app.js` is a recipe the server hands over; the array lives in the tab's memory. I proved it: a refresh with the server running still wipes them.
  **Next:** Section 4, the API (`fetch` + `POST /api/climbs`), so the server finally holds the climbs.
  **§4 started (same session):** split into 4.1–4.3. Added `npm run dev` (`node --watch`: restarts on save). 4.1 ✅: `res.json(climbs)`, and the API
  answers raw JSON in the tab. 4.2 ✅: Log POSTs the climb (`JSON.stringify`), the server pushes `req.body`, and the page redraws via `loadClimbs()`.
  A refresh keeps a logged climb (I'd predicted "nothing survives"). Planted `const` bug: "Assignment to constant variable" → `let`.
  I asked for a slower explanation when 3 TODOs came at once; one TODO at a time worked. 4.3 half done: ids (`req.body.id = nextId++` ✅).
  **Next (open bugs, not fixed yet):** TODO H `splice(index, 1)` and TODO I `` `/api/climbs/${climb.id}` `` + `loadClimbs()`. See the quiz queue.
- **Session 9 (2026-10-01): Section 4 done.** Predicted the hidden 4.3 bug exactly: `/api/climbs/body.id` printed in the log, the climb vanished
  (the old local `splice`), and came back on refresh (the server said 404). The screen lied; the server is the truth. Fixed TODO H (`splice(index, 1)`)
  and TODO I (`${climb.id}` + `loadClimbs()`), but only after guessing `getElementById` / `textContent` / `findIndex(1)`. Gap: a climb is a *data object*
  (read its fields by the names before the colons), not a page element. Deliverable: a restart leaves only the 2 made-up climbs (even the deleted
  6a Blue comes back). My why had only the server half; the refresh half (the tab is wiped, then re-asks the untouched server) was told to me.
  §4 trace of ✕: all 9 blanks right (DELETE → 204 → GET → json → renderList). I then caught a regression myself by testing Log: everything saved as `undefined`. Cause: while fixing TODO I, I had changed
  `JSON.stringify(climb)` to `JSON.stringify(climb.body)` (empty parcel → server saved `{}` + id). Same object-fields gap. Fixed it myself.
  **§5 planned (same session):** split into 5.1–5.4; Neon from the start (no local Postgres). 5.1 was shown but not started (I had to leave).
  **Next:** 5.1: Neon account, `CREATE TABLE climbs`, INSERT + SELECT by hand, with predictions (a)–(c) from the quiz queue.
- **Session 10 (2026-10-01): 5.1 done.** My `climbs` table lives on Neon, with the three types right (`TEXT`, `INTEGER`, `BOOLEAN`).
  `relation "climbs" already exists`: a relation is a table, and it stays once created (unlike the array). I predicted the INSERT would error without
  an `id` ❌: the database hands out the id (identity) and fills `created_at` (`DEFAULT now()`). I predicted a repeated INSERT errors ❌: 5 runs gave 5 rows.
  `'lots'` in `attempts` errors ✅ (`22P02`): the table refuses bad data, where the JS array stored `'3'`. Lesson: a syntax error (`42601`) means
  Postgres couldn't read the text and ran nothing, so it tests no prediction.
  **5.2 done (same session):** the server is connected to Neon. I installed `pg`, put the connection string in `.env` (ignored by Git), and wrote
  `process.env.DATABASE_URL`. On start it prints `The table has N rows`. Bugs: `SELECT COUNT (*) climbs` with no `FROM` silently counts 1, and `rowCount`
  is the number of rows in the *reply* (1 for a COUNT), so the number is read with `result.rows[0].count`. I asked for quieter code files (comments stripped)
  and for tasks that say what they're for; new syntax now gets shown as a full line before I'm asked to write it.
  **5.3 done (same session):** GET reads the database (`SELECT * ... ORDER BY id` → `res.json(result.rows)`), and Log saves with
  `INSERT ... VALUES ($1..$6) RETURNING *`. I extended a two-column example to all six fields myself. Bug: `RETURNING` without `*`. Lesson: when the page
  is quiet, the error is in the terminal. A climb logged in the app shows up in Neon's editor.
  **5.4 deliverable (same session):** ✕ runs `DELETE FROM climbs WHERE id = $1`, and after Ctrl + C and a restart **the climbs are still there**.
  My try put a JS variable inside the SQL (`id = climb.id`); the database only gets text, so values go through `$1` + `[id]`.
  **Section 5 done (same session).** I deleted the dead array and `nextId` and fixed the 404 check. The climbs live "in the database now": a separate
  program on Neon, so restarting my server doesn't touch them. **§5 trace (Log):** 5 of 9. To fix next time: POST = add = `INSERT` (201), GET = read =
  `SELECT`, and the page re-reads with `loadClimbs()`. MVP item 4 (data saved in the database) is true now.
  **Next:** Section 6: split it into tasks (today vs past sessions, input checks, a message when the server is unreachable).
