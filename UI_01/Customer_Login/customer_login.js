document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Clear previous error message
  errorMessage.textContent = '';

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,30}$/;

  if (!passwordRegex.test(password)) {
      errorMessage.textContent = 'Password must be 30 characters max, include at least one uppercase letter, one lowercase letter, and one special character.';
      return;
  }

  // Simulate successful login and redirect to customer homepage
  window.location.href = 'C:\Users\sagar\UI_01\Homepage_Customer\homepage_customer.html';
});
