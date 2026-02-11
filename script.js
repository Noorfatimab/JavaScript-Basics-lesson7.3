// Find elements
const myButton = document.getElementById("clickMeBtn");
const displayParagraph = document.getElementById("displayText");

// Variable to hold new text
let newText = "I just learned to change myself!";

// Function to update paragraph text
function updateText() {
    displayParagraph.textContent = newText;
}

// Event listener for button click
myButton.addEventListener("click", updateText);
 
