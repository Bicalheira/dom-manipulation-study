(() => {
	const createTask = (event) => {
		event.preventDefault();

		const task = document.createElement("li");
		const content = `<p class="content">${input.value}</p>`;

		task.classList.add("task");
		task.innerHTML = content;

		task.appendChild(CompleteButton());
		list.appendChild(task);

		input.value = "";
	};

	const list = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]");
	const newTask = document.querySelector("[data-form-button]");

	newTask.addEventListener("click", createTask);

	const CompleteButton = () => {
		const completeButton = document.createElement("button");

		completeButton.classList.add("check-button");
		completeButton.innerText = "Concluir";
		completeButton.addEventListener("click", completeTask);

		return completeButton;
	};

	const completeTask = (event) => {
		const completeButton = event.target;

		const completeTask = completeButton.parentElement;

		completeTask.classList.toggle("done");
	};
})();
