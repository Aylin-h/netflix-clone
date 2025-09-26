document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // איפוס הודעות שגיאה
    emailError.textContent = "";
    passwordError.textContent = "";

    // בדיקת אימייל / נייד
    if (emailInput.value.trim() === "") {
      emailError.textContent = "יש להזין אימייל או מספר נייד";
      isValid = false;
    }

    // בדיקת סיסמה
    if (passwordInput.value.trim().length < 6) {
      passwordError.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
      isValid = false;
    }

    // אם הכל תקין
    if (isValid) {
      window.location.href = "profiles.html"; // מעביר לעמוד הפרופילים
    }
  });
});
