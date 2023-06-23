// takes care of the battle's visual HUD instance and updations

// what is the problem?
// the battlehud is being rendered twice, so the current battle's hud is being rendered under the previous battle's hud

// should handle all the visual elements of the battle on the HUD
export default class BattleHUD {
	constructor(battle) {
		this.battle = battle;
		this.player = battle.player;
		this.enemy = battle.enemy;
		this.InitialHPWidth = 260;
	}

	// init and destroy
	init() {
		// find the hud container
		const hudContainer = document.querySelector(".hud-container");

		// create a hud
		const hud = this.createElement("div", { className: "HUD" });

		// create the 4 rectangles
		const playerHUD = this.createTeamHUD("player");
		const dialogueBox = this.createDialogueBox();
		const moveMenu = this.createMoveMenu();
		const enemyHUD = this.createTeamHUD("enemy");

		// append them to the hud found above
		hud.append(playerHUD, dialogueBox, moveMenu, enemyHUD);

		// append the hud to its container
		hudContainer.append(hud);

		this.updateCharacterHUD(this.player);
		this.updateCharacterHUD(this.enemy);
	}

	destroy() {
		const hudContainer = document.querySelector(".hud-container");

		hudContainer.innerHTML = "";
	}

	// helper function
	createElement(tag, options = {}) {
		const element = document.createElement(tag);
		Object.entries(options).forEach(
			([key, value]) => (element[key] = value)
		);
		return element;
	}

	// team HUD tings. rectangles 1 and 4
	createTeamHUD(team) {
		const HUD = this.createElement("div", { id: `${team}-hud`, className: "HUD-display-flex" });
		// create a special info div for just the 4 below elements
		const teamInfoBox = this.createElement("div", { className: `${team}-info-box` });

		HUD.append(
			this.createElement("img", {
				src: `assets/UI-art/${team}-hud.png`,
			}),
		);

		teamInfoBox.append(
			this.createElement("div", { className: `${team}-hp-border` }),
			this.createElement("div", { className: `${team}-hp` }), // put text into this div with innerText = hp
			this.createElement("p", { className: `${team}-hp-num` }),
			this.createElement("p", { className: `${team}-name` })
		);

		HUD.append(teamInfoBox); // Append teamInfoBox to HUD

		return HUD;
	}

	updateCharacterHUD(character) {
		// setting the name
		const characterName = document.querySelector(`.${character.team}-name`);
		characterName.innerText = character.name;

		// saving start HP as the max HP if its not already there
		// the question is when does this var get reassigned? after the animation is done!

		// if there isnt a startHP var
		if (character.team == "player") {
			if (!this.startHPPlayer) {
				this.startHPPlayer = character.maxHP;
			}
			this.finishHPPlayer = character.currentHP;
			if (this.finishHPPlayer < 0) {
				this.finishHPPlayer = 0;
			}
		} else if (character.team == "enemy") {
			if (!this.startHPEnemy) {
				this.startHPEnemy = character.maxHP;
			}
			this.finishHPEnemy = character.currentHP;
			if (this.finishHPEnemy < 0) {
				this.finishHPEnemy = 0;
			}
		}

		this.animateHPThings(character).then(() => {
			// after animating the hp things, set the starthp to be the finishhp for the next time theres a characterHUD update
			if (character.team == "player") {
				this.startHPPlayer = this.finishHPPlayer;
			} else if (character.team == "enemy") {
				this.startHPEnemy = this.finishHPEnemy;
			}
		});
	}

	animateHPThings(character) {
		return new Promise((resolve, reject) => {
			try {
				if (character.team == "player") {
					this.animateHPNum(character, this.startHPPlayer, this.finishHPPlayer);
					this.animateHPBar(character, this.startHPPlayer, this.finishHPPlayer);
				} else if (character.team == "enemy") {
					this.animateHPNum(character, this.startHPEnemy, this.finishHPEnemy);
					this.animateHPBar(character, this.startHPEnemy, this.finishHPEnemy);
				}
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}

	animateHPNum(character, startHP, finishHP) {
		// animate the hp num
		const hpNum = document.querySelector(`.${character.team}-hp-num`);

		// if the hp num is not the same as the finishHP, then animate it
		if (startHP != finishHP) {
			let interval = setInterval(() => {
				if (startHP > finishHP) {
					startHP -= 1;
					hpNum.innerText = startHP;
				} else if (startHP < finishHP) {
					startHP += 1;
					hpNum.innerText = startHP
				} else {
					clearInterval(interval);
				}
			}, 20);
		} else {
			hpNum.innerText = finishHP;
		}
	}

	animateHPBar(character, startHP, finishHP) {
		// animate the hp bar
		const hpBar = document.querySelector(`.${character.team}-hp`);

		// if the hp bar is not the same as the finishHP, then animate it
		if (startHP != finishHP) {
			let interval = setInterval(() => {
				if (startHP > finishHP) {
					startHP -= 1;
					hpBar.style.width = `${startHP / character.maxHP * this.InitialHPWidth}px`;
				} else if (startHP < finishHP) {
					startHP += 1;
					hpBar.style.width = `${startHP / character.maxHP * this.InitialHPWidth}px`;
				} else {
					clearInterval(interval);
				}
			}, 20);
		} else {
			hpBar.style.width = `${finishHP / character.maxHP * this.InitialHPWidth}px`;
		}
	}

	// rectangle 2
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

	// rectangle 3 + moves
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
				className: `fight-choice fight-choice-color${i}`,
				innerText: moves[i - 1].name,
			});

			const tooltip = this.createElement("div", {
				className: "tooltip",
				innerText: "",
			});

			choice.appendChild(tooltip);

			moveMenu.appendChild(choice);

			choice.style.display = "none";

			choice.addEventListener("click", () => {
				// Hide the tooltip
				tooltip.style.display = "none";
				this.battle.playerChoose(choice);
			});

			// Add a hover effect for each choice that shows a tooltip with the move's damage and accuracy
			choice.addEventListener("mouseover", () => {
				// Check if the button is disabled
				if (choice.disabled) {
					return;
				}

				// Get the move information
				const move = this.player.moves[i - 1];

				if (move) {
					let moveInfo;
					if (move.isHeal) {
						moveInfo = `Healing: ${move.value} Accuracy: ${move.accuracy}`;
					} else {
						moveInfo = `Damage: ${move.value} Accuracy: ${move.accuracy}`;
					}

					// Set the tooltip innerText with the move info
					tooltip.innerText = moveInfo;

					// Show the tooltip
					tooltip.style.display = "block";

					// Constantly update the tooltip if the mouse moves
					choice.addEventListener("mousemove", () => {
						// Check if the button is disabled
						if (choice.disabled) {
							// Hide the tooltip
							tooltip.style.display = "none";
						} else {
							// Show the tooltip
							tooltip.style.display = "block";
						}
					});
				}
			});

			choice.addEventListener("mouseout", () => {
				// Check if the button is disabled
				if (choice.disabled) {
					return;
				}

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

	updateAttackButtons() {
		const moves = this.player.moves;
		moves.forEach((move, index) => {
			move.innerText = this.player.moves[index].name;
		});
	}
}
