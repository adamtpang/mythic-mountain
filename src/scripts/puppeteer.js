import {
	StartScreen,
	Cutscene1,
	Cutscene2,
	Cutscene3,
	Cutscene4,
} from "./scenes";
import { Battle1, Battle2, Battle3 } from "./battles";

export default class Puppeteer {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.querySelector(".game-canvas");
		this.canvas.width = this.element.offsetWidth;
		this.canvas.height = this.element.offsetHeight;
		this.context = this.canvas.getContext("2d");
		this.context.imageSmoothingEnabled = false;

		// create audio
		this.audio = new Audio();
		this.audio.loop = true;
		this.audio.muted = true;
		this.audio.volume = 0.1;

		// find menu
		this.menu = document.querySelector(".menu");

		// CHANGE HERE //
		// this.currentScreen = new StartScreen(this);
		// this.currentScreen = new Cutscene1(this);
		this.currentScreen = new Battle1(this);
		// this.currentScreen = new Cutscene2(this);
		// this.currentScreen = new Battle2(this);
		// this.currentScreen = new Cutscene3(this);
		// this.currentScreen = new Battle3(this);
		// this.currentScreen = new Cutscene4(this);

		// this.sceneSequence = [
		// 	StartScreen,
		// 	Cutscene1,
		// 	Battle1,
		// 	Cutscene2,
		// 	Battle2,
		// 	Cutscene3,
		// 	Battle3,
		// 	Cutscene4,
		// ];
	}

	init() {
		// setting up the mute button and making it clickable
		const button = document.getElementById("mute-button");
		this.applyFlashingEffect(button);

		button.addEventListener("click", () => {
			this.audio.muted = !this.audio.muted;
			const icon = button.querySelector("i");
			if (this.audio.muted) {
				icon.classList.remove("fa-volume-up");
				icon.classList.add("fa-volume-mute");
			} else {
				this.audio.play();
				icon.classList.remove("fa-volume-mute");
				icon.classList.add("fa-volume-up");
				icon.style.animation = "none"; // Remove flashing effect from the icon
				icon.style.color = "white"; // Set the color of the icon to white
			}
		});

		this.currentScreen.init();
	}

	applyFlashingEffect(element) {
		const icon = element.querySelector("i");
		icon.style.animation = "flashing 1s infinite";
	}

	changeScreen(screen) {
		this.currentScreen = new screen(this);
		this.currentScreen.audio.play();
		this.currentScreen.init();
	}
}
