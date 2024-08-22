document.getElementById('bookingForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Validation
    const form = event.target;
    const isValid = form.checkValidity();
    
    if (isValid) {
        // Calculate cost (basic example, you can add more complex logic)
        let cost = 0;
        const deliverySpeed = form.deliverySpeed.value;
        const packaging = form.packaging.value;
        
        if (deliverySpeed === 'express') {
            cost += 20;
        } else {
            cost += 10;
        }
        
        if (packaging === 'custom') {
            cost += 15;
        } else if (packaging === 'eco') {
            cost += 5;
        } else if (packaging === 'fragile') {
            cost += 10;
        }
        
        document.getElementById('cost').textContent = `Cost: $${cost.toFixed(2)}`;
        
        // Submit form data (for demo, just log it)
        console.log('Form submitted');
        console.log('Sender Name:', form.senderName.value);
        console.log('Receiver Name:', form.receiverName.value);
        // ... log other form values

        alert('Booking submitted successfully!');
    } else {
        alert('Please fill out all required fields.');
    }
});
