

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

// 3. Catch the form's submit, instead of letting the browser reload the page
const form = document.getElementById("log-form");

form.addEventListener("submit", (event) => {
 event.preventDefault(); // stop the built-in "deliver and reload"

  // One climb, as an object. Each field is read by the name="" I gave it in the HTML
  const climb = {
    grade: form.elements.grade.value,
    sent: form.elements.sent.checked,
    // TODO(you): colour, attempts and effort (they're read like grade)
    colour: form.elements.colour.value,
    attempts: Number(form.elements.attempts.value),
    effort: form.elements.effort.value,
  
    // TODO(you): beta (it's read like sent)
    beta: form.elements.beta.checked,
  };

  console.log(climb);
});


