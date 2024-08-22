document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('updateForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const bookingID = document.getElementById('bookingID').value;
        const status = document.getElementById('status').value;

        // Basic validation
        if (!bookingID || !status) {
            displayMessage('Please provide both Booking ID and Status.', 'error');
            return;
        }

        // Simulate updating delivery status
        const updateSuccess = updateDeliveryStatus(bookingID, status);

        if (updateSuccess) {
            displayMessage('Delivery status updated successfully.', 'success');
        } else {
            displayMessage('Failed to update delivery status. Please try again.', 'error');
        }
    });

    // Handle logout button
    document.getElementById('logoutButton').addEventListener('click', function() {
        // Redirect to login page (update URL as needed)
        window.location.href = 'officer_login.html';
    });

    // Simulate updating the delivery status
    function updateDeliveryStatus(bookingID, status) {
        // Simulate updating the delivery status
        // Replace this with actual API call or database update
        return true; // Simulate successful update
    }

    // Display status message
    function displayMessage(message, type) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
    }
});
