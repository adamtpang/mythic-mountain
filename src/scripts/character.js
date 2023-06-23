// the character class for battle logic

// be the class for every character

export default class Character {
	constructor(name, health, team, moves, canvasVariables) {
		this.name = name;
		this.maxHP = health;
		this.currentHP = health;
		this.team = team;
		this.moves = moves.map((move) => ({
			name: Object.keys(move)[0],
			value: move[Object.keys(move)[0]][0],
			accuracy: move[Object.keys(move)[0]][1],
		}));
		this.move1 = this.moves[0];
		this.move2 = this.moves[1];
		this.move3 = this.moves[2];
		this.move4 = this.moves[3];
		this.move4.isHeal = true;

		this.canvasVariables = canvasVariables;

		this.attackUpgradeAmount = 5;
		this.vitalityUpgradeAmount = 20;

		this.attackUpgradesReceived = 0;
		this.vitalityUpgradesReceived = 0;
	}

	receiveAttackUpgrade() {
		this.moves.forEach((move) => {
			move.value += this.attackUpgradeAmount;
		});

		this.attackUpgradesReceived++;
	}

	receiveVitalityUpgrade() {
		this.maxHP += this.vitalityUpgradeAmount;
		this.currentHP += this.vitalityUpgradeAmount;
		this.move4.value += this.vitalityUpgradeAmount / 2;

		this.vitalityUpgradesReceived++;
	}

	resetUpgrades() {
		// for every attack upgrade, subtract the upgrade amount from each move's value
		for (let i = 0; i < this.attackUpgradesReceived; i++) {
			this.moves.forEach((move) => {
				move.value -= this.attackUpgradeAmount;
			});
		}

		// for every vitality upgrade, subtract the upgrade amount from maxHP and currentHP
		for (let i = 0; i < this.vitalityUpgradesReceived; i++) {
			this.maxHP -= this.vitalityUpgradeAmount;
			this.currentHP -= this.vitalityUpgradeAmount;
			this.move4.value -= this.vitalityUpgradeAmount / 2;
		}

		this.attackUpgradesReceived = 0;
		this.vitalityUpgradesReceived = 0;
	}

	takeDamage(damage) {
		this.currentHP -= damage;
	}

	isDead() {
		return this.currentHP <= 0;
	}

	takeHealing(healing) {
		this.currentHP = Math.min(this.currentHP + healing, this.maxHP);
	}

	healToFull() {
		this.currentHP = this.maxHP;
	}
}
