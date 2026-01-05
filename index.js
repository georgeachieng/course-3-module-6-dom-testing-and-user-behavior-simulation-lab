function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const newDiv = document.createElement("div");
  newDiv.textContent = text;
  container.appendChild(newDiv);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

function simulateClick(containerId, message) {
  const container = document.getElementById(containerId);
  const p = document.createElement("p");
  p.textContent = message; // must match test expectation exactly
  container.appendChild(p);
}

function handleFormSubmit(event) {
  // Make safe for tests that don’t pass a real event
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const input = document.getElementById("user-input").value.trim();
  const container = document.getElementById("dynamic-content");
  const error = document.getElementById("error-message");

  if (input === "") {
    // Match test expectation exactly
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
  } else {
    const p = document.createElement("p");
    p.textContent = input;
    container.appendChild(p);
    error.textContent = "";
    error.classList.add("hidden");
  }
}

// Export functions for Jest tests
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};