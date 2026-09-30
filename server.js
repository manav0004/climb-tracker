// server.js: my own web server (task 3.3).
// Start it:  npm run dev   (restarts by itself on every save)   then open http://localhost:3000
// Stop it:   Ctrl + C in the terminal

// Load Express from node_modules (like Python's `import`).
const express = require("express");

// Create the server app.
const app = express();

// 1. Log every request. `app.use` adds a "station" that EVERY request passes through, in order.
//    req = the request that came in, res = the reply I'll send back,
//    next() = "I'm done, pass it to the next station".
app.use((req, res, next) => {
  // TODO(you) A: print the request's method and URL, like "GET /style.css"
  //              (they're stored in req.method and req.url; a template literal works well here)
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Serve the files in one folder, but ONLY that folder.
// TODO(you) B: app.use(express.static("___"));   <- fill in the folder name
app.use(express.static("public/"))

// Unpack JSON bodies into req.body (another station every request passes through).
app.use(express.json());

// 3. The climbs, now kept in the SERVER's memory (not the tab's). Two made-up ones to start (task 4.1).
const climbs = [
  { id: 1, grade: "6a", sent: true, colour: "Blue", attempts: 2, effort: "3", beta: true },
  { id: 2, grade: "6b", sent: false, colour: "Red", attempts: 5, effort: "5", beta: false },
];
let nextId = 3; // the next free id number, like a ticket dispenser at the deli counter

// 4. API routes. A route = "when a request with THIS method and THIS URL arrives, run this function".
//    Like the logger above, but it only runs for one exact order, and it ends by replying.
app.get("/api/climbs", (req, res) => {
  // TODO(you) C: reply with the climbs array.
  //   res.json(something) turns it into JSON text (JSON.stringify, which you found yourself) and sends it back.
  res.json(climbs);
});

// Add a climb (task 4.2). The browser sends the climb as JSON text in the request's BODY
// (the parcel inside the order). express.json() below unpacks that text back into an object: req.body.
app.post("/api/climbs", (req, res) => {
  // TODO(you) D: put the new climb (req.body) into the server's climbs array
  //              (the same one-liner you wrote in app.js in 2.2)
  // TODO(you) G: before saving, give the climb a ticket number:
  //              set req.body.id to nextId, then move nextId up by one (so no two climbs share an id)
  req.body.id = nextId++;

  climbs.push(req.body);

  res.status(201).json(req.body); // 201 = "Created". Reply with what was saved.
});

// Delete a climb (task 4.3). `:id` is a blank in the URL: DELETE /api/climbs/7 → req.params.id is "7".
app.delete("/api/climbs/:id", (req, res) => {
  const id = Number(req.params.id); // URL pieces are text, like HTML values ("7", not 7). Your 2.1 lesson.
  const index = climbs.findIndex((climb) => climb.id === id); // position of the climb with that id, or -1 if none

  if (index === -1) {
    return res.status(404).json({ error: "No climb with that id" }); // 404 = "Not found"
  }

  // TODO(you) H: cut that one climb out of the server's array (you did this in 2.3)
  climbs.splice(climbs.indexOf(1),1)

  res.status(204).end(); // 204 = "Done, nothing to send back"
});

// 5. Start listening on port 3000 (the "door number" on this computer).
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
