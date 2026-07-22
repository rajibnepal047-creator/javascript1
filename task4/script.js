let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Update display and button states
function updateCounter() {
    countDisplay.textContent = count;

    // Turn red at the limits
    if (count === 0 || count === 10) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }

    // Disable buttons at limits
    decreaseBtn.disabled = (count === 0);
    increaseBtn.disabled = (count === 10);
}

// Increase
increaseBtn.addEventListener("click", function () {
    if (count < 10) {
        count++;
        updateCounter();
    }
});

// Decrease
decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Initial state
updateCounter();