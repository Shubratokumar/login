// Regular expression for email validation
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Get the form and error message elements from the HTML
const emailForm = document.getElementById("emailForm");
const policyCheckbox = document.getElementById("term-checkbox");
const errorMessage = document.getElementById("error-message");
const policyError = document.getElementById("agreeError");

// Add a submit event listener to the form
emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessage.textContent = ""; // Clear any previous error message
  policyError.textContent = "";

  // Get the email input value
  const emailInput = document.getElementById("email");

  console.log(emailInput.value.length == 0);
  console.log(emailInput.value);

  if (emailInput.value.length == 0) {
    errorMessage.style.display = "inline-block";
    return (errorMessage.textContent = "Please enter your email.");
  }

  // Test the email against the regex
  if (emailRegex.test(emailInput.value)) {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    console.log("Email is valid:", emailInput.value);
  } else {
    errorMessage.style.display = "inline-block";
    errorMessage.textContent = "";
    errorMessage.textContent =
      "Invalid email address. Please enter a valid email.";
    return;
  }

  //Check if the checkbox is checked.
  if (!policyCheckbox.checked) {
    policyError.style.display = "inline-block";
    policyError.textContent = "You must agree to the terms and conditions";
    console.log("You must agree to the terms and conditions");
  } else {
    policyError.textContent = "";
    policyError.style.display = "none";
  }

  // Check if the form is valid
  if (emailForm.checkValidity()) {
    // Form is valid, navigate to the next page
    window.location.replace("otp_confirmation_signup.html");
    // window.location.href = "otp_screen.html"; // Replace with your desired URL
  }
});

// Automatically start the OTP timer when the page loads
window.onload = function () {
  policyError.style.display = "none";
  errorMessage.style.display = "none";
};
