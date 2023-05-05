import BattleHUD from "./battleHUD.js";
import Cutscene2 from "./cutscene2.js";
import Cutscene3 from "./cutscene3.js";
import StartScreen from "./start-screen.js";

export default class BattleLogic {
	constructor(overworld, playerCanvas, enemyCanvas, player, enemy) {
		this.player = player;
		this.enemy = enemy;
		this.playerCanvas = playerCanvas;
		this.enemyCanvas = enemyCanvas;
		this.overworld = overworld;
		this.playerHUD = new BattleHUD(this.player); // player HUD
		this.enemyHUD = new BattleHUD(this.enemy); // enemy HUD
		this.dialogue = document.getElementsByClassName("dialogue")[0];
		this.dialogue.style.left = "320px";
		this.dialogue.style.fontSize = "16px";
		this.battleState = "Start"; // states = "Start", "PlayerTurn", "EnemyTurn", "PlayerWin", "EnemyWin"
		this.dialogueDelay = 2000;

		this.fightButton = document.getElementById("fight-button");
		this.choice1 = document.getElementById("fight1");
		this.choice2 = document.getElementById("fight2");
		this.choice3 = document.getElementById("fight3");
		this.choice4 = document.getElementById("fight4");

		this.fightChoices = [
			this.choice1,
			this.choice2,
			this.choice3,
			this.choice4,
		];
	}

	init() {
		// battle initiation
		this.playerHUD.setHUD(); // sets the HUD
		this.enemyHUD.setHUD(); // sets the HUD
		this.dialogue.innerText = `A wild ${this.enemy.name} appeared!`;
	}

	// player chooses
	onFightButton() {
		// fight button
		this.playerTurn();
	}

	disableButtons() {
		this.choice1.disabled = true;
		this.choice2.disabled = true;
		this.choice3.disabled = true;
		this.choice4.disabled = true;
	}

	enableButtons() {
		this.choice1.disabled = false;
		this.choice2.disabled = false;
		this.choice3.disabled = false;
		this.choice4.disabled = false;
	}

	onFight(choice) {
		this.disableButtons();
		if (this.battleState !== "PlayerTurn") return;

		if (choice === this.choice1) {
			this.dialogue.innerText = `${this.player.name} used ${this.player.move1.name}!`;
			setTimeout(() => {
				this.playerAttack(
					this.player.move1.damage,
					this.player.move1.accuracy
				);
			}, this.dialogueDelay);
		} else if (choice === this.choice2) {
			this.dialogue.innerText = `${this.player.name} used ${this.player.move2.name}!`;
			setTimeout(() => {
				this.playerAttack(
					this.player.move2.damage,
					this.player.move2.accuracy
				);
			}, this.dialogueDelay);
		} else if (choice === this.choice3) {
			this.dialogue.innerText = `${this.player.name} used ${this.player.move3.name}!`;
			setTimeout(() => {
				this.playerAttack(
					this.player.move3.damage,
					this.player.move3.accuracy
				);
			}, this.dialogueDelay);
		} else if (choice === this.choice4) {
			this.dialogue.innerText = `${this.player.name} used ${this.player.move4.name}!`;
			setTimeout(() => {
				this.playerHeal(this.player.move4.healing);
			}, this.dialogueDelay);
		}
	}

	// its dialogue setting, then action

	playerTurn() {
		// player turn
		this.enableButtons();
		this.battleState = "PlayerTurn";
		this.dialogue.innerText = "Choose a move!";
	}

	enemyTurn() {
		// enemy turn
		this.battleState = "EnemyTurn";
		this.dialogue.innerText = `${this.enemy.name} is thinking...`;
	}

	playerAttack(damage, accuracy) {
		// player attacks
		if (Math.random() * 100 > accuracy) {
			// if the move misses
			this.battleState = "EnemyTurn";
			this.dialogue.innerText = "The attack missed!";
			setTimeout(() => {
				this.enemyTurn();
				this.enemyChoosesMove();
			}, this.dialogueDelay);
			return;
		} else {
			// if the move hits
			let isDead = this.enemy.takeDamage(damage); // enemy takes damage
			this.enemyHUD.setHP(this.enemy.currentHP / this.enemy.maxHP); // updates enemy HP
			if (isDead) {
				// if enemy is dead
				this.battleState = "PlayerWin";
				this.dialogue.innerText = `${this.enemy.name} fainted!`;
				setTimeout(() => {
					this.endBattle();
				}, this.dialogueDelay);
				return;
			} else {
				// if enemy is not dead
				this.battleState = "EnemyTurn";
				this.dialogue.innerText = `${this.enemy.name} is hurt!`;
				setTimeout(() => {
					this.enemyTurn();
					this.enemyChoosesMove();
				}, this.dialogueDelay);
			}
		}
	}

	enemyAttack(damage, accuracy) {
		// enemy attacks
		if (Math.random() * 100 > accuracy) {
			// if the move misses
			this.battleState = "PlayerTurn";
			this.dialogue.innerText = "The attack missed!";
			setTimeout(() => {
				this.playerTurn();
			}, this.dialogueDelay);
			return;
		} else {
			// if the move hits
			let isDead = this.player.takeDamage(damage); // player takes damage
			this.playerHUD.setHP(this.player.currentHP / this.player.maxHP); // updates player HP
			if (isDead) {
				this.battleState = "EnemyWin";
				this.dialogue.innerText = `${this.player.name} fainted!`;
				setTimeout(() => {
					this.endBattle();
				}, this.dialogueDelay);
				return;
			} else {
				this.battleState = "PlayerTurn";
				this.dialogue.innerText = `${this.player.name} is hurt!`;
				setTimeout(() => {
					this.playerTurn();
				}, this.dialogueDelay);
			}
		}
	}

	enemyChoosesMove() {
		// enemy chooses move
		let enemyMoves = [
			this.enemy.move1,
			this.enemy.move2,
			this.enemy.move3,
			this.enemy.move4,
		];
		let randomMove =
			enemyMoves[Math.floor(Math.random() * enemyMoves.length)];
		if (randomMove === this.enemy.move4) {
			// if the move is heal
			this.dialogue.innerText = `${this.enemy.name} used ${randomMove.name}!`;
			setTimeout(() => {
				this.enemyHeal(randomMove.healing);
			}, this.dialogueDelay);
		} else {
			// if the move is attack
			this.dialogue.innerText = `${this.enemy.name} used ${randomMove.name}!`;
			setTimeout(() => {
				this.enemyAttack(randomMove.damage, randomMove.accuracy);
			}, this.dialogueDelay);
		}
	}

	playerHeal(healing) {
		// player heals
		this.player.heal(healing);
		this.playerHUD.setHP(this.player.currentHP / this.player.maxHP);
		this.battleState = "EnemyTurn";
		this.dialogue.innerText = `${this.player.name} is healed!`;
		setTimeout(() => {
			this.enemyTurn();
			this.enemyChoosesMove();
		}, this.dialogueDelay);
	}

	enemyHeal(healing) {
		// enemy heals
		this.enemy.heal(healing);
		this.enemyHUD.setHP(this.enemy.currentHP / this.enemy.maxHP);
		this.battleState = "PlayerTurn";
		this.dialogue.innerText = `${this.enemy.name} is healed!`;
		setTimeout(() => {
			this.playerTurn();
		}, this.dialogueDelay);
	}

	endBattle() {
		// ends the battle
		if (this.battleState === "PlayerWin") {
			// if player wins
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
			// if enemy wins
			this.dialogue.innerText = "You lost!";
            this.overworld.changeScreen(StartScreen);
		}
	}
}
