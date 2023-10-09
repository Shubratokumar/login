let timer;
let otpTimerElement = document.getElementById("otpTimer");
let sendOTPButton = document.getElementById("sendOTPButton");
let otpError = document.getElementById("error-message");
// Function to start the OTP timer
function startOTPTimer() {
  //Invalid OTP Error
  otpError.style.display = "none"; //hide if no error

  sendOTPButton.style.display = "none"; // Hide the "Send OTP" button while the timer is running
  let duration = 60; // Duration of the timer in seconds

  function updateTimer() {
    if (duration > 0) {
      otpTimerElement.textContent = `Resend OTP in ${duration} seconds`;
      duration--;
    } else {
      otpTimerElement.textContent = "";
      otpTimerElement.style.display = "none";
      sendOTPButton.style.display = "inline-block"; // Show the "Send OTP" button in the same position as the timer
      clearInterval(timer);
    }
  }

  // Initial update and start the timer
  updateTimer();
  timer = setInterval(updateTimer, 1000);
}

// Automatically start the OTP timer when the page loads
window.onload = function () {
  // Check if the timer has already run
  if (localStorage.getItem("otpTimerEnded") === "true") {
    sendOTPButton.style.display = "inline-block"; // Show the "Send OTP" button
  } else {
    startOTPTimer();
  }
};
