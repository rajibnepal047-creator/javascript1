const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Hello!";
    } else {
        greeting.textContent = `Hello, ${name}!`;
    }
});