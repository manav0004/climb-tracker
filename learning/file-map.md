# File Map

> Every file and folder in the repo, one line each: what it is and why it exists.
> **Nothing in my repo should ever be a mystery box.** New files get a line the moment they appear.

**Marks**
- **known**: I've explained it in my own words (date + the gist of what I said).
- **parked**: an honest one-liner for now, with the deep dive scheduled (a plan section or a session).
- **generated**: made by a machine. Never edit it by hand.

## `learning/`: my learning records (not app code)

| Path | Mark | What it is and why it exists | Deep dive |
|---|---|---|---|
| `learning/` | parked | A folder for notes about *me learning*, kept separate from the app's code. | Next session opener |
| `learning/project.md` | parked | The project record: who I am, the idea, the trunk, the MVP, the parking lot, the progress log. Read first every session. | Next session opener |
| `learning/plan.md` | parked | The 5 locked design decisions and the 8-section build plan. | Next session opener |
| `learning/knowledge-graph.md` | parked | The map of what I actually know. It decides what I get quizzed on. | Next session opener |
| `learning/file-map.md` | parked | This file: a line for every file, so nothing is a mystery. | Next session opener |

## The app

| Path | Mark | What it is and why it exists | Deep dive |
|---|---|---|---|
| `public/` | parked | The only folder the server hands to browsers (moved here 2026-09-30). Everything outside it (`server.js`, `package.json`, later `.env`) stays private. | §3 (3.3) |
| `public/index.html` | parked | The page's structure. Right now: a title, today's date, and the log form (`id="log-form"`) with all six fields and a "Log" button, then a "Today's list" card (`id="today-list"`) with two made-up climbs. **I wrote** the grade and colour `<option>`s, the Attempts input, the intended-beta checkbox, the label comment (2026-09-27), and the effort radios in a `<fieldset>` plus the whole Today's list card (2026-09-28), plus the comments on the two "wire" lines (2026-09-26). The rest gets explained as I rebuild it in §1. | §1 |
| `public/style.css` | parked | How the page looks: mobile-first styling for the card and button. | §2 |
| `public/app.js` | parked | The page's behaviour (runs in the **browser**, not on the server). It shows today's date, and holds the data model (the `climbs` array, in memory only). On submit it builds a climb object from the six fields, pushes it into `climbs`, and `renderList()` redraws Today's list from the array. **I removed** the dead counter code (2026-09-27), and **wrote** four of the object's fields (with the `Number()` fix), the `<li>` template literal, and the push + redraw (2026-09-28). | §2 |
| `server.js` | parked | My Express server (runs in **Node**): prints every request, serves `public/`, and listens on port 3000. Start it with `node server.js`, stop it with Ctrl + C, and restart it after every edit. **I wrote** the request logger and the `express.static` line (2026-09-30). | §3 (3.3), grows in §4 |
| `hello.js` | parked | Practice file for 3.1: my first JS run by **Node** in the terminal, not by the browser. It proved that `document` doesn't exist outside the browser. I wrote it (2026-09-29). Not part of the app; can be deleted after §3. | §3 (3.1) |
| `package.json` | parked | The project's ID card, made by `npm init -y` (2026-09-29): name, scripts, and `dependencies` (Express). I edit this one. | §3 (3.2) |

## Tools and machine-made files

| Path | Mark | What it is and why it exists | Deep dive |
|---|---|---|---|
| `.git/` | generated | Git's database: every commit (snapshot) and the link to GitHub. Never edit it by hand; use `git` commands. | — |
| `.claude/` | parked | Claude Code's settings for this project. | Knowledge graph A9 |
| `.claude/settings.local.json` | parked | Lets Claude run `git` commands without asking me each time. It's personal, so my global Git ignore file keeps it out of the repo. | Knowledge graph A9 |
| `package-lock.json` | generated | Made by `npm install` (2026-09-29): the exact version of every package in `node_modules`, so every install is identical. Committed, never hand-edited. | §3 (3.2) |
| `node_modules/` | generated | The downloaded code: Express plus everything Express needs (65 folders). Rebuilt any time with `npm install`, so **never committed** (it goes in `.gitignore` in 3.2). | §3 (3.2) |
| `debug.log` | generated | A one-line crash note written by a Chromium-based program (a browser or VS Code), not by my app. Safe to delete. Ignored by Git. | §3 (`.gitignore`) |
| `.gitignore` | parked | **I wrote it** (2026-09-30): the list of things Git pretends don't exist: `node_modules/` (rebuilt by `npm install`), `debug.log`, `.vscode/`. A trailing `/` means "folder only". | §3 (3.2) |
| `.vscode/` | generated | VS Code's editor settings. `launch.json` appeared when I pressed Run/F5 (it tries to run `app.js` in Node, which crashes). Ignored by Git. | — |

## Coming soon (so they're not a surprise)

| Path | Will be | Arrives in |
|---|---|---|
| `.env` | Secrets (such as the database password). **Never committed.** | §5 |
| test files | Automated tests | §7 |

## Outside the repo

- **Claude's memory folder** (`~/.claude/projects/…/memory/`): short notes Claude reads at the start of each session.
  They point back to `learning/project.md`. They aren't part of the app and aren't on GitHub.
