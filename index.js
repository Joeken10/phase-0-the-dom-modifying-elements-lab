// Write your code here!
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new <h1> element to 'victory'
newHeader.id = "victory";

// Set the text content of the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace 'YOUR-NAME' with your actual name

// Append the new <h1> element to the <body>
document.body.appendChild(newHeader);