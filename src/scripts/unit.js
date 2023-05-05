export default class Unit {
	constructor(name, health, team, moves) {
		this.name = name;
		this.team = team;
		this.maxHP = health;
		this.currentHP = health;
		this.moves = moves.map((move) => ({
			name: Object.keys(move)[0],
			damage: move[Object.keys(move)[0]][0],
			accuracy: move[Object.keys(move)[0]][1],
		}));
        this.move1 = this.moves[0];
        this.move2 = this.moves[1];
        this.move3 = this.moves[2];
        this.move4 = this.moves[3];

		// Set healing property only for the 4th move
		this.moves[3].healing = this.moves[3].damage;
	}

    receiveAttackUpgrade(amount) {
        this.moves.forEach((move) => {
            move.damage += amount;
        });
    }

    receiveHealthUpgrade(amount) {
        this.maxHP += amount;
        this.currentHP += amount;
    }

	takeDamage(damage) {
		this.currentHP -= damage;
		return this.currentHP <= 0;
	}

	heal(healing) {
		this.currentHP = Math.min(this.currentHP + healing, this.maxHP);
	}
}
