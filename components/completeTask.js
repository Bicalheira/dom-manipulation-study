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

export default CompleteButton;