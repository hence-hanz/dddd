document.getElementById('makePaymentButton').addEventListener('click', function() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolderName = document.getElementById('cardHolderName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation (add more robust validation as needed)
    if (cardNumber.length === 16 && cvv.length === 3) {
        alert('Payment Successful! Your Booking ID is #123456');
        window.location.href = 'invoice_page.html'; // Redirect to invoice page
    } else {
        alert('Please fill out all fields correctly.');
    }
});
