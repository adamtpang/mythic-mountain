import { Frank } from "./cast";

export default class SceneMaker {
	constructor(puppeteer, sceneArt, sceneMusic, textContent, mode, upgrade) {
		this.puppeteer = puppeteer;
		this.sceneArt = sceneArt;
		this.sceneMusic = sceneMusic;
		this.textContent = textContent;
		this.mode = mode;
		this.upgrade = upgrade; // boolean

		this.gameContainer = this.puppeteer.element;
		this.canvas = this.puppeteer.canvas;
		this.context = this.puppeteer.context;
		this.audio = this.puppeteer.audio;

		this.textFrame = null;
		this.upgradesPresent = false
	}

	init() {
		// create scene art
		this.sceneArtImage = new Image();
		this.sceneArtImage.src = this.sceneArt;
		this.drawArt(this.sceneArtImage);

		// change audio
		this.audio.src = this.sceneMusic;

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

		this.startButton.addEventListener("click", () => {
			this.gameContainer.removeChild(this.startButton);
			this.puppeteer.playNextScene();
		});
	}

	createTextFrame() {
		// create scene textframe with html. and make it have a gray translucent background
		// create the profile pic
		// create the inner text
		this.textFrame = document.createElement("div");
		const profilePic = document.createElement("img");
		profilePic.src = "assets/character-art/fire_knight.png";
		const dialogueText = document.createElement("p");
		// add classes
		this.textFrame.classList.add("text-frame");
		profilePic.classList.add("profile-pic");
		dialogueText.classList.add("inner-text");
		// append
		this.textFrame.appendChild(profilePic);
		this.textFrame.appendChild(dialogueText);
		this.gameContainer.appendChild(this.textFrame);

		// Split the text content into an array of sentences
		let sentences = this.textContent;
		let currentSentence = sentences.shift(); // Include the full stop at the end of the sentence
		let sentenceArray = currentSentence.split("");
		let textDisplay = "";

		// Set the speed for the text to appear
		let textSpeed = 20; // in milliseconds

		// Create an interval to display the text incrementally
		let textInterval = setInterval(() => {
			if (sentenceArray.length > 0) {
				let nextChar = sentenceArray.shift();
				textDisplay += nextChar;
				dialogueText.innerHTML = textDisplay;

				// Check if the current sentence is the last one and if upgrade buttons should be created
				if (
					sentenceArray.length === 0 &&
					sentences.length === 0 &&
					this.upgrade
				) {
					clearInterval(textInterval);
					this.createUpgradeButtons();
				}
			} else {
				clearInterval(textInterval);
			}
		}, textSpeed);

		let textDone = false;

		// event listener to handle clicks
		this.textFrame.addEventListener("click", () => {
			// If there's still text to display in the current sentence
			if (sentences.length === 0 && this.upgrade) {
				textDone = true;
			} else if (sentenceArray.length > 0) {
				// Display all remaining text in the current sentence
				textDisplay += sentenceArray.join("");
				dialogueText.innerHTML = textDisplay;
				sentenceArray = []; // Empty the sentence array
			} else if (sentences.length > 0) {
				// If there are more sentences, start the next one
				currentSentence = sentences.shift();
				sentenceArray = currentSentence.split("");
				textDisplay = "";
				textInterval = setInterval(() => {
					if (sentenceArray.length > 0) {
						textDisplay += sentenceArray.shift();
						dialogueText.innerHTML = textDisplay;
					} else {
						clearInterval(textInterval);
					}
				}, textSpeed);
			} else {
				// If all text has been displayed, proceed to the next scene
				this.puppeteer.playNextScene();
			}
			// how do i make it so when the text is done, the upgrade buttons appear?
			// what condition do i need to check for?
			if (textDone && this.upgrade) {
				this.createUpgradeButtons();
			}
		});
	}

	createUpgradeButtons() {
		// make the attack and health buff upgrade buttons
		if (this.upgrade && !this.upgradesPresent) {
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
			this.attackUpgradeButton.addEventListener("click", () => {
				Frank.receiveAttackUpgrade();
				this.puppeteer.playNextScene();
			});
			this.healthUpgradeButton.addEventListener("click", () => {
				Frank.receiveVitalityUpgrade();
				this.puppeteer.playNextScene();
			});

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
		if (this.textFrame) {
			this.gameContainer.removeChild(this.textFrame);
		}
	}
}
