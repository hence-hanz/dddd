document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored username from localStorage
    const username = localStorage.getItem("officerUsername");

    // Check if the username exists and display it
    if (username) {
        document.getElementById("welcomeMessage").textContent = "Welcome, " + username + "!";
    }
});

// Event listener for the logout button
document.getElementById("logout").addEventListener("click", function() {
    // Clear the stored username from localStorage
    localStorage.removeItem("officerUsername");

    // Redirect to the officer login page
    window.location.href = "C:\Users\sagar\UI_01\Officer_Login\officer_login.html";
});
