// should handle all the visual elements of the battle on the HUD
export default class BattleHUD {
	constructor(battle) {
		this.battle = battle;
		this.player = battle.player;
		this.enemy = battle.enemy;
		this.rendered = false;
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

		this.updateUnitHUD(this.player);
		this.updateUnitHUD(this.enemy);
	}

	// create the HUD for each unit
	createTeamHUD(team) {
		const HUD = this.createElement("div", { id: `${team}-hud` });
		HUD.append(
			this.createElement("img", { src: "assets/menu/hud.png" }),
			this.createElement("p", { className: `${team}-name` }),
			this.createElement("div", { className: `${team}-hp` }) // put text into this div with innerText = hp
		);
		return HUD;
	}

	// properly set/update the correct values for each unit
	updateUnitHUD(unit) {
		const nameText = document.querySelector(`.${unit.team}-name`);
		const hpSlider = document.querySelector(`.${unit.team}-hp`);

		nameText.innerText = unit.name;
		hpSlider.style.width = `${
			(unit.currentHP / unit.maxHP) * hpSlider.offsetWidth
		}px`;

		if (unit.team === "player") {
			unit.moves.forEach((move, index) => {
				const button = document.getElementById(`fight${index + 1}`);
				button.innerHTML = `${move.name} |${move.damage}, ${move.accuracy}%|`;
			});
		}
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
			src: "assets/menu/basic container.png",
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
		this.createFightChoices(miniMenu, fightButton);
		return miniMenu;
	}

	createFightChoices(miniMenu, fightButton) {
		for (let i = 1; i <= 4; i++) {
			const choice = this.createElement("button", {
				id: `fight${i}`,
				className: "fight-choice",
			});
			miniMenu.appendChild(choice);
			choice.style.display = "none";

			choice.addEventListener("click", () =>
				this.battle.chooseMove(choice)
			);
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
