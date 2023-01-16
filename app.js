// Get the task input element, submit button, and task container element
const taskInput = document.getElementById("taskinput");
const form = document.getElementById("form");
const taskContainer = document.getElementById("task-container");
const getTasks = document.querySelector(".tasks");

// Get the stored tasks from local storage, or an empty array if there are none
let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to add a task to the task container and local storage
const addTask = (task) => {
  // Create a new task element by cloning the template
  const newTask = getTasks.cloneNode(true);

  // Set the task text on the new task element
  newTask.querySelector("p").textContent = task;

  // Add the new task to the task container
  taskContainer.appendChild(newTask);

  // Add the task to the stored tasks array
  storedTasks.push({ task });

  // Save the updated tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(storedTasks));

  // Clear the task input field
  taskInput.value = "";
};

// Listen for the form submit event
form.onsubmit = (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  // Add the task from the input field
  addTask(taskInput.value);
};

// When the page loads
window.onload = () => {
  // Get the stored tasks from local storage, or an empty array if there are none
  storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Loop through the stored tasks and add them to the page
  for (const task of storedTasks) {
    const newTask = getTasks.cloneNode(true);
    newTask.querySelector("p").textContent = task.task;
    taskContainer.appendChild(newTask);
  }
};
