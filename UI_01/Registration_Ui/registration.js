document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Hide the registration form
    document.querySelector(".registration-container").style.display = "none";

    // Show the acknowledgment container
    const ackContainer = document.getElementById("ackContainer");
    ackContainer.style.display = "block";

    // Generate a random username and display the customer details
    const generatedUsername = "User" + Math.floor(Math.random() * 10000);
    document.getElementById("generatedUsername").textContent = generatedUsername;
    document.getElementById("displayCustomerName").textContent = document.getElementById("name").value;
    document.getElementById("displayEmail").textContent = document.getElementById("email").value;
    localStorage.setItem("generatedUsername", generatedUsername);
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerAddress", address);
    localStorage.setItem("customerContact", contactDetails);

    // Optional: Automatically navigate back after a delay
    setTimeout(function() {
        window.history.back();
    }, 3000); // 3 seconds delay
});
