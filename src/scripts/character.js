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

		// spritesheet
		this.spriteSheet = canvasVariables.spriteSheet;

		// drawing 6
		this.srcX = canvasVariables.srcX;
		this.srcY = canvasVariables.srcY;
		this.srcWidth = canvasVariables.srcWidth;
		this.srcHeight = canvasVariables.srcHeight;
		this.destX = canvasVariables.destX;
		this.destY = canvasVariables.destY;

		// specialties
		this.width = canvasVariables.width;
		this.frameCount = canvasVariables.frameCount;
		this.slowDown = canvasVariables.slowDown;
		this.scaling = canvasVariables.scaling;
	}

	receiveAttackUpgrade(amount) {
		this.moves.forEach((move) => {
			move.value += amount;
		});
	}

	receiveHealthUpgrade(amount) {
		this.maxHP += amount;
		this.currentHP += amount;
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
