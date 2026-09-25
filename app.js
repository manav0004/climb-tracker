// Think of this file like a Unity script: it grabs references to things
// on screen, then reacts to events (here, clicks instead of Update()).

// 1. Get references to elements (like GetComponent / public fields in Unity)
const todayEl = document.getElementById("today");
const countEl = document.getElementById("count");
const addBtn = document.getElementById("add-btn");

// 2. Show today's date
todayEl.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
});

// 3. State: a variable holding how many problems we've logged
let count = 0;

// 4. React to a click (like button.onClick.AddListener in Unity)
addBtn.addEventListener("click", () => {
  count = count + 1;
  countEl.textContent = count;
});
