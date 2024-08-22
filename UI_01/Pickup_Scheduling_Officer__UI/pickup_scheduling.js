document.addEventListener('DOMContentLoaded', function() {
    // Handle search form submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const searchBookingID = document.getElementById('searchBookingID').value;
        
        // Validate Booking ID
        if (searchBookingID.length !== 12 || isNaN(searchBookingID)) {
            displayMessage('Invalid Booking ID. Please enter a 12-digit number.', 'error');
            return;
        }

        // Simulate searching for the booking ID
        const bookingFound = searchBooking(searchBookingID);
        
        if (bookingFound) {
            // Display the schedule form with Booking ID pre-filled
            document.getElementById('bookingID').value = searchBookingID;
            document.getElementById('scheduleSection').style.display = 'block';
            displayMessage('Booking ID found. Please schedule the pickup.', 'success');
        } else {
            displayMessage('No booking found with the provided ID.', 'error');
        }
    });

    // Handle schedule form submission
    document.getElementById('scheduleForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const bookingID = document.getElementById('bookingID').value;
        const pickupDateTime = document.getElementById('pickupDateTime').value;

        // Basic validation
        if (!pickupDateTime) {
            displayMessage('Please provide a pickup date and time.', 'error');
            return;
        }

        // Simulate saving the pickup scheduling
        const saveSuccess = savePickupScheduling(bookingID, pickupDateTime);

        if (saveSuccess) {
            displayMessage('Pickup scheduled successfully.', 'success');
        } else {
            displayMessage('Failed to schedule pickup. Please try again.', 'error');
        }
    });

    // Handle logout button
    document.getElementById('logoutButton').addEventListener('click', function() {
        // Redirect to login page (update URL as needed)
        window.location.href = 'officer_login.html';
    });

    // Simulate searching for a booking ID
    function searchBooking(bookingID) {
        // Simulate a booking ID search
        // Replace this with actual API call or database query
        return bookingID.length === 12; // Simulate successful search for valid IDs
    }

    // Simulate saving the pickup scheduling
    function savePickupScheduling(bookingID, pickupDateTime) {
        // Simulate saving the pickup scheduling
        // Replace this with actual API call or database update
        return true; // Simulate successful save
    }

    // Display status message
    function displayMessage(message, type) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
    }
});
