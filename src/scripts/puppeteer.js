// puppeteers the game

// importing scenes
import {
	StartScreen,
	Cutscene1,
	Cutscene2,
	Cutscene3,
	Cutscene4,
} from "./scenes";

// importing battles
import { Battle1, Battle2, Battle3 } from "./battles";

// importing frank
import { Frank } from "./cast";

export default class Puppeteer {
	constructor(config) {
		// some basic setup
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
		this.audio.currentTime = 0;

		// find menu
		this.menu = document.querySelector(".menu");

		this.currentScreen = null;
	}

	// initialize the current screen
	init() {

		this.resetGame();

		// setting up the mute button and making it clickable
		const button = document.getElementById("mute-button");
		const icon = button.querySelector("i");
		icon.style.animation = "flashing 1s infinite";

		button.addEventListener("click", () => {
			const icon = button.querySelector("i");

			// // toggle audio mute
			this.audio.muted = !this.audio.muted;

			if (this.audio.muted) {
				this.audio.pause()
				icon.classList.remove("fa-volume-up");
				icon.classList.add("fa-volume-mute");
			} else {
				this.audio.play()
				icon.classList.remove("fa-volume-mute");
				icon.classList.add("fa-volume-up");
				icon.style.animation = "none"; // Remove flashing effect from the icon
				icon.style.color = "white"; // Set the color of the icon to white
			}
		});
	}

	playScreen(newScreen) {
		if (this.currentScreen) {
			// destroy the old screen
			this.currentScreen.destroy();
		}
		// assign a new screen
		this.currentScreen = new newScreen(this);

		// start the new screen
		this.currentScreen.init();
	}

	// handles logic of what screen to change to depending on the state of the game
	playNextScene() {
		// i want it so that the game starts on the startscreen,
		// then alternates between cutscene and battle
		// a condition is that if the player loses a battle, they go back to the start screen and dont need to see the cutscene again
		// so i need to keep track of which cutscenes and battles have been completed
		// and i need to keep track of which cutscene and battle is currently in progress
		// and i need to keep track of whether the player has lost a battle
		// and i need to keep track of which screen is currently being displayed
		// also when the player beats the game and gets past the final cutscene, the game resets and all cutscenes are able to be seen again

		// a question is in which order do i have my conditional tree?
		// what are all the conditions?
		// if the player has completed a cutscene
		// if the player has completed a battle
		// if the player has lost a battle
		// if the player has won a battle
		// if the player has completed the game
		// if the player has completed all cutscenes
		// if the player has completed all battles

		// If the player has just lost a battle, they should go back to the start screen
		if (this.lostBattle) {
			this.playScreen(StartScreen);
			this.lostBattle = false; // Reset the lostBattle flag for the next round
			return;
		}

		// If the game is just starting from the StartScreen, go to the first cutscene
		if (this.currentScreen instanceof StartScreen) {
			if (this.cutsceneList.length > 0) {
				const nextScene = this.cutsceneList.shift();
				this.playScreen(nextScene);
				return;
			}
		}

		// If a cutscene was just completed (which means the current screen is not a battle)
		if (this.battleInProgress === null) {
			// If there are battles left, start the next battle
			if (this.battleList.length > 0) {
				this.battleInProgress = this.battleList.shift();
				this.playScreen(this.battleInProgress);
			} else {
				this.resetGame();
				return;
			}
		} else {
			// If a battle was just won (which means the current screen is not a cutscene)
			// If there are cutscenes left, start the next cutscene
			if (this.cutsceneList.length > 0) {
				const nextScene = this.cutsceneList.shift();
				this.playScreen(nextScene);
				this.battleInProgress = null; // Reset the battleInProgress flag for the next round
			}
			// If there are no cutscenes left, the game is completed and should be reset
			else {
				this.resetGame();
				return;
			}
		}
	}

	getFreshCutscenesList() {
		return [
			Cutscene1,
			Cutscene2,
			Cutscene3,
			Cutscene4,
		];
	}

	getFreshBattleList() {
		return [
			Battle1,
			Battle2,
			Battle3,
		];
	}

	resetGame() {
		Frank.resetUpgrades();

		this.cutsceneList = this.getFreshCutscenesList();
		this.battleList = this.getFreshBattleList();

		this.completedCutscenes = [];
		this.completedBattles = [];
		this.battleInProgress = null;
		this.lostBattle = false;
		this.playScreen(StartScreen);
	}
}