import { Battle1, Battle2, Battle3 } from "./battles";
import { Frank } from "./cast";

export class StartScreen {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// create start screen art and start button
		this.startScreenArt = new Image();
		this.startButton = new Image();
		this.startScreenArt.src = "assets/UI-art/Start Screen.png";
		this.startButton.src = "assets/UI-art/Start Button.png";

		// change audio
		this.audio.src = "music/xDeviruchi - Title Theme .wav";

		// find menu
		this.HUD = document.querySelector(".HUD");
	}

	init() {
		this.HUD.style.display = "none";
		this.startScreenArt.onload = () => {
			this.context.drawImage(
				this.startScreenArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
			this.gameContainer.appendChild(this.startButton);
		};

		this.startButton.addEventListener("click", () => {
			this.gameContainer.removeChild(this.startButton);
			this.puppeteer.changeScreen(Cutscene1);
		});
	}
}

export class Cutscene1 {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// create cutscene art
		this.cutsceneArt = new Image();
		this.cutsceneArt.src = "assets/background-art/above-mountains.png";

		// create cutscene textframe with html. and make it have a gray translucent background
		this.textFrame = document.createElement("div");
		this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <p>Your name is Frank.</p>
            <p>You find yourself on a quest to North Mountain.</p>
            <p>In the distance, you see a cave embedded on the mountain's side.</p>
            <p>It's the cave of the dragon Robert! He's been terrorizing the land for years.</p>
            <p>It is time to put an end to his reign of terror.</p>
            <p>But first, you must defeat the dragon's toughest minion.</p>
            <br>
            <br>
            <p>Click to continue...</p>
        `;
		this.textFrame.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		this.textFrame.style.zIndex = "1";
		this.textFrame.style.position = "absolute";
		this.textFrame.style.top = "0";
		this.textFrame.style.left = "0";
		this.textFrame.style.width = "100%";
		this.textFrame.style.height = "100%";
		this.textFrame.style.textAlign = "center";
		this.textFrame.style.fontSize = "30px";
		this.textFrame.style.color = "white";
		this.textFrame.style.fontFamily = "sans-serif";
		this.gameContainer.appendChild(this.textFrame);

		// change audio
		this.audio.src = "music/xDeviruchi - Mysterious Dungeon.wav";
	}

	init() {
		this.cutsceneArt.onload = () => {
			this.context.drawImage(
				this.cutsceneArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
		};
		this.textFrame.addEventListener("click", () => {
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(Battle1);
		});
	}
}

export class Cutscene2 {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// find game container
		this.gameContainer = document.querySelector(".game-container");

		// find menu
		this.menu = document.querySelector(".menu");

		// clear menu
		this.menu.style.display = "none";

		// create cutscene art
		this.cutsceneArt = new Image();
		this.cutsceneArt.src = "assets/background-art/blue-cave.png";

		// create cutscene textframe with html. and make it have a gray translucent background
		this.textFrame = document.createElement("div");
		this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>You make your way up the mountain, and enter the cave.</p>
            <p>It's dark and cold in here.</p>
            <p>With sword in hand, you are ready.</p>
            <p>You face the beast, undaunted.</p>
            <br>
            <br>
            <br>
            <p>Choose an upgrade:</p>
        `;
		this.textFrame.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		this.textFrame.style.zIndex = "1";
		this.textFrame.style.position = "absolute";
		this.textFrame.style.top = "0";
		this.textFrame.style.left = "0";
		this.textFrame.style.width = "100%";
		this.textFrame.style.height = "100%";
		this.textFrame.style.textAlign = "center";
		this.textFrame.style.fontSize = "30px";
		this.textFrame.style.color = "white";
		this.textFrame.style.fontFamily = "sans-serif";
		this.gameContainer.appendChild(this.textFrame);

		// change audio
		this.audio.src = "music/xDeviruchi - Mysterious Dungeon.wav";

		this.attackButton = document.createElement("button");
		this.attackButton.innerText = "Upgrade Attack";
		this.attackButton.style.marginRight = "20px";
		this.attackButton.style.fontSize = "24px";
		this.attackButton.style.padding = "10px";
		this.attackButton.style.backgroundColor = "red";
		this.attackButton.style.color = "white";
		this.textFrame.appendChild(this.attackButton);

		this.healthButton = document.createElement("button");
		this.healthButton.innerText = "Upgrade Health";
		this.healthButton.style.fontSize = "24px";
		this.healthButton.style.padding = "10px";
		this.healthButton.style.backgroundColor = "green";
		this.healthButton.style.color = "white";
		this.textFrame.appendChild(this.healthButton);

		this.attackButton.addEventListener("click", () => {
			Frank.receiveAttackUpgrade(10);
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(Battle2);
		});

		this.healthButton.addEventListener("click", () => {
			Frank.receiveHealthUpgrade(30);
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(Battle2);
		});
	}

	init() {
		this.cutsceneArt.onload = () => {
			this.context.drawImage(
				this.cutsceneArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
		};
	}
}

export class Cutscene3 {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// find game container
		this.gameContainer = document.querySelector(".game-container");

		// find menu
		this.menu = document.querySelector(".menu");

		// clear menu
		this.menu.style.display = "none";

		// create cutscene art
		this.cutsceneArt = new Image();
		this.cutsceneArt.src = "assets/background-art/blue-cave.png";

		// create cutscene textframe with html. and make it have a gray translucent background
		this.textFrame = document.createElement("div");
		this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>You make your way up the mountain, and enter the cave.</p>
            <p>It's dark and cold in here.</p>
            <p>With sword in hand, you are ready.</p>
            <p>You face the beast, undaunted.</p>
            <br>
            <br>
            <br>
            <p>Choose an upgrade:</p>
        `;
		this.textFrame.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		this.textFrame.style.zIndex = "1";
		this.textFrame.style.position = "absolute";
		this.textFrame.style.top = "0";
		this.textFrame.style.left = "0";
		this.textFrame.style.width = "100%";
		this.textFrame.style.height = "100%";
		this.textFrame.style.textAlign = "center";
		this.textFrame.style.fontSize = "30px";
		this.textFrame.style.color = "white";
		this.textFrame.style.fontFamily = "sans-serif";
		this.gameContainer.appendChild(this.textFrame);

		// change audio
		this.audio.src = "music/xDeviruchi - Mysterious Dungeon.wav";

		this.attackButton = document.createElement("button");
		this.attackButton.innerText = "Upgrade Attack";
		this.attackButton.style.marginRight = "20px";
		this.attackButton.style.fontSize = "24px";
		this.attackButton.style.padding = "10px";
		this.attackButton.style.backgroundColor = "red";
		this.attackButton.style.color = "white";
		this.textFrame.appendChild(this.attackButton);

		this.healthButton = document.createElement("button");
		this.healthButton.innerText = "Upgrade Health";
		this.healthButton.style.fontSize = "24px";
		this.healthButton.style.padding = "10px";
		this.healthButton.style.backgroundColor = "green";
		this.healthButton.style.color = "white";
		this.textFrame.appendChild(this.healthButton);

		this.attackButton.addEventListener("click", () => {
			Frank.receiveAttackUpgrade(10);
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(BattleScreen2);
		});

		this.healthButton.addEventListener("click", () => {
			Frank.receiveHealthUpgrade(30);
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(Battle3);
		});
	}

	init() {
		this.cutsceneArt.onload = () => {
			this.context.drawImage(
				this.cutsceneArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
		};
	}
}

export class Cutscene4 {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// find game container
		this.gameContainer = document.querySelector(".game-container");

		// find menu
		this.menu = document.querySelector(".menu");

		// clear menu
		this.menu.style.display = "none";

		// create cutscene art
		this.cutsceneArt = new Image();
		this.cutsceneArt.src = "assets/background-art/mountain-water.png";

		// create cutscene textframe with html. and make it have a gray translucent background
		this.textFrame = document.createElement("div");
		this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <p>You have slain Robert, the bane of all.</p>
            <p>You've accomplished all you set out to.</p>
            <p>What is next for you? Who knows...</p>
            <p>But for now, you can rest easy.</p>
            <p>Maybe fight another dragon ¯\\_(ツ)_/¯ ?</p>
            <br>
            <br>
            <p>Click to return...</p>
        `;
		this.textFrame.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		this.textFrame.style.zIndex = "1";
		this.textFrame.style.position = "absolute";
		this.textFrame.style.top = "0";
		this.textFrame.style.left = "0";
		this.textFrame.style.width = "100%";
		this.textFrame.style.height = "100%";
		this.textFrame.style.textAlign = "center";
		this.textFrame.style.fontSize = "30px";
		this.textFrame.style.color = "white";
		this.textFrame.style.fontFamily = "sans-serif";
		this.gameContainer.appendChild(this.textFrame);

		// change audio
		this.audio.src = "music/xDeviruchi - The Final of The Fantasy.wav";
	}

	init() {
		this.cutsceneArt.onload = () => {
			this.context.drawImage(
				this.cutsceneArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
		};
		this.textFrame.addEventListener("click", () => {
			this.gameContainer.removeChild(this.textFrame);
			this.puppeteer.changeScreen(StartScreen);
		});
	}
}
