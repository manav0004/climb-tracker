# Climb Tracker — Project Record

> Every session starts by reading this file.

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

Plain HTML + CSS + JavaScript, no framework. Data is stored in the browser (`localStorage`).
Hosted free on GitHub Pages.

### A climb record

| Field | Type | Notes |
|---|---|---|
| Grade | choice | difficulty grade |
| Colour | choice | hold colour, only to help me remember the problem (not difficulty) |
| Sent? | yes/no | did I complete it |
| Attempts | number | how many tries |
| Effort | 1–5 | how hard it felt |
| Intended beta? | yes/no | did I climb it the intended way |

## ✅ In the MVP

The smallest version I'd actually open at the gym, live on my phone.

1. **Log a climb** with all six fields above.
2. **Today's list** of the climbs logged this session.
3. **Delete a climb** to fix mis-taps.
4. **Data is saved on the phone** (`localStorage`) and survives closing the app.
5. **Past sessions**: a plain list of earlier days and their climbs.
6. **Live on the internet** via GitHub Pages, used on my phone at the gym.

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
- **Backup/export**: `localStorage` data is lost if the browser data is cleared.
- **Sync across devices / accounts**

## Progress log

- **Session 1:** Picked the project. Created `index.html`, `style.css`, and `app.js`: a page
  with today's date and a "+ Log a problem" button that increases a counter
  (not saved yet).
- **Session 2:** Defined the MVP and the parking lot. Created this file.
