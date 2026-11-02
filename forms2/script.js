const form = document.querySelector("#eventForm");
const typeSelect = document.querySelector("#type");
const codeDiv = document.querySelector("#codeDiv");
const codeLabel = document.querySelector("#codeLabel");
const codeInput = document.querySelector("#code");
const errorsDiv = document.querySelector("#errors");
const ticketDiv = document.querySelector("#ticket");

// Show the hidden div and change its label when Type changes
typeSelect.addEventListener("change", () => {
  codeInput.value = "";
  if (typeSelect.value === "student") {
    codeLabel.textContent = "Student I#";
    codeDiv.hidden = false;
  } else if (typeSelect.value === "guest") {
    codeLabel.textContent = "Access Code";
    codeDiv.hidden = false;
  } else {
    codeDiv.hidden = true;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const errors = [];
  const name = document.querySelector("#name").value.trim();
  const dateValue = document.querySelector("#date").value;
  const type = typeSelect.value;
  const code = codeInput.value.trim();

  if (name === "") errors.push("Please enter your name.");

  // Date must be later than today
  if (dateValue === "") {
    errors.push("Please choose a date.");
  } else {
    const chosen = new Date(dateValue + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen <= today) errors.push("The date must be later than today.");
  }

  if (type === "") {
    errors.push("Please choose Student or Guest.");
  } else if (type === "student" && !/^\d{9}$/.test(code)) {
    errors.push("Student I# must be exactly 9 digits.");
  } else if (type === "guest" && code !== "EVENT131") {
    errors.push("Access code is incorrect.");
  }

  errorsDiv.innerHTML = "";
  ticketDiv.innerHTML = "";

  if (errors.length > 0) {
    errorsDiv.innerHTML = "<ul>" + errors.map(e => `<li>${e}</li>`).join("") + "</ul>";
    return;
  }

  const niceDate = new Date(dateValue + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
  ticketDiv.innerHTML = `
    <h2>Your Ticket</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date:</strong> ${niceDate}</p>
    <p><strong>Type:</strong> ${type === "student" ? "Student" : "Guest"}</p>
    <p><strong>Ticket #:</strong> ${Math.floor(Math.random() * 900000) + 100000}</p>
  `;
  form.reset();
  codeDiv.hidden = true;
});