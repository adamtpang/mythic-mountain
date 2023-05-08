import Battle from "./battleLogic.js";
import { Frank, Hector } from "./characters.js";

export default class Battle2 {
	constructor(overworld) {
		this.gameContainer = overworld.element;
		this.canvas = overworld.canvas;
		this.context = overworld.context;
		this.audio = overworld.audio;

		// create battle screen art
		this.battleScreenArt = new Image();
		this.battleScreenArt.src = "assets/background-art/night-forest.png";

		// change audio
		this.audio.src = "music/xDeviruchi - And The Journey Begins .wav";

		// Function to create and configure canvas and context
		function createCanvasAndContext(container, className) {
			const canvas = document.createElement("canvas");
			canvas.classList.add(className);
			canvas.width = container.offsetWidth / 2;
			canvas.height = container.offsetHeight;
			const context = canvas.getContext("2d");
			context.imageSmoothingEnabled = false;

			container.appendChild(canvas);

			return { canvas, context };
		}

		// Create sprite canvases and contexts
		const { canvas: playerCanvas, context: playerContext } =
			createCanvasAndContext(this.gameContainer, "player-canvas");
		const { canvas: enemyCanvas, context: enemyContext } =
			createCanvasAndContext(this.gameContainer, "enemy-canvas");

		// Set the created canvases and contexts to the class properties
		this.playerCanvas = playerCanvas;
		this.playerContext = playerContext;
		this.enemyCanvas = enemyCanvas;
		this.enemyContext = enemyContext;

		// create fireknight
		this.fireknightFrames = [];
		for (let i = 1; i <= 8; i++) {
			const fireknightImage = new Image();
			fireknightImage.src = `assets/battle-art/fireknight/idle_${i}.png`;
			this.fireknightFrames.push(fireknightImage);
		}

		this.playerFrame = 0;

		// create beholder
		this.beholder = new Image();
		this.beholder.src = "assets/battle-art/beholder/beholder_fly.png";
		this.enemyFrame = 0;

		// find menu
		this.menu = document.querySelector(".HUD");

		// find mini menu
		this.miniMenu = document.querySelector(".mini-menu");

		// find buttons
		this.fightButton = document.querySelector("#fight-button");

		let player = Frank;
		let enemy = Hector;

		this.battle = new Battle(
			player,
			enemy
		);
		this.battle.init();
	}

	init() {
		this.menu.style.display = "flex";

		this.battleScreenArt.onload = () => {
			// this.audio.play();
			this.context.drawImage(
				this.battleScreenArt,
				0,
				0,
				this.canvas.width,
				this.canvas.height
			);
			this.animateCombatants();
		};
	}

	animateCombatants() {
		setInterval(() => {
			this.drawPlayer();
			this.drawEnemy();
			this.gameContainer.appendChild(this.playerCanvas);
			this.gameContainer.appendChild(this.enemyCanvas);
			this.playerFrame++;
			this.enemyFrame++;
		}, 100);
	}

	drawPlayer() {
		// animating with frames
		// 228 x 128
		const frames = [...this.fireknightFrames];
		let currentPlayerFrame = this.playerFrame % frames.length;
		const currentFireknight = frames[currentPlayerFrame];
		this.playerContext.clearRect(
			0,
			0,
			this.playerCanvas.width,
			this.playerCanvas.height
		);
		this.playerContext.drawImage(
			currentFireknight,
			80,
			62,
			this.playerCanvas.width,
			this.playerCanvas.height,
			-50,
			400,
			this.playerCanvas.width * 6,
			this.playerCanvas.height * 6
		);
	}

	drawEnemy() {
		// animating with spritesheet
		// 64 x 32
		let beholderWidth = 64;
		let beholderFrames = 5;
		let slowDown = 3;
		let scaling = 12;

		if (this.enemyFrame < beholderFrames * slowDown) {
			this.enemyFrame++;
		} else {
			this.enemyFrame = 0;
		}
		this.enemyContext.clearRect(
			0,
			0,
			this.enemyCanvas.width,
			this.enemyCanvas.height
		);
		this.enemyContext.drawImage(
			this.beholder,
			Math.floor(this.enemyFrame / slowDown) * beholderWidth,
			0, // this slices the spritesheet into frames
			1000,
			1000,
			40,
			470,
			this.enemyCanvas.width * scaling,
			this.enemyCanvas.height * scaling
		);
	}
}

// image,
// sourceX, sourceY,
// sourceWidth, sourceHeight,
// destinationX, destinationY,
// destinationWidth, destinationHeight
