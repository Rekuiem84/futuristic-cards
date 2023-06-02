//burger menu
const burgerMenu = document.querySelector(".burger-cont");
const colorSelection = document.querySelector(".color-selection-cont");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("burger--active");
	colorSelection.setAttribute(
		"aria-hidden",
		colorSelection.getAttribute("aria-hidden") === "true" ? "false" : "true"
	);
});

//color selection
const cards = document.querySelector(".cards-cont");
const inputs = document.querySelectorAll(".color-selection-cont input");

inputs.forEach((input) => input.addEventListener("input", handleUpdate));

function handleUpdate() {
	cards.style.setProperty(`--${this.name}`, this.value);
	localStorage.setItem(`--${this.name}`, this.value);
}

function getColors() {
	for (let i = 0; i < inputs.length; i++) {
		let key = inputs[i].name;
		let value = inputs[i].value;
		localStorage.setItem(`--${key}`, value);
	}
	console.log(localStorage);
}

//key = Card1_Color1
//value = #ff0058
//value stored at localStorage[`--${key}`]

window.addEventListener("load", getColors);
window.addEventListener("load", setColors);

function setColors() {
	inputs.forEach((input) => {
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			let value = localStorage.getItem(key);
			console.log(value);
			cards.style.setProperty(`${key}`, value);

			input.value = cards.style.getPropertyValue(`${key}`);
		}
	});
}
