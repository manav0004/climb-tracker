

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

// 3. The data model. The SERVER now holds the real list; this is the tab's copy of it, for drawing.
let climbs = [];
const todayList = document.getElementById("today-list");

// Ask the server for its climbs, then draw them (task 4.2).
// `async` + `await` = Unity's coroutine + `yield return www.SendWebRequest()`:
// send the request, pause THIS function until the reply arrives, and the page stays responsive meanwhile.
async function loadClimbs() {
  const response = await fetch("/api/climbs"); // same order as typing the URL in the address bar
  climbs = await response.json();               // unpack the JSON text into a real array
  renderList();
}
loadClimbs(); // run once when the page opens

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

    deleteBtn.addEventListener("click", async () => {
      // TODO(you) I: mail a delete order for THIS climb, then reload the list from the server.
      //   1. Replace the blank with the climb's id (a template literal, like your <li> text):
      //        await fetch(`/api/climbs/____`, { method: "DELETE" });
      //   2. Then the same one-call reload you wrote in TODO F.
      //   3. Delete the two old lines below (they only edit the tab's copy).

      await fetch(`/api/climbs/body.id`,{method:"DELETE"});


      climbs.splice(climbs.indexOf(climb), 1)

      renderList();
    });

    li.appendChild(deleteBtn); // the button goes inside the <li>
    todayList.appendChild(li); // add the new <li> to the <ul>
   
    
  }
}

// 4. Catch the form's submit, instead of letting the browser reload the page
const form = document.getElementById("log-form");

form.addEventListener("submit", async (event) => {
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

  // Send the climb to the server: a POST order with the climb packed as JSON text in the body.
  await fetch("/api/climbs", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // the label on the parcel: "this is JSON"
    // TODO(you) E: body: ...   <- turn the climb object into JSON text (you already know the function)
    body: JSON.stringify(climb)
  });

  // TODO(you) F: the old two lines (push + renderList) drew from the tab's own array.
  //              Replace them with ONE call that re-reads the list from the server and draws it.
  loadClimbs();

});


