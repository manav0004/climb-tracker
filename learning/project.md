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
  - Keep steps short, and make each one end with something visible working.
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
