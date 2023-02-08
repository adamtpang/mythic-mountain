import Unit from "./unit.js"
import BattleHUD from "./battleHUD.js"

export default class Battle {
    constructor() {
        this.player = new Unit("Astalor", 120, "player")
        this.enemy = new Unit("Draymond", 60, "enemy")
        this.playerHUD = new BattleHUD(this.player)
        this.enemyHUD = new BattleHUD(this.enemy)
        this.battleState = "Start"
        this.currentplayer = this.player
    }

    init() {
        let dialogue = document.getElementsByClassName("dialogue")
        dialogue[0].innerText = `What will ${this.player.name} do...`
        this.playerHUD.setHUD()
        this.enemyHUD.setHUD()
    }
}