const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  console.log(taskText);

  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span class="close">✅</span>`;

    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskList.addEventListener("mousemove", function (event) {
  if (event.target.classList.contains("close")) {
    event.target.parentElement.remove();
  }
});
