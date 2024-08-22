document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve Booking ID
    const bookingID = document.getElementById('bookingID').value;

    // Basic validation
    if (bookingID.length !== 12 || isNaN(bookingID)) {
        displayStatus('Invalid Booking ID. Please enter a 12-digit number.', 'error');
        return;
    }

    // Simulate tracking status retrieval
    // In a real application, you'd make an API request here
    // Example response data
    const trackingStatus = getTrackingStatus(bookingID);

    // Display the tracking status
    displayStatus(trackingStatus.message, trackingStatus.type);
});

// Simulated function to get tracking status
function getTrackingStatus(bookingID) {
    // In a real implementation, replace this with an API call
    // Here, we're simulating success and error cases
    const isSuccess = Math.random() > 0.5; // Randomly decide success or failure

    if (isSuccess) {
        return {
            type: 'success',
            message: `Your package with Booking ID ${bookingID} is in transit.`
        };
    } else {
        return {
            type: 'error',
            message: `No package found with Booking ID ${bookingID}.`
        };
    }
}

function displayStatus(message, type) {
    const statusElement = document.getElementById('trackingStatus');
    statusElement.textContent = message;
    statusElement.className = `status ${type}`;
}
