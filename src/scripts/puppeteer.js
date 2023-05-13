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
		this.audio.volume = 0.5;

		// find menu
		this.menu = document.querySelector(".menu");

		this.sceneSequence = [
			// StartScreen,
			// Cutscene1,
			Battle1,
			Cutscene2,
			Battle2,
			Cutscene3,
			Battle3,
			Cutscene4,
		];
		this.currentSceneIndex = 0;
		this.currentScreen = new this.sceneSequence[this.currentSceneIndex](
			this
		);
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

	changeScreen(newScreen) {
		this.currentScreen.destroy();
		this.currentScreen = new newScreen(this);
		this.currentScreen.audio.play();
		this.currentScreen.init();
	}

	playNextScene() {
		// console.log("playNextScene")
		// console.log(this.audio.src)

		this.currentSceneIndex++;
		const nextScene =
			this.sceneSequence[
				this.currentSceneIndex % this.sceneSequence.length
			];

		this.currentScreen.destroy(); // destroy the current screen
		this.currentScreen = new nextScene(this); // reassign the current screen
		// play the audio and next scene
		// this.currentScene.audio.src
		this.currentScreen.init();
		this.currentScreen.audio.play();
	}

	goBackToStartScreen() {
		this.currentSceneIndex = 0;
		this.currentScreen.destroy();
		this.currentScreen = new StartScreen(this);
		this.currentScreen.init();
		this.currentScreen.audio.play();
	}
}
