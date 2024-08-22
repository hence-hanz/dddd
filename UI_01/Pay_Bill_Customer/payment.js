document.getElementById('logoutButton').addEventListener('click', function() {
    // Add logic for logout
    alert('Logged out!');
    window.location.href = 'login.html'; // Replace with the actual login page URL
});

document.getElementById('payNowButton').addEventListener('click', function() {
    window.location.href = 'credit_card.html'; // Redirect to credit card details page
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'booking_service.html'; // Redirect to booking service page
});
