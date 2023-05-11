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
		this.render();
	}

	// helper function
	createElement(tag, options = {}) {
		const element = document.createElement(tag);
		Object.entries(options).forEach(
			([key, value]) => (element[key] = value)
		);
		return element;
	}

	// render all the HUD
	render() {
		const menu = document.querySelector(".HUD");
		const playerHUD = this.createTeamHUD("player");
		const dialogueBox = this.createDialogueBox();
		const miniMenu = this.createMiniMenu();
		const enemyHUD = this.createTeamHUD("enemy");

		menu.append(playerHUD, dialogueBox, miniMenu, enemyHUD);
		this.rendered = true;

		this.updateCharacterHUD(this.player);
		this.updateCharacterHUD(this.enemy);
	}

	// create the HUD for each character
	createTeamHUD(team) {
		const HUD = this.createElement("div", { id: `${team}-hud` });

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

		// Animate HP bar
		const animateHP = () => {
			const currentWidth = parseFloat(hpSlider.style.width);

			if (Math.abs(currentWidth - targetWidth) < 1) {
				hpSlider.style.width = targetWidth + "px";
				hpText.innerText = character.currentHP + " HP";
			} else {
				const newWidth =
					currentWidth + (targetWidth - currentWidth) * 0.1;
				hpSlider.style.width = newWidth + "px";
				const newRatio = newWidth / this.InitialHPWidth;
				hpSlider.style.backgroundColor = `rgb(${
					255 - newRatio * 255
				}, ${newRatio * 255}, 0)`;

				requestAnimationFrame(animateHP);
			}
		};

		requestAnimationFrame(animateHP);

		if (character === this.player) {
			this.updateAttackButtons();
		}
	}

	// update the moves for the player
	updateAttackButtons() {
		const moves = this.player.moves
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

	createMiniMenu() {
		const miniMenu = this.createElement("div", { className: "mini-menu" });
		const fightButton = this.createElement("button", {
			id: "fight-button",
			innerText: "Fight",
		});
		miniMenu.appendChild(fightButton);
		this.createAttackButtons(miniMenu, fightButton);
		return miniMenu;
	}

	createAttackButtons(miniMenu, fightButton) {
		// make the fight choices go: light gray, gray, dark gray, light green
		const colors = ["#D3D3D3", "#A9A9A9", "#696969", "#90EE90"];
		for (let i = 1; i <= 4; i++) {
			const choice = this.createElement("button", {
				id: `fight${i}`,
				className: "fight-choice",
				style: `background-color: ${colors[i - 1]}`,
			});

			miniMenu.appendChild(choice);

			choice.style.display = "none";

			choice.addEventListener("click", () =>
				this.battle.playerChoose(choice)
			);

			// add a hover effect for each choice that shows a modal with the move's damage and accuracy
			choice.addEventListener("mouseover", () => {
				// Get the move information
				const move = this.player.moves[i - 1];

				let moveInfo;
				if (move.isHeal) {
					moveInfo = `Healing: ${move.value}\n Accuracy: ${move.accuracy}`;
				} else {
					moveInfo = `Damage: ${move.value}\nAccuracy: ${move.accuracy}`;
				}

				// Save the original innerText
				choice.originalInnerText = choice.innerText;

				// Replace the innerText with the move info
				choice.innerText = moveInfo;
			});

			choice.addEventListener("mouseout", () => {
				// Restore the original innerText
				choice.innerText = choice.originalInnerText;
			});
		}

		fightButton.addEventListener("click", () => {
			fightButton.style.display = "none";
			miniMenu.style.flexWrap = "wrap";
			miniMenu
				.querySelectorAll(".fight-choice")
				.forEach((choice) => (choice.style.display = "block"));
		});
	}
}
