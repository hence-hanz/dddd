document.addEventListener("DOMContentLoaded", function() {
    // Prepopulate sender information (you may replace these with actual data retrieval methods)
    document.getElementById("customerName").value = localStorage.getItem("customerName") || "";
    document.getElementById("customerAddress").value = localStorage.getItem("address") || "";
    document.getElementById("customerContact").value = localStorage.getItem("contactDetails") || "";


    const form = document.getElementById("bookingForm");
    const validationMessages = document.getElementById("validationMessages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let errors = [];

        // Validate receiver information
        if (form.receiverName.value.trim() === "") {
            errors.push("Receiver Name is required.");
        }
        if (form.receiverAddress.value.trim() === "") {
            errors.push("Receiver Address is required.");
        }
        if (form.receiverPincode.value.trim() === "" || !/^\d{5,6}$/.test(form.receiverPincode.value)) {
            errors.push("Valid Receiver Pincode is required.");
        }

        // Validate parcel details
        if (form.parcelSize.value.trim() === "" || !/^\d+x\d+x\d+$/.test(form.parcelSize.value)) {
            errors.push("Parcel Size (LxWxH in cm) is required.");
        }
        if (form.parcelWeight.value.trim() === "" || isNaN(form.parcelWeight.value) || form.parcelWeight.value <= 0) {
            errors.push("Valid Parcel Weight (kg) is required.");
        }
        if (form.parcelDescription.value.trim() === "") {
            errors.push("Parcel Description is required.");
        }

        // Validate shipping options
        if (form.deliverySpeed.value.trim() === "") {
            errors.push("Delivery Speed is required.");
        }
        if (form.packagingPreferences.value.trim() === "") {
            errors.push("Packaging Preference is required.");
        }

        // Validate date and time selection
        if (form.pickupDateTime.value.trim() === "") {
            errors.push("Pickup Date and Time is required.");
        }
        if (form.dropoffDateTime.value.trim() === "") {
            errors.push("Dropoff Date and Time is required.");
        }

        // Validate payment method
        if (form.paymentMethod.value.trim() === "") {
            errors.push("Payment Method is required.");
        }

        // Display errors or submit form
        if (errors.length > 0) {
            validationMessages.innerHTML = errors.join("<br>");
            validationMessages.style.color = "red";
        } else {
            validationMessages.innerHTML = "Booking Successful!";
            validationMessages.style.color = "green";

            // Example of handling the booking success (can be replaced with an actual API call)
            setTimeout(() => {
                alert("Your booking was successful! Redirecting to the homepage...");
                window.location.href = "customer_homepage.html"; // Adjust the redirect path as needed
            }, 1500);
        }
    });

    // Calculate and display service cost based on input
    form.addEventListener("change", function() {
        const size = form.parcelSize.value.trim().split('x').map(Number);
        const weight = parseFloat(form.parcelWeight.value.trim());
        const speed = form.deliverySpeed.value;
        let cost = 0;

        if (size.length === 3 && size.every(dim => !isNaN(dim) && dim > 0) && !isNaN(weight) && weight > 0) {
            const volume = size[0] * size[1] * size[2] / 5000; // Dimensional weight formula
            cost = Math.max(volume, weight) * 5; // Base cost calculation

            if (speed === "express") {
                cost *= 1.5;
            } else if (speed === "overnight") {
                cost *= 2;
            }

            document.getElementById("serviceCost").textContent = "Service Cost: $" + cost.toFixed(2);
        } else {
            document.getElementById("serviceCost").textContent = "Service Cost: $0.00";
        }
    });
});
