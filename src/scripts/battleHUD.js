// should handle all the visual elements of the battle on the HUD
export default class BattleHUD {
	constructor(battle) {
		this.battle = battle;
		this.player = battle.player;
		this.enemy = battle.enemy;
		this.rendered = false;
		this.InitialHPWidth = 260;
	}

	init() {
		const hudContainer =
			document.getElementsByClassName("hud-container")[0];
		const hud = this.createElement("div", { className: "HUD" });
		hudContainer.append(hud);

		const playerHUD = this.createTeamHUD("player");
		const dialogueBox = this.createDialogueBox();
		const moveMenu = this.createMoveMenu();
		const enemyHUD = this.createTeamHUD("enemy");

		hud.append(playerHUD, dialogueBox, moveMenu, enemyHUD);

		this.updateCharacterHUD(this.player);
		this.updateCharacterHUD(this.enemy);
		this.rendered = true;
	}

	// helper function
	createElement(tag, options = {}) {
		const element = document.createElement(tag);
		Object.entries(options).forEach(
			([key, value]) => (element[key] = value)
		);
		return element;
	}

	// create the HUD for each character
	createTeamHUD(team) {
		const HUD = this.createElement("div", { id: `${team}-hud` });
		// make the HUD display flex
		HUD.style.display = "flex";
		HUD.append(
			this.createElement("img", {
				src: `assets/UI-art/${team}-hud.png`,
			}),
			this.createElement("div", { className: `${team}-hp-border` }),
			this.createElement("div", { className: `${team}-hp` }), // put text into this div with innerText = hp
			this.createElement("p", { className: `${team}-hp-num` }),
			this.createElement("p", { className: `${team}-name` })
			// make a p element with the hp in it
		);
		return HUD;
	}

	updateCharacterHUD(character) {
		// getting the name and hp elements
		const nameText = document.querySelector(`.${character.team}-name`);
		const hpSlider = document.querySelector(`.${character.team}-hp`);
		const hpText = document.querySelector(`.${character.team}-hp-num`);

		// setting the values for the name and hp elements based on the character
		nameText.innerText = character.name;

		// Initialize the width of the HP bar if it hasn't been set yet
		if (!hpSlider.style.width || hpSlider.style.width === "") {
			hpSlider.style.width = this.InitialHPWidth + "px";
		}

		const targetWidth =
			(character.currentHP / character.maxHP) * this.InitialHPWidth;
		const currentWidth = parseFloat(hpSlider.style.width);

		let frameId = null;

		// Animate HP bar
		const animateHP = () => {
			const currentWidth = parseFloat(hpSlider.style.width);
			const epsilon = 0.01;

			if (Math.abs(currentWidth - targetWidth) < epsilon) {
				hpSlider.style.width = targetWidth + "px";
				hpText.innerText = character.currentHP + " HP";
				cancelAnimationFrame(frameId); // cancel the animation frame
			} else {
				const newWidth =
					currentWidth + (targetWidth - currentWidth) * 0.1;
				hpSlider.style.width = newWidth + "px";
				const newRatio = newWidth / this.InitialHPWidth;
				hpSlider.style.backgroundColor = `rgb(${
					255 - newRatio * 255
				}, ${newRatio * 255}, 0)`;

				cancelAnimationFrame(frameId); // cancel the previous frame
				frameId = requestAnimationFrame(animateHP); // save the frame request id
			}
		};

		frameId = requestAnimationFrame(animateHP);

		if (character === this.player) {
			this.updateAttackButtons();
		}
	}

	// update the moves for the player
	updateAttackButtons() {
		const moves = this.player.moves;
		moves.forEach((move, index) => {
			move.innerText = this.player.moves[index].name;
		});
	}

	createDialogueBox() {
		const dialogueBox = this.createElement("div", {
			className: "dialogue",
		});

		const text = this.createElement("p", {
			id: "dialogue-text",
			innerText: "Choose a move!",
		});
		const image = this.createElement("img", {
			id: "dialogue-img",
			src: "assets/UI-art/basic container.png",
		});
		dialogueBox.append(text, image);
		return dialogueBox;
	}

	createMoveMenu() {
		const moveMenu = this.createElement("div", { className: "mini-menu" });
		const fightButton = this.createElement("button", {
			id: "fight-button",
			innerText: "Fight",
		});
		moveMenu.appendChild(fightButton);
		this.createMoveButtons(moveMenu, fightButton);
		return moveMenu;
	}

	createMoveButtons(moveMenu, fightButton) {
		// make the fight choices go: light gray, gray, dark gray, light green
		const colors = ["#D3D3D3", "#A9A9A9", "#696969", "#90EE90"];
		const moves = this.player.moves;
		for (let i = 1; i <= 4; i++) {
			const choice = this.createElement("button", {
				id: `fight${i}`,
				className: "fight-choice",
				style: `background-color: ${colors[i - 1]}`,
				innerText: moves[i - 1].name,
			});

			// Create a tooltip element
			const tooltip = this.createElement("div", {
				className: "tooltip",
				innerText: "",
				style: "display: none; position: absolute; bottom: 100%; color: white",
			});

			choice.appendChild(tooltip);

			moveMenu.appendChild(choice);

			choice.style.display = "none";

			choice.addEventListener("click", () =>
				this.battle.playerChoose(choice)
			);

			// Add a hover effect for each choice that shows a tooltip with the move's damage and accuracy
			choice.addEventListener("mouseover", () => {
				// Get the move information
				const move = this.player.moves[i - 1];

				if (move) {
					let moveInfo;
					if (move.isHeal) {
						moveInfo = `Healing: ${move.value}\n Accuracy: ${move.accuracy}`;
					} else {
						moveInfo = `Damage: ${move.value}\nAccuracy: ${move.accuracy}`;
					}

					// Set the tooltip innerText with the move info
					tooltip.innerText = moveInfo;

					// Show the tooltip
					tooltip.style.display = "block";
				}
			});

			choice.addEventListener("mouseout", () => {
				// Hide the tooltip
				tooltip.style.display = "none";
			});
		}

		fightButton.addEventListener("click", () => {
			fightButton.style.display = "none";
			moveMenu.style.flexWrap = "wrap";
			moveMenu
				.querySelectorAll(".fight-choice")
				.forEach((choice) => (choice.style.display = "block"));
		});
	}
}
