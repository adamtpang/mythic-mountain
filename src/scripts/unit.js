export default class Unit {
    constructor(name, health, team, moves) {
        this.name = name
        this.team = team
        this.maxHP = health
        this.currentHP = health
        this.currentPercentage = this.currentHP / this.maxHP
        this.move1Hash = moves[0]
        this.move2Hash = moves[1]
        this.move3Hash = moves[2]
        this.move4Hash = moves[3]
        this.move1 = {}
        this.move2 = {}
        this.move3 = {}
        this.move4 = {}
        this.move1.name = Object.keys(this.move1Hash)[0]
        this.move2.name = Object.keys(this.move2Hash)[0]
        this.move3.name = Object.keys(this.move3Hash)[0]
        this.move4.name = Object.keys(this.move4Hash)[0]
        this.move1.damage = Object.values(this.move1Hash)[0][0]
        this.move2.damage = Object.values(this.move2Hash)[0][0]
        this.move3.damage = Object.values(this.move3Hash)[0][0]
        this.move4.healing = Object.values(this.move4Hash)[0][0]
        this.move1.accuracy = Object.values(this.move1Hash)[0][1]
        this.move2.accuracy = Object.values(this.move2Hash)[0][1]
        this.move3.accuracy = Object.values(this.move3Hash)[0][1]
    }

    takeDamage(damage) {
        this.currentHP -= damage
        if (this.currentHP <= 0) {
            return true
        } else {
            return false
        }
    }

    heal(healing) {
        this.currentHP += healing
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP
        }
    }
}