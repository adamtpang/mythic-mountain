import BattleMaker from "./battleMaker.js";
import Battle from "./battleLogic.js";
import { Frank, Draymond, Hector, Robert } from "./cast.js";

// uses the battle maker to create the first battle, with frank vs draymond, and the specific background and music of the fight
export class Battle1 {
	constructor(puppeteer) {
		this.puppeteer = puppeteer;
		this.audio = this.puppeteer.audio;
		this.backgroundSrc = "assets/background-art/twilight-pond.png";
		this.audioSrc = "music/xDeviruchi - And The Journey Begins .wav";
	}

	init() {
		// specify the players
		this.player = Frank;
		this.enemy = Draymond;

		// start the battle
		this.battleMaker = new BattleMaker(
			this.puppeteer,
			this.backgroundSrc,
			this.audioSrc,
			this.player,
			this.enemy,
			this
		).init();
	}
}

export class Battle2 {
	constructor(puppeteer) {
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

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
			fireknightImage.src = `assets/character-art/fireknight/idle_${i}.png`;
			this.fireknightFrames.push(fireknightImage);
		}

		this.playerFrame = 0;

		// create beholder
		this.beholder = new Image();
		this.beholder.src = "assets/character-art/beholder/beholder_fly.png";
		this.enemyFrame = 0;

		// find menu
		this.menu = document.querySelector(".HUD");

		// find mini menu
		this.miniMenu = document.querySelector(".mini-menu");

		// find buttons
		this.fightButton = document.querySelector("#fight-button");

		let player = Frank;
		let enemy = Hector;

		this.battle = new Battle(player, enemy, this);
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
			this.update();
			this.gameContainer.appendChild(this.playerCanvas);
			this.gameContainer.appendChild(this.enemyCanvas);
			this.playerFrame++;
			this.enemyFrame++;
		}, 100);
	}

	drawCharacter(
		context,
		canvas,
		image,
		srcX,
		srcY,
		srcWidth,
		srcHeight,
		destX,
		destY,
		destWidth,
		destHeight
	) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(
			image,
			srcX,
			srcY,
			srcWidth,
			srcHeight,
			destX,
			destY,
			destWidth,
			destHeight
		);
	}

	update() {
		// ...

		// Draw player
		const frames = [...this.fireknightFrames];
		let currentPlayerFrame = this.playerFrame % frames.length;
		const currentFireknight = frames[currentPlayerFrame];
		this.drawCharacter(
			this.playerContext,
			this.playerCanvas,
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

		// Draw enemy
		let beholderWidth = 64;
		let beholderFrames = 5;
		let slowDown = 3;
		let scaling = 12;
		this.enemyFrame = (this.enemyFrame + 1) % (beholderFrames * slowDown);
		this.drawCharacter(
			this.enemyContext,
			this.enemyCanvas,
			this.beholder,
			Math.floor(this.enemyFrame / slowDown) * beholderWidth,
			0,
			1000,
			1000,
			40,
			470,
			this.enemyCanvas.width * scaling,
			this.enemyCanvas.height * scaling
		);

		// ...
	}

	animateAttack(canvas, deltaX) {
		const originalX = canvas.style.left || "0px";
		const currentX = parseInt(originalX, 10);
		canvas.style.left = `${currentX + deltaX}px`;
		setTimeout(() => {
			canvas.style.left = originalX;
		}, 300);
	}

	animatePlayerAttack() {
		this.animateAttack(this.playerCanvas, 70);
	}

	animateEnemyAttack() {
		this.animateAttack(this.enemyCanvas, -70);
	}
}

export class Battle3 {
	constructor(puppeteer) {
		this.gameContainer = puppeteer.element;
		this.canvas = puppeteer.canvas;
		this.context = puppeteer.context;
		this.audio = puppeteer.audio;

		// create battle screen art
		this.battleScreenArt = new Image();
		this.battleScreenArt.src = "assets/background-art/gray-cave.png";

		// change audio
		this.audio.src = "music/xDeviruchi - Decisive Battle.wav";

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
			fireknightImage.src = `assets/character-art/fireknight/idle_${i}.png`;
			this.fireknightFrames.push(fireknightImage);
		}

		this.playerFrame = 0;

		// create dragon
		this.dragon = new Image();
		this.dragon.src = "assets/character-art/dragon/dragon_idle 1.png";
		this.enemyFrame = 0;

		// find menu
		this.menu = document.querySelector(".menu");

		// find mini menu
		this.miniMenu = document.querySelector(".mini-menu");

		// find buttons
		this.fightButton = document.querySelector("#fight-button");

		// find fight choice buttons
		this.fightChoices = [];
		for (let i = 1; i <= 4; i++) {
			this.fightChoices[i] = document.querySelector(`#fight${i}`);
		}

		let player = Frank;
		let enemy = Robert;

		this.battle = new Battle(
			puppeteer,
			this.playerCanvas,
			this.enemyCanvas,
			player,
			enemy
		);
		this.battle.init();
	}

	init() {
		this.menu.style.display = "flex";
		this.fightButton.addEventListener("click", () => {
			this.battle.onFightButton();
			this.fightButton.style.display = "none";
			this.miniMenu.style.flexWrap = "wrap";

			// for every choice, display it and add an event listener
			this.fightChoices.forEach((choice) => {
				choice.style.display = "block";
				choice.addEventListener("click", () => {
					this.battle.onFight(choice);
				});
			});
		});

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
		// 320/5 x 64
		let dragonWidth = 64;
		let dragonHeight = 64;
		let dragonFrames = 5;
		let slowDown = 3;
		let scaling = 8;

		if (this.enemyFrame < dragonFrames * slowDown) {
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
			this.dragon,
			Math.floor(this.enemyFrame / slowDown) * dragonWidth,
			0, // this slices the spritesheet into frames
			500,
			800,
			0,
			250,
			this.enemyCanvas.width * scaling,
			this.enemyCanvas.height * scaling
		);
	}
}
