import CompleteButton from "./components/completeTask.js";
import DeleteButton from "./components/deleteTask.js";

const createTask = (event) => {
	event.preventDefault();

	const list = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]");
	const calendar = document.querySelector("[data-form-date]")

	const task = document.createElement("li");

	const content = `<p class="content">${input.value}</p>`;

	task.classList.add("task");
	task.innerHTML = content;

	task.appendChild(CompleteButton());
	task.appendChild(DeleteButton());
	list.appendChild(task);

	input.value = "";
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", createTask);
