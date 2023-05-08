import BattleHUD from "./battleHUD.js";

// should only pertain to pure battle logic
// having a standardized lingo for the battle logic will make it easier to understand
export default class BattleLogic {
	constructor(player, enemy) {
		this.player = player;
		this.enemy = enemy;
		this.battleState = "Start";
		this.dialogueDelay = 1000;
	}

	init() {
		// console.log(this.player, this.enemy)
		this.battleHUD = new BattleHUD(this);
		this.battleHUD.init();
		this.initializeElements();
	}

	initializeElements() {
		this.fightChoices = document.querySelectorAll(".fight-choice");
		this.dialogue = document.getElementById("dialogue-text");
	}

	onFightButton() {
		this.playerTurn();
	}

	playerTurn() {
		this.enableButtons();
		this.battleState = "PlayerTurn";
		this.dialogue.innerText = "Choose a move!";
	}

	enemyTurn() {
		this.battleState = "EnemyTurn";
		this.dialogue.innerText = `${this.enemy.name} is thinking...`;
	}

	disableButtons() {
		this.fightChoices.forEach((choice) => (choice.disabled = true));
	}

	enableButtons() {
		this.fightChoices.forEach((choice) => (choice.disabled = false));
	}

	chooseMove(choice) {
		this.disableButtons();
		const playerMove = this.player.moves[choice.id.slice(-1) - 1];
		this.dialogue.innerText = `${this.player.name} used ${playerMove.name}!`;

		console.log("playerMove", playerMove);

		setTimeout(() => {
			if (playerMove.isHeal) {
				this.heal(this.player, playerMove.value);
			} else {
				this.attack(
					this.player,
					this.enemy,
					playerMove.value,
					playerMove.accuracy
				);
			}
		}, this.dialogueDelay);
	}

	enemyChoosesMove() {
		let enemyMoves = [
			this.enemy.move1,
			this.enemy.move2,
			this.enemy.move3,
			this.enemy.move4,
		];
		let randomMove =
			enemyMoves[Math.floor(Math.random() * enemyMoves.length)];

		this.dialogue.innerText = `${this.enemy.name} used ${randomMove.name}!`;

		console.log("randomMove", randomMove);

		setTimeout(() => {
			if (randomMove.isHeal) {
				this.enemy.heal(randomMove.value);
			} else {
				this.attack(
					this.enemy,
					this.player,
					randomMove.value,
					randomMove.accuracy
				);
			}
		}, this.dialogueDelay);
	}

	attack(attacker, defender, value, accuracy) {
		if (Math.random() * 100 > accuracy) {
			this.dialogue.innerText = "The attack missed!";
			this.battleState =
				attacker === this.player ? "EnemyTurn" : "PlayerTurn";
			setTimeout(() => {
				attacker === this.player ? this.enemyTurn() : this.playerTurn();
				if (attacker === this.player) {
					this.enemyChoosesMove();
				}
			}, this.dialogueDelay);
		} else {
			let isDead = defender.takeDamage(value);
			this.battleHUD.updateUnitHUD(defender);
			if (isDead) {
				this.battleState =
					attacker === this.player ? "PlayerWin" : "EnemyWin";
				this.dialogue.innerText = `${defender.name} fainted!`;
				setTimeout(() => {
					this.endBattle();
				}, this.dialogueDelay);
			} else {
				this.battleState =
					attacker === this.player ? "EnemyTurn" : "PlayerTurn";
				this.dialogue.innerText = `${defender.name} is hurt!`;
				setTimeout(() => {
					if (attacker === this.player) {
						this.enemyTurn();
						this.enemyChoosesMove();
					} else {
						this.playerTurn();
					}
				}, this.dialogueDelay);
			}
		}
	}

	heal(player, value) {
		player.heal(value);
		this.battleHUD.updateUnitHUD(player);
		this.dialogue.innerText = `${player.name} is healed!`;
		this.battleState = player === this.player ? "EnemyTurn" : "PlayerTurn";
		setTimeout(() => {
			player === this.player ? this.enemyTurn() : this.playerTurn();
			if (player === this.enemy) {
				this.enemyChoosesMove();
			}
		}, this.dialogueDelay);
	}

	endBattle() {
		if (this.battleState === "PlayerWin") {
			this.dialogue.innerText = "You won!";
			setTimeout(() => {
				this.enableButtons();
				this.playerCanvas.style.display = "none";
				this.enemyCanvas.style.display = "none";
				if (this.enemy.name === "Draymond") {
					this.overworld.changeScreen(Cutscene2);
				} else if (this.enemy.name === "Robert") {
					this.overworld.changeScreen(Cutscene3);
				}
			}, this.dialogueDelay);
		} else if (this.battleState === "EnemyWin") {
			this.dialogue.innerText = "You lost!";
			this.overworld.changeScreen(StartScreen);
		}
	}
}
