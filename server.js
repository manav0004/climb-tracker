// server.js: my own web server (task 3.3).
// Start it:  node server.js   then open http://localhost:3000
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

// 3. Start listening on port 3000 (the "door number" on this computer).
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
