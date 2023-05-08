import Battle3 from "./battle3";

import { Frank } from "./characters";

export default class Cutscene3 {
	constructor(overworld) {
		this.overworld = overworld;
		this.gameContainer = overworld.element;
		this.canvas = overworld.canvas;
		this.context = overworld.context;
		this.audio = overworld.audio;

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
			this.overworld.changeScreen(BattleScreen2);
		});

		this.healthButton.addEventListener("click", () => {
			Frank.receiveHealthUpgrade(30);
            this.gameContainer.removeChild(this.textFrame);
			this.overworld.changeScreen(Battle3);
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
