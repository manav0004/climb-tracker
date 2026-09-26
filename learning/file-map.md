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
| `index.html` | parked | The page's structure. Right now: a title, today's date, and a "+ Log a problem" button with a counter. | §1 |
| `style.css` | parked | How the page looks: mobile-first styling for the card and button. | §2 |
| `app.js` | parked | The page's behaviour. It shows today's date and adds 1 to the counter on each tap (not saved). | §2 |

## Tools and machine-made files

| Path | Mark | What it is and why it exists | Deep dive |
|---|---|---|---|
| `.git/` | generated | Git's database: every commit (snapshot) and the link to GitHub. Never edit it by hand; use `git` commands. | — |
| `.claude/` | parked | Claude Code's settings for this project. | Knowledge graph A9 |
| `.claude/settings.local.json` | parked | Lets Claude run `git` commands without asking me each time. It's personal, so my global Git ignore file keeps it out of the repo. | Knowledge graph A9 |
| `debug.log` | generated | A one-line crash note written by a Chromium-based program (a browser or VS Code), not by my app. Safe to delete. It will go in `.gitignore`. | §3 (`.gitignore`) |

## Coming soon (so they're not a surprise)

| Path | Will be | Arrives in |
|---|---|---|
| `server.js` (or similar) | My Express server | §3 |
| `package.json` | The project's ID card: name, scripts, dependency list. I edit it. | §3 |
| `package-lock.json` | generated: the exact version of every dependency | §3 |
| `node_modules/` | generated: the downloaded dependencies. Never committed, never edited. | §3 |
| `.gitignore` | A list of files Git should ignore | §3 |
| `.env` | Secrets (such as the database password). **Never committed.** | §5 |
| test files | Automated tests | §7 |

## Outside the repo

- **Claude's memory folder** (`~/.claude/projects/…/memory/`): short notes Claude reads at the start of each session.
  They point back to `learning/project.md`. They aren't part of the app and aren't on GitHub.
