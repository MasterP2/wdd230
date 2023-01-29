const darkButton = document.querySelector(".darkButton");
const main = document.querySelector("main");
const links = document.querySelectorAll(".link");

darkButton.addEventListener("click", () => {
	if (darkButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        links.forEach((item) => item.style.color = "white");
		darkButton.textContent = "Dark Mode ❎";
	} else {
		main.style.background = "white";
		main.style.color = "#000";
        links.forEach((item) => item.style.color = "black");
		darkButton.textContent = "Dark Mode ☑️";
	}
});
 