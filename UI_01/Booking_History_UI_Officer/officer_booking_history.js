document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const bookingTableBody = document.querySelector('#bookingTable tbody');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const logoutButton = document.getElementById('logoutButton');
    const searchForm = document.getElementById('searchForm');

    let bookings = []; // This should be populated with actual data from server
    let currentPage = 1;
    const pageSize = 5;

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
                <td>${booking.bookingDate}</td>
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
        window.location.href = 'officer_login.html'; // Update with actual logout URL
    }

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const customerID = document.getElementById('customerID').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        // Fetch bookings based on search criteria (replace with actual fetch call)
        // For now, just filtering the sample data
        bookings = bookings.filter(booking => 
            (booking.customerID === customerID || customerID === '') &&
            (new Date(booking.bookingDate) >= new Date(startDate)) &&
            (new Date(booking.bookingDate) <= new Date(endDate))
        );

        currentPage = 1;
        renderTable(currentPage);
    });

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

    // Initialize the table (initial empty data)
    renderTable(currentPage);
});
