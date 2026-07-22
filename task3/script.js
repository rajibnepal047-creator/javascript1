const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    // Strike through when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
});