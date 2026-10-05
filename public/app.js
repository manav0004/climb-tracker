// app.js: the page's behaviour (runs in the browser).

// --- Today's date ---
const todayEl = document.getElementById("today");

todayEl.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
});

// --- The climbs: the tab's copy of the server's list ---
let climbs = [];
const todayList = document.getElementById("today-list");
const pastSessions = document.getElementById("past-sessions");



// GET the climbs from the server, then draw them
async function loadClimbs() {
 
  const response = await fetch("/api/climbs");
  climbs = await response.json();
  
  
  
  renderList();
  renderPast();
  
}

loadClimbs();

// Group climbs by day
function groupByDay(){

  const groups = {};

  const today = new Date().toDateString();
  
  for (const climb of climbs){
    
    const date = new Date(climb.created_at).toDateString();
    if (date === today) continue;
    if (groups[date]===undefined){
        groups[date] = [];
    }
    groups[date].push(climb);
   
  }

  
  return groups;
  
}
// --- Draw the list from the array ---
function renderList() {
  todayList.innerHTML = "";
  const today = new Date().toDateString();

  for (const climb of climbs) {
      const day = new Date(climb.created_at).toDateString();
      if (day !== today){
        continue
      }
      const liClimb = createClimbItem(climb);
      todayList.appendChild(liClimb);
  }
}

function renderPast(){
  const grouped = groupByDay();
  
  pastSessions.innerHTML="";
  
  for(const[date, climbsArray] of Object.entries(grouped)){
    
    const div = document.createElement("div");
    div.className = "card"
    
    
    const title = document.createElement("h3")
    
    title.textContent = (date);

    pastSessions.appendChild(div);
    div.appendChild(title);
    
    
    for (const climb of climbsArray){
      const liClimb = createClimbItem(climb);
      div.appendChild(liClimb);
    }
  
  }

}


// Build one climb's <li> with its ✕ button; the caller decides where it goes
function createClimbItem(climb){
  const li = document.createElement("li")
  li.className = "list-item";
  li.textContent= `${climb.grade} - ${climb.sent ? "Sent" : "Not Sent"} - ${climb.colour} - ${climb.attempts} attempts - ${climb.effort} effort - ${climb.beta ? "Beta" : "No Beta"}`;

  const deleteBtn = document.createElement("button")
  deleteBtn.className = "delete-button"
  deleteBtn.textContent = "✕"

  deleteBtn.addEventListener("click",async () =>{
    await fetch(`/api/climbs/${climb.id}`, {method: "DELETE"});
    loadClimbs()
  })

  li.appendChild(deleteBtn);
  return li;
}


// --- Log: build a climb from the form, POST it, then reload ---
const form = document.getElementById("log-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop the form's built-in reload

  const climb = {
    grade: form.elements.grade.value,
    sent: form.elements.sent.checked,
    colour: form.elements.colour.value,
    attempts: Number(form.elements.attempts.value),
    effort: Number(form.elements.effort.value),
    beta: form.elements.beta.checked,
  };

  await fetch("/api/climbs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(climb),
  });

  loadClimbs();
});
