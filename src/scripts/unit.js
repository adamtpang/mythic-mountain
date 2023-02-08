export default class Unit {
    constructor(name, health, team) {
        this.name = name
        this.team = team
        this.maxHP = health
        this.currentHP = health - 30
        this.currentPercentage = this.currentHP / this.maxHP
    }

    attack() {
        // attack logic
    }
}