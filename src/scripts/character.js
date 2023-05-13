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
	}

	receiveAttackUpgrade() {
		const amount = 5;
		this.moves.forEach((move) => {
			move.value += amount;
		});
	}

	receiveVitalityUpgrade() {
		const amount = 20;
		this.maxHP += amount;
		this.currentHP += amount;
		this.move4.value += amount / 2;
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
