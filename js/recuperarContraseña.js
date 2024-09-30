const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");
const submitButton = document.getElementById("submitButton");

function togglePassword(passwordId, toggleIconId) {
  const passwordField = document.getElementById(passwordId);
  const toggleIcon = document.getElementById(toggleIconId);
  const passwordFieldType = passwordField.getAttribute("type");

  if (passwordFieldType === "password") {
    passwordField.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("error");
    errorMessage.style.display = "block";
    submitButton.disabled = true;
  } else {
    confirmPassword.classList.remove("error");
    errorMessage.style.display = "none";
    submitButton.disabled = false;
  }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);
