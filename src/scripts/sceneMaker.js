// makes each scene

// whats the problem? when i try to play the game again, the second time a cutscene is initialized, variables go undefined and the game crashes

import { Frank } from "./cast";

export default class SceneMaker {
	constructor(puppeteer, sceneArt, sceneMusic, textContent, mode, upgrade) {
		this.puppeteer = puppeteer;
		this.sceneArt = sceneArt;
		this.sceneMusic = sceneMusic;
		this.textContent = textContent;
		this.mode = mode;
		this.upgrade = upgrade;

		this.gameContainer = this.puppeteer.element;
		this.canvas = this.puppeteer.canvas;
		this.context = this.puppeteer.context;

		this.textFrame = null;
		this.upgradesPresent = false;

		// event handlers:
		this.startButtonClickHandler = () => {
			this.gameContainer.removeChild(this.startButton);
			this.puppeteer.playNextScene();
		};

		this.textFrameClickHandler = () => {
			// If the current sentence is being gradually displayed
			if (this.textInterval) {
				// Clear the existing interval
				clearInterval(this.textInterval);
				this.textInterval = null;

				// Display the full sentence immediately
				this.dialogueText.innerHTML = this.currentSentence;

				// Clear sentenceArray
				this.sentenceArray = [];
			} else if (this.sentences.length > 0) {
				this.graduallyDisplaySentence();
			} else {
				// check if there are upgrades to be given
				if (this.upgrade) {
					this.createUpgradeButtons();
				} else {
					this.puppeteer.playNextScene();
				}
			}
		};

		this.attackUpgradeClickHandler = () => {
			Frank.receiveAttackUpgrade();
			this.puppeteer.playNextScene();
		};

		this.healthUpgradeClickHandler = () => {
			Frank.receiveVitalityUpgrade();
			this.puppeteer.playNextScene();
		};
	}

	init() {
		this.puppeteer.audio.src = this.sceneMusic;
		this.puppeteer.audio.play()

		// create scene art
		this.sceneArtImage = new Image();
		this.sceneArtImage.src = this.sceneArt;
		this.drawArt(this.sceneArtImage);

		// Initialize this.sentences here
		this.sentences = [...this.textContent];

		if (this.mode === "start") {
			this.createStartButton();
		} else if (this.mode === "scene") {
			this.createTextFrame();
		}
	}

	drawArt(sceneArtImage) {
		// draw the art on canvas
		sceneArtImage.onload = () => {
			this.context.drawImage(
				sceneArtImage,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
		};
	}

	createStartButton() {
		this.startButton = document.createElement("button");
		this.startButton.classList.add("start-button");
		this.gameContainer.appendChild(this.startButton);

		this.startButton.addEventListener("click", this.startButtonClickHandler);
	}

	graduallyDisplaySentence() {
		this.currentSentence = this.sentences.shift();
		this.sentenceArray = this.currentSentence.split("");
		this.textDisplay = "";

		this.textSpeed = 25; // speed at which text will be displayed

		this.textInterval = setInterval(() => {
			if (this.sentenceArray.length > 0) {
				let nextChar = this.sentenceArray.shift();
				this.textDisplay += nextChar;
				this.dialogueText.innerHTML = this.textDisplay;
			} else {
				clearInterval(this.textInterval);
				this.textInterval = null;
			}
		}, this.textSpeed);
	}

	createTextFrame() {
		// create elements
		this.textFrame = document.createElement("div");

		const profilePic = document.createElement("img");
		profilePic.src = "assets/character-art/fire_knight.png";

		this.dialogueText = document.createElement("p");

		// add classes to them for styling
		this.textFrame.classList.add("text-frame");
		profilePic.classList.add("profile-pic");
		this.dialogueText.classList.add("inner-text");

		// append them to the game container
		this.textFrame.appendChild(profilePic);
		this.textFrame.appendChild(this.dialogueText);
		this.gameContainer.appendChild(this.textFrame);

		// add the first line of text in a gradual way
		this.graduallyDisplaySentence();

		// add event listener to text frame and pass in the remaining text
		this.textFrame.addEventListener("click", this.textFrameClickHandler);
	}

	createUpgradeButtons() {
		// if there already upgrade buttons dont make new ones

		// make the attack and health buff upgrade buttons
		if (this.upgrade && !this.upgradesPresent) {
			// Check if textFrame exists, if not create it
			if (!this.textFrame) {
				this.createTextFrame();
			}

			// create the elements
			this.upgradeContainer = document.createElement("div");
			this.attackUpgradeButton = document.createElement("button");
			this.healthUpgradeButton = document.createElement("button");

			// add classes to them for styling
			this.upgradeContainer.className = "upgrade-container";
			this.attackUpgradeButton.className = "attack-upgrade";
			this.healthUpgradeButton.className = "vitality-upgrade";

			// add text to each attack and health upgrade button
			this.attackUpgradeButton.innerText = "Upgrade Attack";
			this.healthUpgradeButton.innerText = "Upgrade Vitality";

			// finally, make and hookup the attack and health functions to the character.js script
			this.attackUpgradeButton.addEventListener("click", this.attackUpgradeClickHandler);
			this.healthUpgradeButton.addEventListener("click", this.healthUpgradeClickHandler);

			// append these buttons to the textframe flex box
			this.upgradeContainer.append(
				this.attackUpgradeButton,
				this.healthUpgradeButton
			);
			this.textFrame.append(this.upgradeContainer);
			this.upgradesPresent = true;
		}
	}

	destroy() {
		// If the textInterval is still running, clear it
		if (this.textInterval) {
			clearInterval(this.textInterval);
			this.textInterval = null;
		}

		// Remove event listeners
		if (this.startButton) {
			this.startButton.removeEventListener("click", this.startButtonClickHandler);
		}
		if (this.textFrame) {
			this.textFrame.removeEventListener("click", this.textFrameClickHandler);
		}
		if (this.attackUpgradeButton) {
			this.attackUpgradeButton.removeEventListener("click", this.attackUpgradeClickHandler);
		}
		if (this.healthUpgradeButton) {
			this.healthUpgradeButton.removeEventListener("click", this.healthUpgradeClickHandler);
		}

		// remove all game container children besides the game canvas
		while (this.gameContainer.firstChild) {
			if (this.gameContainer.firstChild.nodeName !== 'CANVAS') {
				this.gameContainer.removeChild(this.gameContainer.firstChild);
			} else if (this.gameContainer.lastChild.nodeName !== 'CANVAS') {
				this.gameContainer.removeChild(this.gameContainer.lastChild);
			} else {
				break;
			}
		}

		// Reset other properties
		this.startButton = null;
		this.upgradeContainer = null;
		this.attackUpgradeButton = null;
		this.healthUpgradeButton = null;
		this.upgradesPresent = false;
		this.textFrame = null;
	}
}
