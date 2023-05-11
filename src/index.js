import Puppeteer from "./scripts/puppeteer.js";

window.onload = function () {
	const puppeteer = new Puppeteer({
		element: document.querySelector(".game-container"),
	});
	puppeteer.init();
};
