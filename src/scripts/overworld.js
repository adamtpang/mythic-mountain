import StartScreen from "./start-screen";
import Cutscene1 from "./cutscene1";
import Battle1 from "./battle1";
import Cutscene2 from "./cutscene2";
import Battle2 from "./battle3";
import Cutscene3 from "./cutscene3";
// import Battle3 from "./battleScreen3";
// import Cutscene4 from "./cutscene4";

export default class Overworld {
	constructor(config) {
		// takes the config from the init on the index.js file
		// the game container div
		this.element = config.element;
		// finds the canvas within the game container
		this.canvas = this.element.querySelector(".game-canvas");
		// sets the canvas width and height to the game container width and height
		this.canvas.width = this.element.offsetWidth;
		this.canvas.height = this.element.offsetHeight;
		// gets the context of the canvas
		this.context = this.canvas.getContext("2d");
		this.context.imageSmoothingEnabled = false;
		this.currentScreen = null;

		// create audio
		this.audio = new Audio();
		this.audio.loop = true;
		this.audio.muted = true;
		this.audio.volume = 0.4;

		// find menu
		this.menu = document.querySelector(".menu");
	}

	init() {
		// setting up the mute button and making it clickable
		const button = document.getElementById("mute-button");
		button.addEventListener("click", () => {
			this.audio.muted = !this.audio.muted;
			if (this.audio.muted) {
				button.innerHTML =
					"<img src='assets/overworld/mute_icon.png' alt='muted'></img>";
			} else {
				this.audio.play();
				button.innerHTML =
					"<img src='assets/overworld/unmute_icon.png' alt='unmuted'></img>";
			}
		});
		this.currentScreen = new Cutscene2(this);
		this.currentScreen.init();
	}

	changeScreen(screen) {
		this.currentScreen = new screen(this);
		// this.currentScreen.audio.muted = false;
		// this.currentScreen.audio.play();
		this.currentScreen.init();
	}
}
