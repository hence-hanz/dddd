document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for shipped packages
    const shippedPackages = [
        { bookingID: '123456789012', customerID: 'C001', status: 'In Transit' },
        { bookingID: '123456789013', customerID: 'C002', status: 'Delivered' },
        { bookingID: '123456789014', customerID: 'C003', status: 'Pending' },
        // Add more simulated data as needed
    ];

    // Display the list of shipped packages
    function displayPackages(packages) {
        const packageList = document.getElementById('packageList');
        packageList.innerHTML = ''; // Clear previous content

        packages.forEach(pkg => {
            const packageItem = document.createElement('div');
            packageItem.className = 'package-item';
            packageItem.innerHTML = `
                <p><strong>Booking ID:</strong> ${pkg.bookingID}</p>
                <p><strong>Customer ID:</strong> ${pkg.customerID}</p>
                <p><strong>Status:</strong> ${pkg.status}</p>
            `;
            packageList.appendChild(packageItem);
        });
    }

    displayPackages(shippedPackages);

    // Handle search form submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const customerID = document.getElementById('customerID').value;
        const bookingID = document.getElementById('bookingID').value;

        const filteredPackages = shippedPackages.filter(pkg => 
            (customerID && pkg.customerID === customerID) ||
            (bookingID && pkg.bookingID === bookingID)
        );

        // Display status or error message
        if (filteredPackages.length > 0) {
            displayPackages(filteredPackages);
            displayStatus(`Found ${filteredPackages.length} package(s) matching the search criteria.`, 'success');
        } else {
            displayStatus('No packages found matching the search criteria.', 'error');
        }
    });

    // Handle logout button
    document.getElementById('logoutButton').addEventListener('click', function() {
        // Redirect to login page (update URL as needed)
        window.location.href = 'officer_login.html';
    });

    // Display status message
    function displayStatus(message, type) {
        const statusDisplay = document.getElementById('statusDisplay');
        statusDisplay.textContent = message;
        statusDisplay.className = `status-display ${type}`;
    }
});
