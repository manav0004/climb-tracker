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

// GET the climbs from the server, then draw them
async function loadClimbs() {
  const response = await fetch("/api/climbs");
  climbs = await response.json();
  renderList();
}
loadClimbs();

// --- Draw the list from the array ---
function renderList() {
  todayList.innerHTML = "";
  for (const climb of climbs) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = `${climb.grade} - ${climb.sent ? "Sent" : "Not Sent"} - ${climb.colour} - ${climb.attempts} attempts - ${climb.effort} effort - ${climb.beta ? "Beta" : "No Beta"}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    deleteBtn.textContent = "✕";

    // ✕: DELETE this climb on the server, then reload
    deleteBtn.addEventListener("click", async () => {
      await fetch(`/api/climbs/${climb.id}`, { method: "DELETE" });
      loadClimbs();
    });

    li.appendChild(deleteBtn);
    todayList.appendChild(li);
  }
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
    effort: form.elements.effort.value,
    beta: form.elements.beta.checked,
  };

  await fetch("/api/climbs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(climb),
  });

  loadClimbs();
});
