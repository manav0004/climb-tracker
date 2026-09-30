// hello.js: my first JavaScript that runs OUTSIDE the browser (task 3.1).
// Run it from the terminal with:  node hello.js

// TODO(you) 1: print a greeting with console.log
console.log("Greetings!")

// TODO(you) 2: make a `climbs` array with two climb objects (just grade + sent is enough),
//              then print how many climbs there are
const climbs = [].concat({grade: "6a", sent: true },{grade: "7c", sent : true});
console.log(climbs.length);
console.log(JSON.stringify(climbs));
// TODO(you) 3: print document.title (the same line would work in app.js)
//console.log(document.title)
// TODO(you) 4: print one more message after that
console.log("1 more message xd")
