import BattleLogic from "./battleLogic.js";

export default class BattleMaker {
	constructor(puppeteer, backgroundSrc, audioSrc, player, enemy) {
		this.puppeteer = puppeteer;
		this.backgroundSrc = backgroundSrc;
		this.audioSrc = audioSrc;
		this.player = player;
		this.enemy = enemy;

		this.gameContainer = this.puppeteer.element;
		this.canvas = this.puppeteer.canvas;
		this.context = this.puppeteer.context;
		this.audio = this.puppeteer.audio;

		// Create battle screen art
		this.battleScreenArt = new Image();
		this.battleScreenArt.src = this.backgroundSrc;

		// Change audio
		this.audio.src = this.audioSrc;

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
	}

	init() {
		// start the battle
		this.battle = new BattleLogic(this, this.player, this.enemy).init();

		// make the menu visible
		this.menu = document.querySelector(".HUD");
		this.menu.style.display = "flex";

		// when the art loads, draw the art on it
		this.battleScreenArt.onload = () => {
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

	// take in an image and draw it on the proper canvas
	drawCharacter(character) {
		let canvas, context;
		if (character.team === "player") {
			canvas = this.playerCanvas;
			context = this.playerContext;
		} else {
			canvas = this.enemyCanvas;
			context = this.enemyContext;
		}

		let image,
			srcX,
			srcY,
			srcWidth,
			srcHeight,
			destX,
			destY,
			destWidth,
			destHeight,
			width,
			frameCount,
			slowDown,
			scaling;

		image = character.spriteSheet;
		width = character.width;
		frameCount = character.frameCount || 0;
		slowDown = character.slowDown || 1;
		scaling = character.scaling || 1;

		srcX = Math.floor(frameCount / slowDown) * width;
		srcY = character.srcY;

		srcWidth = character.srcWidth;
		srcHeight = character.srcHeight;
		destX = character.destX;
		destY = character.destY;

		destWidth = canvas.width * scaling;
		destHeight = canvas.height * scaling;

		// Clear and draw the image on the canvas
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

	// cycle through a character's spritesheet and call "drawCharacter" to draw the character on the canvas
	animateCombatants() {
		setInterval(() => {
			console.log("animating")

			this.drawCharacter(this.player);
			this.playerFrame++;

			this.drawCharacter(this.enemy);
			this.enemyFrame++;
		}, 100);
	}

	animateAttack(character) {
		let canvas;
		if (character.team === "player") {
			canvas = this.playerCanvas;
		} else if (character.team === "enemy") {
			canvas = this.enemyCanvas;
		}
		const originalX = canvas.style.left || "0px";
		const currentX = parseInt(originalX, 10);
		canvas.style.left = `${currentX + character.deltaX}px`;
		setTimeout(() => {
			canvas.style.left = originalX;
		}, 300);
	}
}
