export default class BattleHUD {
    constructor(unit) {
        this.unit = unit
        if (this.unit.team === "player") {
            this.nameText = document.getElementsByClassName("player-name")[0]
            this.hpSlider = document.getElementsByClassName("player-hp")[0]
        } else if (this.unit.team === "enemy") {
            this.nameText = document.getElementsByClassName("enemy-name")[0]
            this.hpSlider = document.getElementsByClassName("enemy-hp")[0]
        }
        this.MaxHPSliderWidth = this.hpSlider.style.width
        this.width = this.hpSlider.style.width.split("px")[0] // parses the px out off the maxHPsliderwidth variable
        this.CurrentHPSliderWidth = this.width * this.unit.currentPercentage
        this.move1 = document.getElementById("fight1")
        this.move2 = document.getElementById("fight2")
        this.move3 = document.getElementById("fight3")
        this.move4 = document.getElementById("fight4")
    }

    setHUD() {
        if (this.unit.team === "player") {
            this.move1.innerText = this.unit.move1.name
            this.move2.innerText = this.unit.move2.name
            this.move3.innerText = this.unit.move3.name
            this.move4.innerText = this.unit.move4.name
        }
        this.nameText.innerText = this.unit.name // setting HUD name
        this.hpSlider.style.width = this.CurrentHPSliderWidth + "px" // setting HUD hp
    }

    setHP(HPPercentage) {
        this.hpSlider.style.width = (this.width * HPPercentage) + "px"
        if (HPPercentage <= 0) {
            this.hpSlider.style.width = "0px"
        }
    }
}