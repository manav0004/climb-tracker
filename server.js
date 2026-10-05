// server.js: my Express server (runs in Node).
// Start: npm run dev   →  http://localhost:3000        Stop: Ctrl + C

const express = require("express");
const app = express();

// --- Database: the connection string comes from .env ---
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE_URL});


const port = process.env.PORT || 3000;


// --- Stations every request passes through ---
// Log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve only public/
app.use(express.static("public/"))

// Unpack JSON bodies into req.body
app.use(express.json());



// --- API routes ---
// List the climbs
//
app.get("/api/climbs", async (req, res) => {
  
  const result = await pool.query("SELECT * FROM climbs ORDER BY created_at DESC");
  res.json(result.rows);
});

// Add a climb
app.post("/api/climbs", async(req, res) => {
  
  const climb = req.body;
  
  if(climb.effort < 1 || climb.effort > 5 ){
    return res.status(400).json({error: "Effort must be 1-5" })
  }

  if(!Number.isInteger(climb.effort)) {
    return res.status(400).json({error:"Effort must be a Whole Number"})
  }

   
  const result = await pool.query("INSERT INTO climbs(grade, colour, sent, attempts, effort, beta) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",[climb.grade, climb.colour, climb.sent, climb.attempts, climb.effort, climb.beta]);
  
  res.status(201).json(result.rows[0]);
});


// Delete a climb by id
app.delete("/api/climbs/:id", async(req, res) => {
  const id = Number(req.params.id); // URL pieces are text
  const result = await pool.query("DELETE FROM climbs WHERE id = $1", [id])
  

  if (result.rowCount== 0) {
    return res.status(404).json({ error: "No climb with that id" });
  }

  
  res.status(204).end(); // 204 = Done, nothing to send back
});

// --- Start ---
app.listen(port, async () => {
  
  console.log(`http://localhost:${port} is connected`);
  // Connection check: count the rows in the table
  await pool.query("SELECT COUNT(*) FROM climbs");
  
});



