document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');

    function handleLogout() {
        window.location.href = 'login.html'; // Update with the actual logout URL
    }

    logoutButton.addEventListener('click', handleLogout);
});
