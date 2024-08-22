document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching the username from the login session or local storage
   

    const username = localStorage.getItem("generatedUsername");
    document.getElementById('username').textContent = username;

    document.getElementById('logout-link').addEventListener('click', function() {
        // Clear user details and redirect to login page
        // For demo purposes, we just redirect
        window.location.href = 'customer_login.html';
    });
});
