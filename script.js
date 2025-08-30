/* ===============================
   Part 1: Variables & Conditionals
   =============================== */
let varOcg = 10; // __define-ocg__ Variable declaration
let userName = "Ivy";
let isStudent = true;

if (isStudent) {
  console.log(userName + " is a student.");
} else {
  console.log(userName + " is not a student.");
}

/* ===============================
   Part 2: Functions
   =============================== */
// Function 1: Show message
function showMessage() {
  document.getElementById("message").innerText = "Hello, " + userName + "! JavaScript is working.";
}

// Function 2: Change background color
function changeBackground() {
  document.body.style.background = "#e3f2fd";
}

/* ===============================
   Part 3: Loops
   =============================== */
// Loop Example 1: For loop
function generateList() {
  let listContainer = document.getElementById("dynamicList");
  listContainer.innerHTML = ""; // Clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    listContainer.appendChild(li);
  }
}

// Loop Example 2: While loop (logs to console)
let counter = 0;
while (counter < 3) {
  console.log("Counter value: " + counter);
  counter++;
}

/* ===============================
   Part 4: DOM Interactions
   =============================== */
// 1. Button click -> show message
document.getElementById("showBtn").addEventListener("click", showMessage);

// 2. Button click -> change background
document.getElementById("colorBtn").addEventListener("click", changeBackground);

// 3. Button click -> generate list items
document.getElementById("listBtn").addEventListener("click", generateList);
