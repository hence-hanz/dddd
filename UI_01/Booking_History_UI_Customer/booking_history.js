document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const bookingTableBody = document.querySelector('#bookingTable tbody');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const logoutButton = document.getElementById('logoutButton');

    // Sample booking history data (Replace with actual data fetching)
    const bookings = [
        { customerID: 'C001', bookingID: 'B001', receiverName: 'John Doe', deliveredAddress: '123 Elm St, Springfield', amount: '$25.00', status: 'Delivered' },
        { customerID: 'C002', bookingID: 'B002', receiverName: 'Jane Smith', deliveredAddress: '456 Oak St, Springfield', amount: '$30.00', status: 'In Transit' },
        // Add more sample data as needed
    ];

    let currentPage = 1;
    const pageSize = 5; // Number of items per page

    function renderTable(page) {
        bookingTableBody.innerHTML = '';
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const pageData = bookings.slice(start, end);

        pageData.forEach(booking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.customerID}</td>
                <td>${booking.bookingID}</td>
                <td>${booking.receiverName}</td>
                <td>${booking.deliveredAddress}</td>
                <td>${booking.amount}</td>
                <td>${booking.status}</td>
            `;
            bookingTableBody.appendChild(row);
        });

        prevButton.disabled = (page === 1);
        nextButton.disabled = (end >= bookings.length);
    }

    function handleLogout() {
        // Redirect to login page or handle logout
        window.location.href = 'customer_login.html'; // Update with actual logout URL
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage * pageSize < bookings.length) {
            currentPage++;
            renderTable(currentPage);
        }
    });

    logoutButton.addEventListener('click', handleLogout);

    // Initialize the table
    renderTable(currentPage);
});
