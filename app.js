

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

// 3. The data model: every climb logged this session. It lives in memory only.
const climbs = [];
const todayList = document.getElementById("today-list");

// Redraw the whole list from the array (the array is the truth, the list just shows it)
function renderList() {
  todayList.innerHTML = ""; // wipe the old <li>s
  for (const climb of climbs) {
    const li = document.createElement("li"); // a new, empty <li>, not on the page yet
    li.className = "list-item";

    li.textContent = `${climb.grade} - ${climb.sent ? "Sent" : "Not Sent"} - ${climb.colour} - ${climb.attempts} attempts - ${climb.effort} effort - ${climb.beta ? "Beta" : "No Beta"}`;
    //textContent.className="list-text";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className="delete-button";
    
    deleteBtn.textContent = "✕";

    deleteBtn.addEventListener("click", () => {
      
      climbs.splice(climbs.indexOf(climb), 1)
      
      renderList(climbs)
    });

    li.appendChild(deleteBtn); // the button goes inside the <li>
    todayList.appendChild(li); // add the new <li> to the <ul>
   
    
  }
}

// 4. Catch the form's submit, instead of letting the browser reload the page
const form = document.getElementById("log-form");

form.addEventListener("submit", (event) => {
 event.preventDefault(); // stop the built-in "deliver and reload"

  // One climb, as an object. Each field is read by the name="" I gave it in the HTML
  const climb = {
    grade: form.elements.grade.value,
    sent: form.elements.sent.checked,
    colour: form.elements.colour.value,
    attempts: Number(form.elements.attempts.value),
    effort: form.elements.effort.value,
    beta: form.elements.beta.checked,
  };

  
  climbs.push(climb);
  renderList();
  
});


