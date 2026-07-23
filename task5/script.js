const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

const password = document.getElementById("password");
const status = document.getElementById("status");

const eye = document.getElementById("eye");
const themeBtn = document.getElementById("themeBtn");

// Live Greeting
nameInput.addEventListener("input", () => {
    greeting.textContent =
        nameInput.value.trim() ?
        `Hello, ${nameInput.value}!` :
        "Hello!";
});

// Password Strength
password.addEventListener("input", () => {

    // Remove spaces automatically
    password.value = password.value.replace(/\s/g, "");

    const value = password.value;

    const strong =
        value.length >= 6 &&
        /\d/.test(value) &&
        !/\s/.test(value);

    status.textContent = strong ? "Strong" : "Weak";
    status.style.color = strong ? "green" : "red";
});

// Show / Hide Password
eye.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    eye.textContent = password.type === "password" ? "👁️" : "🙈";
});

// Dark / Light Mode
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
        ? " Light Mode"
        : " Dark Mode";
});