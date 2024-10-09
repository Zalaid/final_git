// Function to handle contact button click
function handleContactClick() {
    // Alert message when the button is clicked
    alert("Thank you for your interest! We will get back to you soon.");
}

// Attach event listener to the contact button
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
    contactBtn.addEventListener("click", handleContactClick); // Call function on button click
}
