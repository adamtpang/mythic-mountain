import Overworld from "./scripts/overworld.js";

window.onload = function () {
	const overworld = new Overworld({
		element: document.querySelector(".game-container"),
	});
	overworld.init();
};
