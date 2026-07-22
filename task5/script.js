const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

const password = document.getElementById("password");
const status = document.getElementById("status");

const togglePassword = document.getElementById("togglePassword");

const themeToggle = document.getElementById("themeToggle");


// Live Greeting
nameInput.addEventListener("input", function(){

    if(nameInput.value.trim() === ""){
        greeting.textContent = "Hello!";
    }
    else{
        greeting.textContent = `Hello, ${nameInput.value}!`;
    }

});


// Boolean Password Function (returns 1 or 0)
function checkPassword(value){

    let hasLength = value.length >= 6;
    let hasNumber = /\d/.test(value);

    return (hasLength && hasNumber) ? 1 : 0;
}


// Password Checker
password.addEventListener("input", function(){
result === 1 
    ? (status.textContent = "Strong", status.style.color = "green")
    : (status.textContent = "Weak", status.style.color = "red");

});


// Password Eye Toggle
togglePassword.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "🙈";
    }
    else{
        password.type = "password";
        togglePassword.textContent = "👁";
    }

});


// Dark Mode / Light Mode
themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.textContent = " Light Mode";
    }
    else{
        themeToggle.textContent = " Dark Mode";
    }

});