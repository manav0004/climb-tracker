

// Think of this file like a Unity script: it grabs references to things
// on screen, then reacts to events (here, clicks instead of Update()).

// 1. Get references to elements (like GetComponent / public fields in Unity)
const todayEl = document.getElementById("today");


// 2. Show today's date
todayEl.textContent = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
});


